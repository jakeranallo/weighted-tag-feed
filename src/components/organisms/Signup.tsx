import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'

const SIGNUP_MUTATION = gql`
  mutation Signup($email: String!, $name: String!, $password: String!) {
    signup(email: $email, name: $name, password: $password) {
      token
    }
  }
`

export const Signup = () => {
  let email: HTMLInputElement | null
  let name: HTMLInputElement | null
  let password: HTMLInputElement | null
  //@ts-ignore
  const [signup, { data }] = useMutation(SIGNUP_MUTATION)

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          signup({
            variables: {
              email: email && email.value,
              name: name && name.value,
              password: password && password.value
            }
          })
          email && (email.value = '')
          name && (name.value = '')
          password && (password.value = '')
        }}
      >
        <input
          placeholder="Name"
          ref={node => {
            name = node
          }}
        />
        <input
          placeholder="Email"
          ref={node => {
            email = node
          }}
        />
        <input
          placeholder="Password"
          ref={node => {
            password = node
          }}
        />
        <button type="submit">Signup</button>
      </form>
    </div>
  )
}
