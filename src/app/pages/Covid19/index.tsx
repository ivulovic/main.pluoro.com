import { useCovidController } from '@controllers/open-source';
import Context from '@controllers/open-source/context';

import Page from './page';
import './style.scss';

export default function CovidPage() {
  const controller = useCovidController();
  return (
    <Context.Provider value={controller}>
      <Page />
    </Context.Provider>
  );
}
