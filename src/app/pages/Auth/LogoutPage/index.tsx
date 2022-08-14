import { useEffect } from 'react';

import { useAuthControllerScope } from '@controllers/auth';

export default function LogoutPage() {
  const auth = useAuthControllerScope();
  useEffect(() => {
    auth.methods.onLogout();
  }, []);
  return <div className="page-wrapper"></div>;
}
