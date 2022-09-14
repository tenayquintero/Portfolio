import { Link, NavLink } from 'react-router-dom';
import gitHub from '../../images/gitHubIcon.png'
import linKedin from '../../images/linkedin.png'
import email from '../../images/email.png'
import './Nav.css'
const Nav = () => {
    return (
        <nav>
            <ul className='nav-menu'>
                <li><NavLink to='/' end >Sobre mi</NavLink> </li>
                <li><NavLink to='/education'>Formación</NavLink></li>
                <li><NavLink to='/projects'>Proyectos</NavLink></li>
            </ul>
            <ul className='menuSocialMedia'>
                <li>
                    <Link to='https://github.com/tenayquintero' style={{ backgroundImage: `url(${gitHub})` }} />
                </li>
                <li>
                    <Link to='https://github.com/tenayquintero' style={{ backgroundImage: `url(${linKedin})` }} />

                </li>
                <li>
                    <Link to='https://github.com/tenayquintero' style={{ backgroundImage: `url(${email})` }} />
                </li>
            </ul>
        </nav>
    )
}
export default Nav;