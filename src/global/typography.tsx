import { theme } from './theme'
import { css, createGlobalStyle } from 'styled-components'

export const typography = css`
  :root {
    --font-primary: ${theme.fonts.normal};
    --font-secondary: ${theme.fonts.medium};

    /* set base values */
    --text-base-size: 1em;
    --text-scale-ratio: 1.35;

    /* type scale */
    --text-sm: calc(1em / var(--text-scale-ratio));
    --text-md: calc(1em * var(--text-scale-ratio));
    --text-lg: calc(1em * var(--text-scale-ratio) * var(--text-scale-ratio));
    --text-xl: calc(
      1em * var(--text-scale-ratio) * var(--text-scale-ratio) *
        var(--text-scale-ratio)
    );
    --text-xxl: calc(
      1.2em * var(--text-scale-ratio) * var(--text-scale-ratio) *
        var(--text-scale-ratio) * var(--text-scale-ratio)
    );

    /* line-height */
    --heading-line-height: 1.2;
    --body-line-height: 1.4;

    @media (max-width: 1012px) {
      --text-base-size: 0.98em;
      --text-scale-ratio: 1.35;
    }

    @media (max-width: 768px) {
      --text-base-size: 0.94em;
      --text-scale-ratio: 1.28;
    }

    @media (max-width: 544px) {
      --text-base-size: 0.9em;
      --text-scale-ratio: 1.2;
    }
  }

  body {
    font-size: var(--text-base-size);
    font-family: var(--font-primary);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  form legend {
    line-height: var(--heading-line-height);
    color: ${theme.colors.gray[7]};
  }

  /* text size */

  h1 {
    font-size: var(--text-xxl);
    font-family: var(--font-secondary);
  }

  h2 {
    font-size: var(--text-xl);
  }

  h3 {
    font-size: var(--text-lg);
  }

  h4 {
    font-size: var(--text-md);
  }

  small {
    font-size: var(--text-sm);
  }

  p {
    line-height: var(--body-line-height);
    font-size: var(--text-base-size);
  }

  b,
  strong {
    font-weight: bold;
  }
`

export const Typography = createGlobalStyle`${typography}`
