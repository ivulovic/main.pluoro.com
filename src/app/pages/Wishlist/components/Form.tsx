import { useState } from 'react';

import { useWishlistControllerScope } from '@controllers/app';
import { AppsScope } from '@controllers/app/settings';
import { useAuthControllerScope } from '@controllers/auth';
import { IAuthenticatedUser } from '@implementation/auth/types';
import { Button, Input, Loading, ShareIcon } from '@reactoso-ui';
import { useSelector } from '@service';
import { copyToClipboard } from '@utils/copyToClipboard';

export default function Form(): JSX.Element {
  const controller = useWishlistControllerScope();
  const authController = useAuthControllerScope();
  const user: IAuthenticatedUser = useSelector(authController.implementation.auth.selectors.selectAuthUser);
  const isLoading = useSelector((s) => controller.implementation.app.selectors.selectLoading(s, AppsScope.Wishlist));
  const [url, setUrl] = useState('');
  const onSubmit = (e): void => {
    e.preventDefault();
    if (url) {
      controller.methods.onFetch({ url });
      setUrl('');
    }
  };

  if (isLoading) {
    return <Loading />;
  }
  const handleWishlistLinkCopy = (): void => {
    const sharedWishlistLink = `${window.origin}/wishlist/share?id=` + user.email;
    copyToClipboard(sharedWishlistLink, () => alert('Link to your watchlist is coppied.'));
  };

  return (
    <div className="form">
      <form onSubmit={onSubmit}>
        <Input
          disabled={isLoading}
          pattern="https://.*"
          placeholder="Enter valid URL of a product"
          required
          type="url"
          value={url}
          onChange={(e): void => setUrl(e.target.value)}
        />
        <Button onClick={handleWishlistLinkCopy} title="Copy link to your wishlist">
          <ShareIcon />
        </Button>
      </form>
    </div>
  );
}
