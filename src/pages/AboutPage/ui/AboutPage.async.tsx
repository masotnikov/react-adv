import { lazy } from 'react';

export const AboutPageAsync = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(
      () =>
      // @ts-ignore
      // eslint-disable-next-line brace-style
      {
        // @ts-ignore
        return resolve(import('./AboutPage'));
      },
      2000,
    );
  });
});
