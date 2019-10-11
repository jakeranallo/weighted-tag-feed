import {
  space,
  SpaceProps,
  color,
  ColorProps,
  layout,
  LayoutProps,
  display,
  DisplayProps,
  compose
} from 'styled-system'

export type CommonProps = SpaceProps & LayoutProps & ColorProps & DisplayProps

export const COMMON = compose(
  space,
  color,
  layout,
  display
)
