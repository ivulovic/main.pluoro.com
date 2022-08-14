import { useEffect } from 'react';

import { useAuthControllerScope } from '@controllers/auth';

export default function Provider({ children }) {
  const controller = useAuthControllerScope();
  useEffect(() => {
    controller.methods.onGetInfo();
  }, []);

  return <>{children}</>;
}
