import Subtitle from '@components/Subtitle';
import { FormattedMessage } from '@translations';

import { ChartDataItem } from '../../types';
import StackedBarSection from '../StackedBarSection';

export default function CasesByMonth(props): JSX.Element {
  const { data } = props;
  if (!data) return <></>;
  const confirmed: Array<ChartDataItem> = [];
  const deaths: Array<ChartDataItem> = [];
  const tested: Array<ChartDataItem> = [];
  const hospitalized: Array<ChartDataItem> = [];
  data.forEach(({ sumPositive, sumDeaths, sumTested, sumHospitalized, date }, i) => {
    const d = new Date(date);
    const ts = Date.UTC(d.getFullYear(), d.getMonth(), 1);
    const confirmedValue = i === 0 ? sumPositive : sumPositive - data[i - 1].sumPositive;
    const deathsValue = i === 0 ? sumDeaths : sumDeaths - data[i - 1].sumDeaths;
    const testedValue = i === 0 ? sumTested : sumTested - data[i - 1].sumTested;
    const hospitalizedValue = i === 0 ? sumHospitalized : sumHospitalized - data[i - 1].sumHospitalized;

    confirmed.push([ts, confirmedValue]);
    deaths.push([ts, deathsValue]);

    tested.push([ts, testedValue]);
    hospitalized.push([ts, hospitalizedValue]);
  });
  return (
    <div>
      <Subtitle>
        <FormattedMessage id="monthlyStatistic" />
      </Subtitle>
      <StackedBarSection
        data={{
          confirmed,
          deaths,
          tested,
          hospitalized,
        }}
      />
    </div>
  );
}
