import { useState } from 'react';

import FolderVisibilityContext from './FolderVisibilityContext';

export default function FolderVisibilityProvider({ children }) {
  const [lastOpened, setLastOpened] = useState();
  return (
    <FolderVisibilityContext.Provider
      value={{
        lastOpened,
        setLastOpened,
      }}
    >
      {children}
    </FolderVisibilityContext.Provider>
  );
}
