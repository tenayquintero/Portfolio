import { NavLink } from "react-router-dom";
import findThePartner from "../../images/findThePartner.png";
import theSimpsons from "../../images/theSimpsonSearcher.png";
import photoGallery from "../../images/photoGallery.png";
import taskList from "../../images/listTodo.png";
import shareLink from "../../images/shareLink.png";
import "./Projects.css";
const Projects = () => {
  return (
    <section className="projects">
      <h2>Proyectos</h2>
      <ul className="projects-list">
        <li>
          <section className="cardProjects">
            <h3>ShareLink</h3>
            <NavLink to="/maintenance">
              <img src={shareLink} alt="shareLink" className="shareLink" />
            </NavLink>

            <p>
              Aplicación para navegar entre enlaces compartidos por usuarios y
              publicar tu propio enlace.
            </p>
            <footer className="footerCard">
              <a
                href="https://github.com/tenayquintero/ShareLink"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ir al código
              </a>
            </footer>
          </section>
        </li>
        <li>
          <section className="cardProjects">
            <h3>Find the partner</h3>
            <a
              href="https://findthepartner.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={findThePartner} alt="find the partner" />
            </a>
            <p>Juego donde deberas descubrir la pareja de la carta revelada</p>
            <footer className="footerCard">
              <a
                href="https://github.com/tenayquintero/findThePartner"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ir al código
              </a>
            </footer>
          </section>
        </li>
        <li>
          <section className="cardProjects">
            <h3>Api Simpsons</h3>
            <a
              href="https://simpsonfrases.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={theSimpsons} alt="the simpsons" />
            </a>
            <p>Un simpático buscador de los personajes Simpson</p>
            <footer className="footerCard">
              <a
                href="https://github.com/tenayquintero/ApiSimpsons"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ir al código
              </a>
            </footer>
          </section>
        </li>
        <li>
          <section className="cardProjects">
            <h3>Photo gallery</h3>
            <a
              href="https://photo-finder-gallery.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={photoGallery} alt="gallery" />
            </a>
            <p>
              Api donde podrás realizar búsqueda de fotos y añadirlas a
              favoritos
            </p>
            <footer className="footerCard">
              <a
                href="https://github.com/tenayquintero/PhotoGallery"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ir al código
              </a>
            </footer>
          </section>
        </li>
        <li>
          <section className="cardProjects">
            <h3>Task to do</h3>
            <a
              href="https://tenaytasktodo.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={taskList} alt="task list" />
            </a>

            <p>No podía faltar un listado de tareas pendientes</p>
            <footer className="footerCard">
              <a
                href="https://github.com/tenayquintero/ToDoUp"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ir al código
              </a>
            </footer>
          </section>
        </li>
      </ul>
    </section>
  );
};
export default Projects;
