import styled from 'styled-components'
import {
  space,
  SpaceProps,
  layout,
  LayoutProps,
  color,
  ColorProps,
  flexbox,
  FlexboxProps
} from 'styled-system'

export type FlexProps = SpaceProps & LayoutProps & ColorProps & FlexboxProps

export const Flex = styled.div<FlexProps>`
  display: flex;
  position: relative;
  ${space}
  ${layout}
  ${color}
  ${flexbox}
`
