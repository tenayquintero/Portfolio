import { useState } from 'react';
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
                <span className={'doors-doorLeft ' + (open && 'open ') + (showChildren && 'bye')}></span>
                <span className={'doors-doorRigth ' + (open && 'open ') + (showChildren && 'bye')}></span>
                </div>
                {showChildren &&
                    <div className='children'>{children}</div>
                }
        </div>
    )
}
export default Doors;