import styled from 'styled-components'
import {
  space,
  SpaceProps,
  layout,
  LayoutProps,
  border,
  BorderProps
} from 'styled-system'
import { motion } from 'framer-motion'

export type ImageProps = SpaceProps & LayoutProps & BorderProps

export const Image = styled(motion.image)<ImageProps>`
  ${space}
  ${layout}
  ${border}
`

Image.defaultProps = {
  initial: 'hidden',
  animate: 'visible'
}

//TODO - Add responsive image props with <picture>
