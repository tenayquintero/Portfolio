import profile from "../../images/perfil.jpg";
import "./About.css";
const About = ({ showAbout }) => {
  return (
    <section className={"about " + (showAbout && "showAbout")}>
      <h2>About</h2>
      <section className="about-me">
        <h2>¡Hola!</h2>
        <p>
          Mi nombre es Yaneth, eterna amante del mundo de la programación.
          Recorrer más de 200 km cada semana entre islas no ha sido una barrera
          para luchar por mi sueño ¡Ser programadora!.
        </p>
      </section>
      <picture>
        <img className="profile" src={profile} alt="profile" />
      </picture>

      <section className="about-code">
        <h2>&lt; CODE /&gt;</h2>
        <p>
          Desde hace dos años mi formación va encaminada al sector tecnológico
          adquiriendo importantes habilidades que me ayudan a sacar proyectos
          adelante. si quieres saber un poquito más, animate a explorar mi web
          ¡Nos vemos!
        </p>
      </section>
    </section>
  );
};
export default About;
