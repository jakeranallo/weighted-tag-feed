import styled from 'styled-components'
import {
  space,
  SpaceProps,
  layout,
  LayoutProps,
  color,
  ColorProps,
  grid,
  GridProps
} from 'styled-system'

export type GridBoxProps = SpaceProps & LayoutProps & ColorProps & GridProps

export const Grid = styled.div<GridBoxProps>`
  ${space}
  ${layout}
  ${color}
  ${grid}
`
