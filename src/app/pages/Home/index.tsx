import useHomeController from '@controllers/home';

import Context from './context';
import Page from './page';
import './style.scss';

export default function HomePage(): JSX.Element {
  const controller = useHomeController();
  return (
    <Context.Provider value={controller}>
      <Page />
    </Context.Provider>
  );
}
