import { useClassroomController } from '@controllers/app';
import AppContext from '@controllers/app/context';

import FolderVisibilityProvider from './FolderVisibility';
import Page from './page';
import './style.scss';

export default function ClassroomPage(): JSX.Element {
  const controller = useClassroomController();
  return (
    <AppContext.Provider value={controller}>
      <FolderVisibilityProvider>
        <Page />
      </FolderVisibilityProvider>
    </AppContext.Provider>
  );
}
