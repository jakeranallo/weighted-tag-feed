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

export type TextProps = SpaceProps & TypographyProps & ColorProps

export const Text = styled(motion.p)<TextProps>`
  ${space}
  ${typography}
  ${color}
`
Text.defaultProps = {
  initial: { opacity: 0 },
  animate: { opacity: 1 }
}
