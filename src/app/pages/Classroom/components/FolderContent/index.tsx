/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useContext } from 'react';

import { Button, RemoveIcon, RobotIcon } from '@reactoso-ui';

import FolderVisibilityContext from '../../FolderVisibility/FolderVisibilityContext';
import Icon from '../Icon';
import './style.scss';

export default function FolderContent({ title, content, isOpened, onClose }) {
  const { lastOpened, setLastOpened } = useContext(FolderVisibilityContext);
  const isCurrentlyOpened = lastOpened === title;
  const handleSelection = () => {
    if (!isCurrentlyOpened) {
      setLastOpened(title);
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
        <Button kind="ghost" className="folder-close" onClick={() => onClose(title)}>
          <RemoveIcon />
        </Button>
        <div className="folder-title">{title}</div>
      </div>
      <div className="folder-inner">
        {content.map((x) => (
          <Icon icon={RobotIcon} key={`${title}${x.title}`} {...x} />
        ))}
      </div>
    </div>
  );
}
