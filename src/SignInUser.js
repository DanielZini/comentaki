import React, { useContext, useState } from 'react'
import { AuthContext } from './auth'

const SignInUser = () => {
  const auth = useContext(AuthContext)

  const [form, setForm] = useState({ email: '', password: '' })

  const onChange = campo => evt => {
    setForm({
      ...form,
      [campo]: evt.target.value
    })
  }

  if (auth.user !== null) {
    return null
  }

  return (
    <>
      <h3>Entrar na sua conta:</h3>

      {
        auth.signInUser.signInUserState.error !== '' &&
        <p>{auth.signInUser.signInUserState.error}</p>
      }

      <input type="text" placeholder="E-mail:" value={form.email} onChange={onChange('email')} />
      <input type="password" placeholder="Senha:" value={form.password} onChange={onChange('password')} />

      <button onClick={() => {
        auth.signInUser.signInUser(form.email, form.password)
      }}>Entrar conta</button>
    </>
  )
}

export default SignInUser