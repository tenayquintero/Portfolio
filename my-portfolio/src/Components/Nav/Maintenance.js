import { NavLink } from "react-router-dom";
import "./Maintenance.css";
const Maintenance = () => {
  return (
    <section className="maintenance">
      <h2>¡Ups!</h2>
      <main>
        En este momento estoy trabajando en este proyecto... prontito saldrá del
        horno. ¡Hasta entonces!
      </main>
      <footer>
        <NavLink to="/">volver</NavLink>
      </footer>
    </section>
  );
};

export default Maintenance;
