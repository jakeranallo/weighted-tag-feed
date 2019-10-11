import {
  black,
  white,
  gray,
  blue,
  green,
  orange,
  purple,
  red,
  yellow
} from '../global/colors.json'

const colors = {
  black,
  white,
  gray,
  blue,
  green,
  orange,
  purple,
  red,
  yellow,
  blackfade15: 'rgba(27, 31, 35, 0.15)',
  blackfade20: 'rgba(27, 31, 35, 0.20)',
  blackfade35: 'rgba(27, 31, 35, 0.35)',
  blackfade50: 'rgba(27, 31, 35, 0.5)',
  whitefade15: 'rgba(255, 255, 255, 0.15)',
  whitefade20: 'rgba(255, 255, 255, 0.20)',
  whitefade35: 'rgba(255, 255, 255, 0.35)',
  whitefade50: 'rgba(255, 255, 255, 0.5)',
  state: {
    error: red[5],
    failure: red[5],
    pending: yellow[7],
    queued: yellow[7],
    success: green[5],
    unknown: gray[4]
  }
}

export const theme = {
  colors,
  breakpoints: ['544px', '768px', '1012px', '1280px'],
  maxWidths: {
    small: '544px',
    medium: '768px',
    large: '1012px',
    xlarge: '1280px'
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    normal:
      'UntitledSans, apple-system, BlinkMacSystemFont, "Helvetica Neue", helvetica, arial, sans-serif',
    medium:
      'UntitledSans-Medium, apple-system, BlinkMacSystemFont, "Helvetica Neue", helvetica, arial, sans-serif',
    mono:
      'OperatorMono-Book, Consolas, "Liberation Mono", Menlo, Courier, monospace'
  },
  buttonVariants: {
    primary: {
      fontSize: '12pt',
      padding: `8px 16px`,
      borderRadius: '4px'
    },
    secondary: {
      fontSize: '16pt',
      padding: `12px 24px`,
      borderRadius: '50%'
    }
  },
  radii: [0, 3, 6],
  shadows: {
    small: '0 1px 1px rgba(27, 31, 35, 0.1)',
    medium: '0 1px 5px rgba(27, 31, 35, 0.15)',
    large: '0 1px 15px rgba(27, 31, 35, 0.15)',
    extraLarge: '0 10px 50px rgba(27, 31, 35, 0.07)'
  },
  zIndices: {
    modal: 6000,
    overlay: 4000,
    dropdown: 3000,
    layerThree: 2500,
    layerTwo: 2000,
    layerOne: 1500,
    foreground: 1000,
    background: -1000
  }
}
