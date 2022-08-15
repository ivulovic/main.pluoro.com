import { useNavigate } from 'react-router-dom';

import SearchInput from '@components/SearchInput';
import Thumbnail from '@components/Thumbnail';
import { HospitalIcon, Logo, PlantIcon, VirusIcon } from '@reactoso-ui';
import { useTranslation } from '@translations';
import './style.scss';

export default function Page(): JSX.Element {
  const t = useTranslation();
  const navigate = useNavigate();
  const onNavigate = (term) => {
    return navigate('/search?q=' + encodeURIComponent(term));
  };
  return (
    <div className="page-wrapper home-page">
      <div className="page-logo-wrapper">
        <Logo className="l" />
        <h1 className="logo-title">{t('appName')}</h1>
      </div>
      <SearchInput onSelect={onNavigate} />
      <div className="quick-access">
        <Thumbnail link={'/covid19'} icon={VirusIcon} title={'covid19Title'} />
        <Thumbnail link={'/air-quality'} icon={PlantIcon} title={'airQualityTitle'} />
        <Thumbnail link={'/ambulances'} icon={HospitalIcon} title={'ambulancesTitle'} />
      </div>
    </div>
  );
}
