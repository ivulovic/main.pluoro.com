// eslint-disable-next-line no-restricted-imports
import { IntlProvider as IntlProviderOriginal } from 'react-intl';

import { IntlProviderProps } from './types';
import useLanguageProvider from './useIntlProvider';

export default function IntlInitializer(props: IntlProviderProps): JSX.Element {
  const context = useLanguageProvider();
  const { children, defaultLocale, messages, ...restIntlProps } = props;
  return (
    <IntlProviderOriginal
      locale={context.locale}
      messages={messages[context.locale]}
      defaultLocale={defaultLocale}
      textComponent={React.Fragment}
      {...restIntlProps}
    >
      {children}
    </IntlProviderOriginal>
  );
}
