import { useState, useContext, useRef, useMemo, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useClassroomControllerScope } from '@controllers/app';
import { AppsScope } from '@controllers/app/settings';
import { useAuthControllerScope } from '@controllers/auth';
import { IAuthenticatedUser } from '@implementation/auth/types';
import { AddFolderIcon, AddIcon, Button, FolderIcon, RemoveIcon, ShareIcon, UpdateIcon } from '@reactoso-ui';
import { useSelector } from '@service';
import { useTranslation } from '@translations';
import { copyToClipboard } from '@utils/copyToClipboard';

import FolderVisibilityContext from '../../FolderVisibility/FolderVisibilityContext';
import Browser from '../Browser';
import FolderContent from '../FolderContent';
import Icon from '../Icon';
import './style.scss';

// const defaultQueryParams = 'fontsize=14&hidenavigation=1&theme=light&view=preview&autoresize=1&moduleview=0';

// const webpages = [
//   {
//     title: 'Class Component Lifecycle',
//     url: `https://codesandbox.io/embed/react-grid-layout-react-lifecycle-rhk5y?${defaultQueryParams}`,
//   },
//   { title: 'Keys and List', url: `https://codesandbox.io/embed/react-list-and-keys-f4xzd?${defaultQueryParams}` },
//   { title: 'Clojure Increment', url: `https://codesandbox.io/embed/react-clojure-task-dgvvy?${defaultQueryParams}` },
//   { title: 'Reconciliation', url: `https://codesandbox.io/embed/react-reconciliation-kwzfx?${defaultQueryParams}` },
//   { title: 'Cache Concept', url: `https://codesandbox.io/embed/react-redux-cache-2tui4?${defaultQueryParams}` },
// ];

export default function Desktop({ source = '' }) {
  const {
    methods,
    implementation: {
      app: {
        selectors: { selectData },
      },
    },
  } = useClassroomControllerScope();
  const authController = useAuthControllerScope();

  const user: IAuthenticatedUser = useSelector(authController.implementation.auth.selectors.selectAuthUser);

  const navigate = useNavigate();
  const t = useTranslation();
  const subjects = useSelector((s) => selectData(s, AppsScope.ClassroomSubject)) || [];
  const [folders, setFolders] = useState([]);

  useEffect(() => {
    if (subjects?.length) {
      setFolders(subjects.map((x) => ({ ...x, isOpened: false })));
    }
  }, [subjects]);

  const contentRef = useRef();
  const [page, setPage] = useState({});

  const { setLastOpened } = useContext(FolderVisibilityContext);

  const openTopic = (subjectId, topicId) => {
    const subject = subjects.find((x) => x._id === subjectId);
    const topic = subject.topics.find((x) => x._id === topicId);
    if (topic) {
      setLastOpened(topicId);
      setPage(topic);
    }
  };
  const removeTopic = (subjectId, topicId) => {
    methods.onRemoveTopic({ id: topicId });
    setFolders(
      subjects.map((x) =>
        x._id === subjectId ? { ...x, isOpened: true, topics: x.topics.filter((y) => y._id !== topicId) } : x,
      ),
    );
  };
  const removeSubject = (subjectId) => {
    methods.onRemoveSubject({ id: subjectId });
    setFolders(subjects.filter((x) => x._id !== subjectId));
  };
  const openFolder = (id) => {
    setFolders(folders.map((x) => (x._id === id ? { ...x, isOpened: true } : x)));
    setLastOpened(id);
  };
  const closeFolder = (id) => {
    setFolders(folders.map((x) => (x._id === id ? { ...x, isOpened: false } : x)));
    setLastOpened(null);
  };
  const closeBrowser = () => {
    setPage({});
  };
  const contentHeight = useMemo(
    () => (contentRef.current ? contentRef.current.getBoundingClientRect().height : 0),
    [contentRef.current],
  );

  const createSubject = (): void => navigate('/classroom/create-subject');
  const handleShareLinkCopy = (): void => {
    const sharedWishlistLink = `${window.origin}/classroom/share?id=` + user.email;
    copyToClipboard(sharedWishlistLink, () => alert(t('classroomLinkCopied')));
  };
  return (
    <div className={`classroom-desktop ${source}`}>
      <div className="column-list" ref={contentRef}>
        {source !== 'share' && (
          <div style={{ position: 'relative' }}>
            <Icon
              tooltip={
                <>
                  <Button onClick={handleShareLinkCopy}>
                    <ShareIcon />
                  </Button>
                </>
              }
              icon={AddFolderIcon}
              id="action"
              title={t('createSubject')}
              onClick={createSubject}
            />
          </div>
        )}
        {folders.map((x) => {
          return (
            <div key={x._id} style={{ position: 'relative' }}>
              <Icon
                icon={FolderIcon}
                title={x.name}
                id={x._id}
                onClick={openFolder}
                tooltip={
                  source !== 'share' && (
                    <>
                      <Link to={`/classroom/${x._id}/update-subject`}>
                        <UpdateIcon />
                      </Link>
                      <Link to={`/classroom/${x._id}`}>
                        <AddIcon />
                      </Link>
                      <Button onClick={() => removeSubject(x._id)}>
                        <RemoveIcon />
                      </Button>
                    </>
                  )
                }
              />

              <FolderContent
                id={x._id}
                title={x.name}
                content={x.topics}
                isOpened={x.isOpened}
                onTopicOpen={(id) => openTopic(x._id, id)}
                onTopicRemove={(id) => removeTopic(x._id, id)}
                onClose={closeFolder}
                source={source}
              />
            </div>
          );
        })}
      </div>
      {page.link && (
        <Browser onClose={closeBrowser} id={page._id} title={page.name} contentHeight={contentHeight}>
          <iframe className="iframe" src={page.link}></iframe>
        </Browser>
      )}
    </div>
  );
}
