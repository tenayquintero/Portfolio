import { useState } from 'react';
import backGroundDoors from '../images/backgroundDoor.jpg'
import './Doors.css'
const Doors = ({ children }) => {
    const [open, setOpen] = useState(false)
    const [showChildren, setShowChildren] = useState(false)

    const handleOnclick = () => {
        setOpen(true)
        setTimeout(() => {
            setShowChildren(true)

        }, 2000)

    }

    return (
        <div onClick={handleOnclick} >
            <div className="doors">
                <span
                    className={'doors-doorLeft ' + (open && 'open ') + (showChildren && 'bye')}
                    style={{ backgroundImage: `url(${backGroundDoors})` }}
                >Llama a
                    <p className='pomo'>🔶</p>
                </span>
                <span
                    className={'doors-doorRigth ' + (open && 'open ') + (showChildren && 'bye')}
                    style={{ backgroundImage: `url(${backGroundDoors})` }}
                >la puerta</span>
            </div>
            {showChildren &&
                <div className='children'>{children}</div>
            }
        </div>
    )
}
export default Doors;