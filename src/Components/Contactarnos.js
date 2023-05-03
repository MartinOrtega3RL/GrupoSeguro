import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState('Enviar')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }
  return (
    <div className="container">
      <h1 className="mb-5">Contactate con nosotros!!!</h1>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Nombre
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Mensaje
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <button className="btn btn-danger" type="submit">
          {formStatus}
        </button>
        <h1>O LLamanos por 3704-XXXXXX</h1>
      </form>
    </div>
  )
}
export default ContactForm