
const AirQualityPage = {
  path: 'air-quality',
  results: [
    {
      title: 'airQualityTitle',
      description: 'airQualityDescription',
      link: '/air-quality',
    },
  ],
};

const AmbulancesPage = {
  path: 'ambulances',
  results: [
    {
      title: 'ambulancesTitle',
      description: 'ambulancesDescription',
      link: '/ambulances',
    },
  ],
};

const Covid19Page = {
  path: 'covid19',
  results: [
    {
      title: 'covid19Title',
      description: 'covid19Description',
      link: '/covid19',
    },
    {
      title: 'statisticTitle',
      description: 'statisticDescription',
      link: `/covid19`,
    },
    {
      title: 'ambulancesTitle',
      description: 'ambulancesDescription',
      link: `/ambulances`,
    },
  ],
};

// const ApplicationsPage = {
//   path: 'applications',
//   results: [
//     {
//       title: 'applications',
//       description: 'applicationsDescription',
//       link: '/applications',
//     },
//     {
//       title: 'wishlistTitle',
//       description: 'wishlistDescription',
//       link: '/wishlist',
//     },
//     {
//       title: 'cryptoexchangeTitle',
//       description: 'cryptoexchangeDescription',
//       link: '/applications/cryptoexchange',
//     },
//   ],
// };

const makeElement = (title, options) => ({
  title,
  ...options,
});

const makeEnElement = (title, options) => ({
  ...makeElement(title, options),
  lang: 'en',
});

// const makeSrElement = (title, options) => ({
//   ...makeElement(title, options),
//   lang: 'sr',
// });

const db = [
  makeEnElement('corona', Covid19Page),
  makeEnElement('coronavirus', Covid19Page),
  makeEnElement('corona virus', Covid19Page),
  makeEnElement('covid', Covid19Page),
  makeEnElement('covid19', Covid19Page),
  makeEnElement('covid 19', Covid19Page),

  makeEnElement('covid ambulances', AmbulancesPage),
  makeEnElement('ambulances', AmbulancesPage),
  // makeEnElement('apps', ApplicationsPage),
  // makeEnElement('applications', ApplicationsPage),
  // makeEnElement('wishlist', ApplicationsPage),
  // makeEnElement('cryptoexchange', ApplicationsPage),
  makeEnElement('air quality', AirQualityPage),
  makeEnElement('air polution', AirQualityPage),
  //
  // makeSrElement('????????????', Covid19Page),
  // makeSrElement('??????????????????????', Covid19Page),
  // makeSrElement('???????????? ??????????', Covid19Page),
  // makeSrElement('?????????? ????????????', Covid19Page),
  // makeSrElement('??????????', Covid19Page),
  // makeSrElement('?????????? ??????????????????', Covid19Page),
  // makeSrElement('??????????????????', Covid19Page),
  // makeSrElement('?????????? 19', Covid19Page),
  // makeSrElement('??????????19', Covid19Page),
  // makeSrElement('????????????????????', ApplicationsPage),
  // makeSrElement('?????????? ????????', ApplicationsPage),
  // makeSrElement('??????????????????????', ApplicationsPage),
  // makeSrElement('????????????', AirQualityPage),
  // makeSrElement('???????????????? ??????????????', AirQualityPage),
  // makeSrElement('???????????????? ??????????????', AirQualityPage),

  // makeSrElement('virus korona', Covid19Page),
  // makeSrElement('korona', Covid19Page),
  // makeSrElement('koronavirus', Covid19Page),
  // makeSrElement('korona virus', Covid19Page),
  // makeSrElement('kovid', Covid19Page),
  // makeSrElement('kovid ambulante', Covid19Page),
  // makeSrElement('ambulante', Covid19Page),
  // makeSrElement('kovid 19', Covid19Page),
  // makeSrElement('kovid19', Covid19Page),
  // makeSrElement('aplikacije', ApplicationsPage),
  // makeSrElement('kriptoberza', ApplicationsPage),
  // makeSrElement('lista ??elja', ApplicationsPage),
  // makeSrElement('lista zelja', ApplicationsPage),
  // makeSrElement('vazduh', AirQualityPage),
  // makeSrElement('zaga??enje vazduha', AirQualityPage),
  // makeSrElement('zagadjenje vazduha', AirQualityPage),
  // makeSrElement('kvalitet vazduha', AirQualityPage),
];

export default db;
