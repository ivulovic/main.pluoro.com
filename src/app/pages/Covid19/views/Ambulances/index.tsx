import { useEffect } from 'react';

import Subtitle from '@components/Subtitle';
// import { Helmet } from 'react-helmet-async';
import Title from '@components/Title';
import { useCovidControllerScope } from '@controllers/open-source';
import { OpenSourceScope } from '@implementation/open-source/settings';
import { Loading } from '@reactoso-ui';
import { useSelector } from '@service';
import { FormattedMessage } from '@translations';

import AmbulancesTable from './AmbulancesTable';

const FileName = 'ambulances.json';

export default function Ambulances() {
  const {
    methods,
    implementation: {
      openSource: {
        selectors: { selectData, selectLoading },
      },
    },
  } = useCovidControllerScope();

  useEffect(() => {
    methods.onLoad({ id: FileName });
  }, []);

  const data = useSelector((s) => selectData(s, `${OpenSourceScope.Covid}/${FileName}`)) || [];
  const isLoading = useSelector((s) => selectLoading(s, `${OpenSourceScope.Covid}/${FileName}`)) || false;

  if (isLoading) return <Loading />;

  return (
    <>
      {/* <Helmet>
        <title>
          {t('covid19Title')} | {t('ambulancesView')}
        </title>
      </Helmet> */}
      <Title>
        <FormattedMessage id="ambulancesTitle" />
      </Title>
      <Subtitle>
        <FormattedMessage id="ambulancesDescription" />
      </Subtitle>
      {data.length ? (
        <AmbulancesTable data={data} />
      ) : (
        <Subtitle>
          <FormattedMessage id="noAmbulances" />
        </Subtitle>
      )}
    </>
  );
}
