import { Button, ShareIcon, TrashIcon } from '@reactoso-ui';
import './style.scss';

export default function WishlistItem({ _id, title, url, image, createdAt, onRemove }): JSX.Element {
  return (
    <div className="media-card">
      <div className="media-card-wrapper">
        <div
          className="image"
          style={{
            backgroundImage: `url(${image})`,
          }}
        ></div>
      </div>
      <div className="media-card-name">{title}</div>
      <div className="media-card-view">
        <p>Date added: {new Date(createdAt).toLocaleDateString()}</p>
        <div className="media-card-controls">
          <Button
            onClick={() => {
              window.open(url, '_blank');
              return false;
            }}
            title="Open wish in a new window"
          >
            <ShareIcon />
          </Button>
          {onRemove && (
            <Button onClick={() => onRemove(_id)} title="Remove wish">
              <TrashIcon />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
