import { useWishlistControllerScope } from '@controllers/app';
import { AppsScope } from '@controllers/app/settings';
import { useSelector } from '@service';

import WishlistItem from './WishlistItem';

export default function List({ source = null }): JSX.Element {
  const controller = useWishlistControllerScope();
  const data = useSelector((s) => controller.implementation.app.selectors.selectData(s, AppsScope.Wishlist)) || [];
  const onRemove = (id) => {
    controller.methods.onRemove({ id });
  };

  const onRemoveHandler = source == 'share' ? null : onRemove;

  return (
    <div className="wishlist-items">
      {data?.length === 0 && <div>No wishes</div>}
      {data.map((x) => (
        <WishlistItem key={x._id} {...x} onRemove={onRemoveHandler} />
      ))}
    </div>
  );
}
