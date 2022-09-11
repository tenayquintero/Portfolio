import profile from '../../images/perfil.jpg'
import './About.css'
const About = () => {
    return (
        <section className='about'>
            <h2>About</h2>
            <section className='about-me'>
                <p>lorem iptsum</p>
            </section>
            <picture>
                <img className='profile' src={profile} alt='profile' />
            </picture>
            
            <section className='about-code'>
                <p>lorem iptsu</p>
            </section>
           
        </section>
    )
}
export default About;