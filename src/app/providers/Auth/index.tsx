import useAuthController from '@controllers/auth';
import AuthContext from '@controllers/auth/context';

import Provider from './provider';

export default function AuthProvider({ children }) {
  const controller = useAuthController();
  return (
    <AuthContext.Provider value={controller}>
      <Provider>{children}</Provider>
    </AuthContext.Provider>
  );
}
