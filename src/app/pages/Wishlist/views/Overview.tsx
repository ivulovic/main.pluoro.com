import { useEffect } from 'react';

import { useWishlistControllerScope } from '@controllers/app';
import { useTranslation } from '@translations';

import Form from '../components/Form';
import List from '../components/List';

import '../style.scss';

export default function WishlistOverview(): JSX.Element {
  const scope = useWishlistControllerScope();
  const t = useTranslation();
  useEffect(() => {
    scope.methods.onLoadAll();
  }, []);
  return (
    <div className="page-wrapper wishlist-container">
      <Form />
      <List />
    </div>
  );
}
