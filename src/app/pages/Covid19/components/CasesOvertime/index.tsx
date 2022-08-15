import Subtitle from '@components/Subtitle';
import { FormattedMessage } from '@translations';

import { ChartDataItem, MonthlyDataProps } from '../../types';
import LineChartSection from '../LineChartSection';

export default function CasesOvertime(props: MonthlyDataProps): JSX.Element {
  const { data } = props;
  if (!data) return <></>;
  const confirmed: Array<ChartDataItem> = [];
  const deaths: Array<ChartDataItem> = [];
  const tested: Array<ChartDataItem> = [];
  const hospitalized: Array<ChartDataItem> = [];
  const onRespirator: Array<ChartDataItem> = [];
  data.forEach(({ sumDeaths, sumTested, sumPositive, sumHospitalized, onRespiratorForDate, date }) => {
    const d = new Date(date);
    const ts = Date.UTC(d.getFullYear(), d.getMonth(), 1);
    deaths.push([ts, sumDeaths]);
    tested.push([ts, sumTested]);
    confirmed.push([ts, sumPositive]);
    hospitalized.push([ts, sumHospitalized]);
    onRespirator.push([ts, onRespiratorForDate]);
  });
  return (
    <div>
      <Subtitle>
        <FormattedMessage id="statisticOverview" />
      </Subtitle>
      <LineChartSection
        data={{
          deaths,
          tested,
          confirmed,
          hospitalized,
          onRespirator,
        }}
      />
    </div>
  );
}
