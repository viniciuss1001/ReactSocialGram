import styles from './Navbar.module.css'

//Components
import { NavLink, Link } from 'react-router-dom'
import { BsSearch, BsHouseDoorFill, BsFillPersonFill, BsCameraFill } from 'react-icons/bs'
export const Navbar = () => {
  return (
    <nav id='nav' className={styles.navbar}>
      <Link to='/'>React Gram</Link>

      <form style={styles.searchform}>
        <BsSearch />
        <input type="text"/>
      </form>

      <ul id="navLinks">
        <NavLink to='/'>
          <BsHouseDoorFill />
        </NavLink>
        <NavLink to='/register'>Cadastrar</NavLink>
        <NavLink to='/login'>Entrar</NavLink>
      </ul>
    </nav>
  )
}
