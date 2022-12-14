import { useState } from 'react';
import backGroundDoors from '../images/backgroundDoor.jpg'
import './Doors.css'

const Doors = ({ setShowNav, setShowAbout, setShowHeader }) => {
    const [open, setOpen] = useState(false)
    const [showPage, setShowPage] = useState(false);
    const [turnPomo, setTurnPomo] = useState(false);

    const handleOnclick = () => {
        setTurnPomo(true)
        setTimeout(()=>{
            setOpen(true)
        },1000)
       
        setTimeout(() => {
            setShowPage(true)
            setShowNav(true)
            setShowAbout(true)
            setShowHeader(true)


        }, 3000)
    }

    return (
        <>
            <div onClick={handleOnclick} className={'container-bg ' + (showPage && 'none')}>
                <div className="doors">
                    <span
                        className={'doors-doorLeft ' + (open && 'open ')}
                        style={{ backgroundImage: `url(${backGroundDoors})` }}
                    >Llama a
                        <p className={'pomo ' + (turnPomo && 'turn')}>🔶</p>
                    </span>
                    <span
                        className={'doors-doorRigth ' + (open && 'open ')}
                        style={{ backgroundImage: `url(${backGroundDoors})` }}
                    >la puerta</span>
                </div>
            </div>

        </>
    )
}
export default Doors;