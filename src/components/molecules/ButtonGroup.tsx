import styled from 'styled-components'
import { Box } from '..'
import { BoxProps } from '../atoms/Box'

export const ButtonGroup = styled(Box)<BoxProps>`
  vertical-align: middle;
  & > * {
    position: relative;
    border-right-width: 0;
    border-radius: 0;
    :first-child {
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
    }
    :last-child {
      border-right-width: 1px;
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;
    }
    :focus,
    :active,
    :hover {
      border-right-width: 1px;
      + * {
        border-left-width: 0;
      }
    }
    :focus,
    :active {
      z-index: 1;
    }
  }
`
