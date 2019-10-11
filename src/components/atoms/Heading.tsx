import styled from 'styled-components'
import {
  space,
  SpaceProps,
  typography,
  TypographyProps,
  color,
  ColorProps
} from 'styled-system'
import { motion } from 'framer-motion'

export type HeadingProps = SpaceProps & TypographyProps & ColorProps

export const Heading = styled(motion.h1)<HeadingProps>`
  ${space}
  ${typography}
  ${color}
`
Heading.defaultProps = {
  mb: 3,
  initial: { opacity: 0 },
  animate: { opacity: 1 }
}
