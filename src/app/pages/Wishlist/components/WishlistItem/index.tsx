import { Button, ExternalLink, RemoveIcon, ShareIcon, TrashIcon } from '@reactoso-ui';
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
        <p className="date">DATE ADDED {new Date(createdAt).toLocaleDateString()}</p>
        <div className="media-card-controls">
          <Button
            kind="ghost"
            onClick={() => {
              window.open(url, '_blank');
              return false;
            }}
            title="Open wish in a new window"
          >
            <ExternalLink width="1.2rem" height="1.2rem" />
          </Button>
          {onRemove && (
            <Button kind="ghost" onClick={() => onRemove(_id)} title="Remove wish">
              <RemoveIcon width="1.1rem" height="1.1rem" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
