/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Button, RemoveIcon, RobotIcon, UpdateIcon } from '@reactoso-ui';

import FolderVisibilityContext from '../../FolderVisibility/FolderVisibilityContext';
import Icon from '../Icon';

import './style.scss';

export default function FolderContent({ id, source, title, content, isOpened, onClose, onTopicOpen, onTopicRemove }) {
  const { lastOpened, setLastOpened } = useContext(FolderVisibilityContext);
  const isCurrentlyOpened = lastOpened === id;
  const handleSelection = () => {
    if (!isCurrentlyOpened) {
      setLastOpened(id);
    }
  };
  return (
    <div
      onClick={handleSelection}
      className={`folder file-explorer ui-draggable ui-draggable-handle ${isOpened ? 'active-folder' : ''} ${
        isCurrentlyOpened ? 'in-focus' : ''
      }`}
    >
      <div className="folder-panel">
        <Button kind="ghost" className="folder-close" onClick={() => onClose(id)}>
          <RemoveIcon />
        </Button>
        <div className="folder-title">{title}</div>
      </div>
      <div className="folder-inner">
        {content.map((x) => (
          <Icon
            icon={RobotIcon}
            key={`${x._id}`}
            {...x}
            id={x._id}
            title={x.name}
            onClick={onTopicOpen}
            tooltip={
              source !== 'share' && (
                <>
                  <Button onClick={() => onTopicRemove(x._id)}>
                    <RemoveIcon />
                  </Button>
                  <Link to={`/classroom/${id}/${x._id}`}>
                    <UpdateIcon />
                  </Link>
                </>
              )
            }
          />
        ))}
      </div>
    </div>
  );
}
