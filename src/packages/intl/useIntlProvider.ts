import { useContext } from 'react';

import I18NContext from './context';

export default function useIntlProvider() {
  const context = useContext(I18NContext);

  return context;
}
