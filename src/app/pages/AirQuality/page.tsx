import { useEffect, useMemo, useState } from 'react';

import Subtitle from '@components/Subtitle';
import Title from '@components/Title';
import { useAirQualityControllerScope } from '@controllers/open-source';
import { OpenSourceScope } from '@implementation/open-source/settings';
import { Loading } from '@reactoso-ui';
import { useSelector } from '@service';
import { useTranslation } from '@translations';
import formatNumber from '@utils/number/formatNumber';
import './style.scss';

import { getAirQualityStatus, metrics } from './settings';

const FileName = 'airQuality.json';

export default function Page(): JSX.Element {
  const {
    methods,
    implementation: {
      openSource: {
        selectors: { selectData, selectLoading },
      },
    },
  } = useAirQualityControllerScope();
  const t = useTranslation();
  const data = useSelector((s) => selectData(s, `${OpenSourceScope.Sepa}/${FileName}`)) || [];
  const isLoading = useSelector((s) => selectLoading(s, `${OpenSourceScope.Sepa}/${FileName}`)) || false;

  const [filter, setFilter] = useState('all');

  useEffect(() => {
    methods.onLoad({
      id: FileName,
    });
  }, []);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  let dataArr = filter === 'all' ? [...data] : data.filter((x) => x.station.city === filter);
  dataArr = [...dataArr.sort((a, z) => z.value - a.value)];
  const options = useMemo(() => {
    const arr: Array<string> = [];
    data.forEach(({ station: { city } }) => {
      if (!arr.includes(city)) {
        arr.push(city);
      }
    });
    return arr;
  }, [data]);

  if (isLoading) {
    return (
      <div className="page-wrapper">
        <Loading />
      </div>
    );
  }
  return (
    <div className="page-wrapper air-quality-page">
      <Title>{t('airQualityTitle')}</Title>
      <Subtitle>{t('airQualityDescription')}</Subtitle>
      {dataArr.length && !isLoading ? (
        <>
          <div className="filter">
            <select className="select" onChange={handleFilterChange} value={filter}>
              <option value="all">{t('allCities')}</option>
              {options.map((x) => (
                <option key={x} value={x}>
                  {x}
                </option>
              ))}
            </select>
          </div>
          <table className="table">
            <thead>
              <th align="left">{t('city')}</th>
              <th align="left">{t('stationPlace')}</th>
              <th align="left">{t('status')}</th>
              <th align="right">{t('value')}</th>
            </thead>
            <tbody>
              {dataArr.map((x) => {
                return (
                  <tr key={x.station.id} className="table-row">
                    <td align="left">{x.station.city.toUpperCase()}</td>
                    <td align="left">{x.station.name}</td>
                    <td align="left">{t(getAirQualityStatus(x.value))}</td>
                    <td align="right">{formatNumber(x.value, false, 2)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <Subtitle>{t('metrics')}</Subtitle>
          <table className="table">
            <thead>
              <th align="left">{t('status')}</th>
              <th align="right">{t('value')}</th>
            </thead>
            <tbody>
              {metrics.map(([from, to], i) => {
                const isLast = metrics.length - 1 === i;
                return (
                  <tr key={i} className="table-row">
                    <td align="left">{t(getAirQualityStatus(from))}</td>
                    <td align="right">
                      {isLast && (
                        <>
                          {formatNumber(from, false, 2)} {t('moreThan')}
                        </>
                      )}
                      {!isLast && (
                        <>
                          {formatNumber(from, false, 2)}
                          {' - '}
                          {formatNumber(to, false, 2)}
                        </>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      ) : (
        <Subtitle>{t('noAirQualityData')}</Subtitle>
      )}
    </div>
  );
}
