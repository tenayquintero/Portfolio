import findThePartner from '../../images/findThePartner.png'
import theSimpsons from '../../images/theSimpsonSearcher.png'
import photoGallery from '../../images/photoGallery.png'
import taskList from '../../images/taskList.png'
import './Projects.css'
const Projects = () => {
    return (
        <section className='projects'>
            <h2>Proyectos</h2>
            <ul className='projects-list'>
                <li>
                    <section className='cardProjects'>
                        <h3>Find the partner</h3>
                        <a href='https://findthepartner.netlify.app/'
                            target='_blank'
                            rel="noopener noreferrer"
                        >
                            <img src={findThePartner} alt='find the partner' />
                        </a>
                        <p>Juego donde deberas descubrir la pareja de la carta revelada</p>
                    </section>

                </li>
                <li>
                    <section className='cardProjects'>
                        <h3>Api Simpsons</h3>
                        <a href='https://simpsonfrases.netlify.app/'
                            target='_blank'
                            rel="noopener noreferrer"
                        >
                            <img src={theSimpsons} alt='the simpsons' />
                        </a>
                        <p>Un simpático buscador de los personajes Simpson</p>

                    </section>
                </li>
                <li>
                    <section className='cardProjects'>
                        <h3>Photo gallery</h3>
                        <a href='https://photo-finder-gallery.netlify.app/'
                            target='_blank'
                            rel="noopener noreferrer"
                        >
                            <img src={photoGallery} alt='gallery' />
                        </a>
                        <p>Api donde podrás realizar búsqueda de fotos y añadirlas a
                            favoritos
                        </p>
                    </section>
                </li>
                    <li>
                <section className='cardProjects'>
                    <h3>Task to do</h3>
                        <a href='https://photo-finder-gallery.netlify.app/'>
                            <img src={taskList} alt='task list' />
                    </a>
                      
                        <p>No podía faltar un listado de tareas pendientes</p>
                </section>
                    </li>
            </ul>
        </section>
    )
}
export default Projects;