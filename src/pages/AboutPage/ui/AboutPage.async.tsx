import { lazy } from 'react';

// @ts-ignore
export const AboutPageAsync = lazy(() => new Promise((resolve) => {
  setTimeout(
    () =>
      // @ts-ignore
      resolve(import('./AboutPage')),
    2000,
  );
}));
