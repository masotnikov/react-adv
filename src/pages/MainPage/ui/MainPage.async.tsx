import { lazy } from 'react';

export const MainPageAsync = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(
      () =>
      // @ts-ignore
      // eslint-disable-next-line brace-style
      {
        // @ts-ignore
        return resolve(import('./MainPage'));
      },
      2000,
    );
  });
});
