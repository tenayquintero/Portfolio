import findThePartner from '../../images/findThePartner.png'
import theSimpsons from '../../images/theSimpsonSearcher.png'
import photoGallery from '../../images/photoGallery.png'
import taskList from '../../images/taskList.png'
import './Projects.css'
const Projects = () =>{
    return(
        <section className='projects'>
            <h2>Proyectos</h2>
            <ul className='projects-list'>
                <li><img src={findThePartner} alt='find the partner' /></li>
                <li><img src={theSimpsons} alt='the simpsons' /></li>
                <li><img src={photoGallery} alt ='gallery' /></li>
                <li><img src={taskList} alt='task list' /></li>
            </ul>
        </section>
    )
}
export default Projects;