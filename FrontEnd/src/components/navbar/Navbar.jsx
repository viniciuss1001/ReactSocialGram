import { NavbarStyled, FormStyled,ListComponent, Logo } from './Styles'

//Components
import { NavLink, Link } from 'react-router-dom'
import { BsSearch, BsHouseDoorFill} from 'react-icons/bs'
export const Navbar = () => {
  return (
    <NavbarStyled id='nav' >
    <Logo>
      <Link to='/'>React Gram</Link>
    </Logo>

      <FormStyled >
        <BsSearch className=''/>
        <input type="text" placeholder='Pesquisar'
        minLength={3}
        />
      </FormStyled>

      <ListComponent >
        <NavLink to='/'>
          <BsHouseDoorFill />
        </NavLink>
        <NavLink to='/register'>Cadastrar</NavLink>
        <NavLink to='/login'>Entrar</NavLink>
      </ListComponent>
    </NavbarStyled>
  )
}
