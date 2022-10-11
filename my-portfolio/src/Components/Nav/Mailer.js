import emailjs from "@emailjs/browser";
import { useState } from "react";
import "./Mailer.css";
const Mailer = () => {
  const [res, setRes] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handle = (e) => {
    e.preventDefault();
    if (email !== "" && message !== "") {
      emailjs
        .sendForm(
          "service_732oyhm",
          "template_npn4jqe",
          e.target,
          "XGs-vLwNnUKA07J0I"
        )
        .then((response) => setRes(response))
        .catch((error) => setRes(error));
    }

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    // <div className="bg">
    <section className="mailer">
      <form onSubmit={handle}>
        <label>
          <input
            name="user_name"
            placeholder="Deja tu nombre aquí"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          <input
            name="user_email"
            type="email"
            placeholder="Deja tu nombre email aquí"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <textarea
            name="user_message"
            placeholder="Deja tu mensaje aquí"
            value={message}
            required
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
        <button>send</button>
      </form>
      {res?.status === 200 && (
        <p className="messageEmailSend">
          ¡Hola! acabo de recibir tu mensaje. Muchísimas gracias.
        </p>
      )}
      {res?.status === 0 && (
        <p className="messageEmailSend">
          ups! No se ha podido enviar el mensaje
        </p>
      )}
    </section>
    // </div>
  );
};

export default Mailer;
