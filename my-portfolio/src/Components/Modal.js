import { useState } from 'react'
import './Modal.css'

function Modal({ children,name }) {
    const [show, setShow] = useState(false)

    return (
        <div className="modal">
            <span onClick={() => setShow(true)} className={name}>
              
            </span>
            {show &&
                <div className="modal-bg" onClick={() => setShow(false)}>
                    <div className="modal-fg" onClick={e => e.stopPropagation()}>
                        {children}
                    </div>
                </div>
            }
        </div>
    )
}

export default Modal