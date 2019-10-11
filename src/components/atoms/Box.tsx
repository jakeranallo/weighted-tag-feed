import styled from 'styled-components'
import {
  space,
  SpaceProps,
  layout,
  LayoutProps,
  color,
  ColorProps,
  typography,
  TypographyProps,
  position,
  PositionProps
} from 'styled-system'
import { motion } from 'framer-motion'

export type BoxProps = SpaceProps &
  LayoutProps &
  ColorProps &
  TypographyProps &
  PositionProps

export const Box = styled(motion.div)<BoxProps>`
  ${space}
  ${layout}
  ${color}
  ${typography}
  ${position}
`

Box.defaultProps = {
  initial: 'hidden',
  animate: 'visible'
}
