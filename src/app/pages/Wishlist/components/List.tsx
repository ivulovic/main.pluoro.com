import { useWishlistControllerScope } from '@controllers/app';
import { AppsScope } from '@controllers/app/settings';
import { useSelector } from '@service';
import { useTranslation } from '@translations';

import WishlistItem from './WishlistItem';

export default function List({ source = null }): JSX.Element {
  const t = useTranslation();
  const controller = useWishlistControllerScope();
  const data = useSelector((s) => controller.implementation.app.selectors.selectData(s, AppsScope.Wishlist)) || [];
  const onRemove = (id: string): void => controller.methods.onRemove({ id });

  const onRemoveHandler = source == 'share' ? null : onRemove;

  return (
    <div className="wishlist-items">
      {data?.length === 0 && <div>{t('noWishes')}</div>}
      {data.map((x) => (
        <WishlistItem key={x._id} {...x} onRemove={onRemoveHandler} />
      ))}
    </div>
  );
}
