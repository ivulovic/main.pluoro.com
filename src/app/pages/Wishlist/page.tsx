import { useEffect } from 'react';

import { useWishlistControllerScope } from '@controllers/app';
import { Container } from '@reactoso-ui';

import Form from './components/Form';
import List from './components/List';
import './style.scss';

export default function WishlistPage(): JSX.Element {
  const scope = useWishlistControllerScope();
  useEffect(() => {
    scope.methods.onLoadAll();
  }, []);
  return (
    <Container size="lg" direction="column" className="page-wrapper wishlist-container">
      <Form />
      <List />
    </Container>
  );
}
