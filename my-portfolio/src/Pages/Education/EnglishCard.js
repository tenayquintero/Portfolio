import { useState } from "react";

const EnglishCard = () => {
    const [flipped, setFlipped] = useState(false);
    return (
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
                    <div className='text'>
                        <ul className="listSkills">
                            <li >B2 Oxford</li>
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
export default EnglishCard;