import { useSearchParams } from 'react-router-dom';

import Title from '@components/Title';
import { useTranslation } from '@translations';
import db from '@utils/search/db';
// import { Helmet } from 'react-helmet-async';

import ResultRow from './ResultRow';

import './style.scss';
import Subtitle from '@components/Subtitle';

function SearchPage(props) {
  const t = useTranslation();
  const [searchParams] = useSearchParams();
  const q = searchParams.get('q');
  const searchResult = db.find((x) => x.title === q) || {
    results: [],
  };
  return (
    <>
      {/* <Helmet>
        <title>
          {t('searchResultsForTerm')}: {q}
        </title>
      </Helmet> */}
      <div className="page-wrapper search-page">
        {searchResult.results.length ? (
          <Subtitle>
            {t('searchResultsForTerm')}: <strong>{q}</strong>
          </Subtitle>
        ) : (
          <Subtitle>{t('noSearchResults')}</Subtitle>
        )}
        <main className="main">{searchResult.results.map(ResultRow)}</main>
      </div>
    </>
  );
}

export default SearchPage;
