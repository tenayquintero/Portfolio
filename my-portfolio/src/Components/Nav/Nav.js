import { NavLink } from 'react-router-dom';
import './Nav.css'
const Nav = () => {
    return (
        <nav>
            <ul className='nav-menu'>
                <li><NavLink to='/' end>Sobre mi</NavLink> </li>
                <li><NavLink to='/education'>Formación</NavLink></li>
                <li><NavLink to='/projects'>Proyectos</NavLink></li>
            </ul>
            <ul className='menuSocialMedia'>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </nav>
    )
}
export default Nav;