import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';

import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from './components/theme-provider';
import { AuthProvider } from './context/AuthContext';
import router from '@/router';
import '@/index.css';
import { DEFAULT_THEME } from './data/constants';
import i18n from './i18n';

const node = document.getElementById('root');

if (!node) throw new Error('root is not found');
const root = createRoot(node);

root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <ThemeProvider defaultTheme={DEFAULT_THEME} storageKey="vite-ui-theme">
        <AuthProvider>
          <RouterProvider router={router} />
          <Toaster />
        </AuthProvider>
      </ThemeProvider>
    </I18nextProvider>
  </React.StrictMode>,
);
