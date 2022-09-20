import seatedImage from '../../images/sentada_portatil2.png'
import student from '../../images/letsGo.png'
import working from '../../images/working_at_home.png'
import DamCard from './DamCard'
import BootCampCard from './BootCampCard'
import EnglishCard from './EnglishCard'
import './Education.css'

const Education = () => {
   
    return (
        <section className='education'>
            <header>
                <h2>Formación profesional</h2>
            </header>
            <main>
                <section className='education-dam'>
                    <figure>
                        <img src={student} alt='studentPicture' className='imgsEducation'></img>
                    </figure>
                    <DamCard />
                    </section>

                <section className='education-bootcamp'>
                    <figure>
                        <img src={seatedImage} alt='girl_seated' className='imgsEducation'></img>
                    </figure>
                    <BootCampCard />
                </section>
                <section className='education-english'>
                    <figure>
                        <img src={working} alt='girl_working' className='imgsEducation'></img>
                    </figure>
                    <EnglishCard />
                </section>
            </main>
        </section>
    )
}
export default Education;