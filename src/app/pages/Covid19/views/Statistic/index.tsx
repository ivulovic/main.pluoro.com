import { useEffect } from 'react';

import Subtitle from '@components/Subtitle';
// import { Helmet } from 'react-helmet-async';
import Title from '@components/Title';
import { useCovidControllerScope } from '@controllers/open-source';
import { OpenSourceScope } from '@implementation/open-source/settings';
import { Loading } from '@reactoso-ui';
import { useSelector } from '@service';
import { useTranslation } from '@translations';

import CasesByMonth from '../../components/CasesByMonth';
import CasesOvertime from '../../components/CasesOvertime';
import DailyCases from '../../components/DailyCases';
import Sparklines from '../../components/Sparklines';

const FileNameMonthly = 'monthlySummary.json';
const FileNameDaily = 'dailySummary.json';

export default function Statistic() {
  const { t } = useTranslation();
  const {
    methods,
    implementation: {
      openSource: {
        selectors: { selectData, selectLoading },
      },
    },
  } = useCovidControllerScope();

  useEffect(() => {
    methods.onLoad({ id: FileNameMonthly });
    methods.onLoad({ id: FileNameDaily });
  }, []);

  const monthly = useSelector((s) => selectData(s, `${OpenSourceScope.Covid}/${FileNameMonthly}`)) || [];
  const daily = useSelector((s) => selectData(s, `${OpenSourceScope.Covid}/${FileNameDaily}`)) || [];
  const isLoadingMonthly = useSelector((s) => selectLoading(s, `${OpenSourceScope.Covid}/${FileNameMonthly}`)) || false;
  const isLoadingDaily = useSelector((s) => selectLoading(s, `${OpenSourceScope.Covid}/${FileNameDaily}`)) || false;

  if (isLoadingDaily || isLoadingMonthly) {
    return <Loading />;
  }
  return (
    <>
      {/* <Helmet>
        <title>
          {t('covid19Title')} | {t('graphicView')}
        </title>
      </Helmet> */}
      {/* <Subtitle>{t('graphicViewSubtitle')}</Subtitle> */}
      <Title>{t('covid19Title')}</Title>
      <Subtitle>{t('covid19Description')}</Subtitle>
      <Sparklines
        data={{
          monthly,
          daily,
        }}
      />
      <CasesOvertime data={monthly} />
      <CasesByMonth data={monthly} />
      <DailyCases data={daily} />
    </>
  );
}
