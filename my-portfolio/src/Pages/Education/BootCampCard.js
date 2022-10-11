import { useState } from "react";

const BootCampCard = () => {
    const [flipped, setFlipped] = useState(false);
    return (
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
                    <div className='text'>
                        <ul className="listSkills">
                            <li>
                                Html5, Css, Javascript
                            </li>
                            <li>
                                Node, MySql
                            </li>
                            <li>
                                React
                            </li>
                        </ul>
                    </div>
                    <button
                        onClick={() => setFlipped(false)}
                        className='buttonCard'
                    >↪
                    </button>
                </section>

            </div>

        </section>
    )
}
export default BootCampCard;