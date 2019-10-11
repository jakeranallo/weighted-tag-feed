import { Box, Flex, Input } from '..'
import { IInput } from '../atoms/Input'
import { COMMON, CommonProps } from '../../global'
import styled from 'styled-components'

interface IIconInput extends IInput {
  before?: React.ReactNode
  after?: React.ReactNode
}

const IconInputBase = ({ before, after, ...props }: IIconInput) => (
  <Flex width="auto" alignItems="center">
    {before && (
      <Box position="absolute" left="0" pl={2}>
        {before}
      </Box>
    )}
    <Input py={2} pl={before ? 4 : 2} pr={after ? 4 : 2} {...props} />
    {after && (
      <Box position="absolute" right="0" pr={2}>
        {after}
      </Box>
    )}
  </Flex>
)

export const IconInput = styled(IconInputBase)<CommonProps>`
  ${COMMON}
`
