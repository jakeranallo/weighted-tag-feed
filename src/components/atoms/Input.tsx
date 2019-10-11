import styled from 'styled-components'
import { space, SpaceProps, layout, LayoutProps } from 'styled-system'

export interface IInput {
  required?: boolean
  type?: string
  value?: string
  placeholder?: string
}

export type InputProps = IInput & SpaceProps & LayoutProps

export const Input = styled.input<InputProps>`
  ${space}
  ${layout}
`
