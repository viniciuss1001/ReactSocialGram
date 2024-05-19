import {Link} from 'react-router-dom'
import { FormContainerDiv, FormContent } from './Styles'
import { useState } from 'react'
export const RegisterComponent = () => {
  //states to register user
  const [name, setName] = useState("")

  const handleSubmit = (e) =>{
    e.preventDefault()

  }

  return (
    <FormContainerDiv>
      <h2>ReactSocialGram</h2>
      <p>Registre-se para e veja o que está acontecendo no mundo!</p>
      <FormContent >
        <input type="text" placeholder="Nome" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Senha" />
        <input type="password" placeholder="Confirmar Senha" />
        <button type="submit">Cadastrar </button>
      </FormContent>
      <p>Já possui conta? <Link to="/login">Entrar</Link></p>
    </FormContainerDiv>
  )
}
