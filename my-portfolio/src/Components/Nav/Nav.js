import { NavLink } from "react-router-dom";
import gitHub from "../../images/gitHubIcon.png";
import linKedin from "../../images/linkedin.png";
import email from "../../images/email.png";
import "./Nav.css";

const Nav = ({ showNav }) => {
  return (
    <nav className={showNav ? "showNav" : undefined}>
      <ul className="nav-menu">
        <li>
          <NavLink to="/" end>
            Sobre mi
          </NavLink>{" "}
        </li>
        <li>
          <NavLink to="/education">Formación</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Proyectos</NavLink>
        </li>
      </ul>
      <ul className="menuSocialMedia">
        <li>
          <a
            href="https://github.com/tenayquintero"
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundImage: `url(${gitHub})` }}
          >
            gitHub
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/yanethquinterorestrepo/"
            style={{ backgroundImage: `url(${linKedin})` }}
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin
          </a>
        </li>
        <li>
          <NavLink to={"/contact"}>
            <div
              style={{ backgroundImage: `url(${email})` }}
              className="mailIcon"
            ></div>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
