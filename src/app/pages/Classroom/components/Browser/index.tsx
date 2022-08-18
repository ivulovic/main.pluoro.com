import { useContext } from 'react';

import { Button, RemoveIcon } from '@reactoso-ui';

import FolderVisibilityContext from '../../FolderVisibility/FolderVisibilityContext';
import './style.scss';

export default function Browser({ children, onClose, title, id, contentHeight }) {
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
      className={`browser-wrap ${isCurrentlyOpened ? 'in-focus' : ''}`}
      style={{
        transform: `translate(-50%, -${contentHeight}px)`,
      }}
    >
      <div className="browser ui-droppable" style={{ display: 'block' }}>
        <div className="browser-panel">
          <Button kind="ghost" className="browser-close" onClick={() => onClose()}>
            <RemoveIcon />
          </Button>
          <div className="browser-title">{title}</div>
        </div>
        <div className="website">
          <div className="website-menu">
            <div className="website-inner">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
