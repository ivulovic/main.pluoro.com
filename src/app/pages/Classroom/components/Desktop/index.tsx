import { useState, useContext, useRef, useMemo } from 'react';

import { FolderIcon } from '@reactoso-ui';

import FolderVisibilityContext from '../../FolderVisibility/FolderVisibilityContext';
import Browser from '../Browser';
import FolderContent from '../FolderContent';
import Icon from '../Icon';
import './style.scss';

const defaultQueryParams = 'fontsize=14&hidenavigation=1&theme=light&view=preview&autoresize=1&moduleview=0';

const webpages = [
  {
    title: 'Class Component Lifecycle',
    url: `https://codesandbox.io/embed/react-grid-layout-react-lifecycle-rhk5y?${defaultQueryParams}`,
  },
  { title: 'Keys and List', url: `https://codesandbox.io/embed/react-list-and-keys-f4xzd?${defaultQueryParams}` },
  { title: 'Clojure Increment', url: `https://codesandbox.io/embed/react-clojure-task-dgvvy?${defaultQueryParams}` },
  { title: 'Reconciliation', url: `https://codesandbox.io/embed/react-reconciliation-kwzfx?${defaultQueryParams}` },
  { title: 'Cache Concept', url: `https://codesandbox.io/embed/react-redux-cache-2tui4?${defaultQueryParams}` },
];

export default function Desktop() {
  const contentRef = useRef();
  const [page, setPage] = useState({});

  const { setLastOpened } = useContext(FolderVisibilityContext);

  const openPage = (title) => {
    const page = webpages.find((x) => x.title === title);
    if (page) {
      setLastOpened(page.title);
      setPage(page);
    }
  };

  const folderList = [
    {
      title: 'React Tasks',
      content: [
        { title: 'Class Component Lifecycle', onClick: () => openPage('Class Component Lifecycle') },
        { title: 'Clojure Increment', onClick: () => openPage('Clojure Increment') },
      ],
    },
    {
      title: 'React Redux',
      content: [{ title: 'Cache Concept', onClick: () => openPage('Cache Concept') }],
    },
    {
      title: 'React Basics',
      content: [
        { title: 'Keys and List', onClick: () => openPage('Keys and List') },
        { title: 'Reconciliation', onClick: () => openPage('Reconciliation') },
      ],
    },
  ];
  const [folders, setFolders] = useState(folderList.map((x) => ({ ...x, isOpened: false })));

  const openFolder = (title) => {
    setFolders(folders.map((x) => (x.title === title ? { ...x, isOpened: true } : x)));
    setLastOpened(title);
  };
  const closeFolder = (title) => {
    setFolders(folders.map((x) => (x.title === title ? { ...x, isOpened: false } : x)));
    setLastOpened(null);
  };
  const closeBrowser = () => {
    setPage({});
  };
  const contentHeight = useMemo(
    () => (contentRef.current ? contentRef.current.getBoundingClientRect().height : 0),
    [contentRef.current],
  );
  return (
    <div className="education-desktop">
      <div className="column-list" ref={contentRef}>
        {folders.map((x) => {
          return (
            <div key={x.title} style={{ position: 'relative' }}>
              <Icon icon={FolderIcon} title={x.title} onClick={openFolder} />
              <FolderContent title={x.title} content={x.content} isOpened={x.isOpened} onClose={closeFolder} />
            </div>
          );
        })}
      </div>
      {page.url && (
        <Browser onClose={closeBrowser} title={page.title} contentHeight={contentHeight}>
          <iframe className="iframe" src={page.url}></iframe>
        </Browser>
      )}
    </div>
  );
}
