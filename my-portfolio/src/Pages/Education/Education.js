import seatedImage from '../../images/sentada_portatil2.png'
import student from '../../images/letsGo.png'
import working from '../../images/working_at_home.png'
import './Education.css'
const Education = () => {
    return (
        <section className='education'>
            <header>
                <h2>Formacion profesional</h2>

            </header>
            <main>
                <section className='education-dam'>
                    <figure>
                        <img src={student} alt='studentPicture' className='imgsEducation'></img>
                    </figure>
                    <section className='education-dam-card'>
                        <h3>Dam</h3>
                    </section>
                </section>
                <section className='education-bootcamp'>
                    <figure>
                        <img src={seatedImage} alt='girl_seated' className='imgsEducation'></img>
                    </figure>
                    <section className='education-bootcamp-card'>
                        <h3>BootCamp</h3>
                    </section>
                </section>
                <section className='education-english'>
                    <figure>
                        <img src={working} alt='girl_working' className='imgsEducation'></img>
                    </figure>
                    <section className='education-english-card'>
                        <h3>English</h3>

                    </section>
                </section>

            </main>


        </section>
    )
}
export default Education;