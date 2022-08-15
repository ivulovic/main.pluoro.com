/* eslint-disable no-restricted-imports */
import { formatTranslationMessages, useIntl } from '@reactoso-intl';

import de from './de/translation.json';
import en from './en/translation.json';
import sr from './sr/translation.json';

export const defaultLocale = 'sr';

export const translationMessages = {
  en: formatTranslationMessages('en', en),
  de: formatTranslationMessages('de', de),
  sr: formatTranslationMessages('sr', sr),
};

export * from '@reactoso-intl';

export function useTranslation(): (id: string) => string {
  const intl = useIntl();
  const t = (id: string) => intl.formatMessage({ id });
  return t;
}
