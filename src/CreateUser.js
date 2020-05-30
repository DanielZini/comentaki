import React, { useContext, useState } from 'react'
import { AuthContext } from './auth'

const CreateUser = () => {
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
      <h3>Criar nova Conta</h3>

      {
        auth.createUser.createUserState.error !== '' &&
        <p>{auth.createUser.createUserState.error}</p>
      }

      <input type="text" placeholder="E-mail:" value={form.email} onChange={onChange('email')} />
      <input type="password" placeholder="Senha:" value={form.password} onChange={onChange('password')} />

      <button onClick={() => {
        auth.createUser.createUser(form.email, form.password)
      }}>Criar conta</button>
    </>
  )
}

export default CreateUser