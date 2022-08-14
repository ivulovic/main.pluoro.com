import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useWishlistControllerScope } from '@controllers/app';
import { Container } from '@reactoso-ui';

import List from '../components/List';

import '../style.scss';

export default function WishlistShare(): JSX.Element {
  const [searchParams] = useSearchParams();
  const controller = useWishlistControllerScope();

  useEffect(() => {
    const id = searchParams.get('id');
    if (id) {
      controller.methods.onLoadById({ id });
    }
  }, []);

  return (
    <Container size="lg" direction="column" className="page-wrapper wishlist-container">
      <List source="share" />
    </Container>
  );
}
