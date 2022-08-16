import FolderVisibilityProvider from './FolderVisibility';
// import Context from './context';
import Page from './page';
import './style.scss';

export default function ClassroomPage(): JSX.Element {
  // const controller = useHomeController();
  return (
    <>
      {/* // <Context.Provider value={{}}> */}
      <FolderVisibilityProvider>
        <Page />
      </FolderVisibilityProvider>
      {/* // </Context.Provider> */}
    </>
  );
}
