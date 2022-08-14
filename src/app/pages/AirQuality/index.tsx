import { useAirQualityController } from '@controllers/open-source';
import Context from '@controllers/open-source/context';

import Page from './page';
import './style.scss';

export default function AirQualityPage(): JSX.Element {
  const controller = useAirQualityController();
  return (
    <Context.Provider value={controller}>
      <Page />
    </Context.Provider>
  );
}
