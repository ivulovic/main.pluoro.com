import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import AuthProvider from '@providers/Auth';
import { configureAppStore, ReduxProvider } from '@service';
import { IntlProvider, defaultLocale, translationMessages } from '@translations';
import { ThemeProvider } from 'app/style/theme/ThemeProvider';

import App from './app';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);

const store = configureAppStore();

root.render(
  <ReduxProvider store={store}>
    <IntlProvider locale={defaultLocale} defaultLocale={defaultLocale} messages={translationMessages}>
      <ThemeProvider>
        <BrowserRouter>
          <StrictMode>
            <AuthProvider>
              <App />
            </AuthProvider>
          </StrictMode>
        </BrowserRouter>
      </ThemeProvider>
    </IntlProvider>
  </ReduxProvider>,
);
