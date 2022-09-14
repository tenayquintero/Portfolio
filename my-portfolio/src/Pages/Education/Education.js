import seatedImage from '../../images/sentada_portatil2.png'
import student from '../../images/letsGo.png'
import working from '../../images/working_at_home.png'
import { useState } from 'react'
import './Education.css'
const Education = () => {
    const [flipped, setFlipped] = useState(false);
    const [card, setCard] = useState()

    // console.log(card)
    // const handleOnClick = (e) => {
    //     const currentCard = e.currentTarget;
    //     setCard(currentCard)
    //     setFlipped(true)
    // }
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
                    <section
                        className={'educationCard ' + (flipped && 'flipped')}

                    >
                        <div className='educationCard-content'>
                            <section className='front'>
                                <h3> Dam</h3>
                                <button
                                    onClick={() => setFlipped(true)}
                                    className='buttonCard'
                                >↪
                                </button>
                            </section>

                            <section className='back'>
                                <p className='text'>este es mi contenido</p>
                                <button
                                    onClick={() => { setFlipped(false) }}
                                    className='buttonCard'
                                >↪</button>
                            </section>

                        </div>

                    </section>
                </section>
                <section className='education-bootcamp'>
                    <figure>
                        <img src={seatedImage} alt='girl_seated' className='imgsEducation'></img>
                    </figure>
                    <section
                        className={'educationCard ' + (flipped && 'flipped')}

                    >
                        <div className='educationCard-content'>
                            <section className='front'>
                                <h3>BootCamp</h3>
                                <button onClick={() => setFlipped(true)}
                                    className='buttonCard'
                                >↪
                                </button>
                            </section>

                            <section className='back'>
                                <p className='text'>este es mi contenido</p>
                                <button
                                    onClick={(e) => { setFlipped(false) }}
                                    className='buttonCard'

                                >↪
                                </button>
                            </section>

                        </div>

                    </section>
                </section>
                <section className='education-english'>
                    <figure>
                        <img src={working} alt='girl_working' className='imgsEducation'></img>
                    </figure>
                    <section
                        className={'educationCard ' + (flipped && 'flipped')}

                    >
                        <div className='educationCard-content'>
                            <section className='front'>
                                <h3>English</h3>
                                <button
                                    onClick={() => setFlipped(true)}
                                    className='buttonCard'
                                >↪</button>
                            </section>

                            <section className='back'>
                                <p className='text'>este es mi contenido</p>
                                <button
                                    onClick={() => { setFlipped(false) }}
                                    className='buttonCard'
                                >↪</button>
                            </section>

                        </div>

                    </section>
                </section>

            </main>


        </section>
    )
}
export default Education;