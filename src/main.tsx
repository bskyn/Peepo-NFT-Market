import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider, Global, css } from '@emotion/react';

import App from './App';
import { theme } from './styles/theme';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <App />
        <Global
          styles={css`
            body {
              box-sizing: border-box;
              margin: 0;
              padding: 0;
              background: rgb(30 41 59);
              color: #fff;
              font-family: 'Inter', Helvetica, Sans-Serif;
              font-size: 16px; // 1rem
            }
          `}
        />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
