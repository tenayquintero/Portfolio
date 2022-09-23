import emailjs from '@emailjs/browser'
import { useState } from 'react'
import './Mailer.css'
const Mailer = () => {
    const [res, setRes] = useState();

    const handle = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_732oyhm', 'template_npn4jqe', e.target, 'XGs-vLwNnUKA07J0I')
            .then(response => setRes(response))
            .catch(error => console.log(error))
    }
 

    return (
       
        <section className='mailer'>
        <form onSubmit={handle}>
            <label>
                <input  name="user_name" placeholder='Deja tu nombre aquí'/>
            </label>
            <label>
                    <input name="user_email" type='email' placeholder='Deja tu nombre email' />
            </label>
            <label>
                    <textarea name='user_message' placeholder='Deja tu mensaje aquí' />
            </label>
            <button>send</button>
        </form>
        {res?.text==='OK' && 
        <p>tu mensaje ha sido enviado</p>
        }
        </section>
      
    )
}

export default Mailer;