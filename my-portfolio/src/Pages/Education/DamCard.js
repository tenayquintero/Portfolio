import { useState } from "react";

const DamCard = () => {
    const [flipped, setFlipped] = useState(false);
    return (

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
                    <div className='text'>
                        <ul className="listSkills">
                            <li>
                                Entorno de desarrollo
                            </li>
                            <li>
                                Programación: Java
                            </li>
                            <li>
                                Lenguaje de marcas: Html, Css.
                            </li>
                        </ul>
                    </div>
                    <button
                        onClick={() => setFlipped(false)}
                        className='buttonCard'
                    >↪</button>
                </section>
            </div>
        </section>
    )
}

export default DamCard;