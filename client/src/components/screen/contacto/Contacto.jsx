import ContactForm from '../../ui/contacto/ContactForm'
import "./contacto.css"
import ContactInfo from '../../ui/contacto/ContactInfo'
import ContactUbicacion from '../../ui/contacto/ContactUbicacion'

function Contacto() {
  return (
    <>
      {/* nav */}
      <main>
        <div className="hero-contacto">
          <h1 className="hero-title">Contáctanos</h1>
          <p className="hero-subtitle">
            Estamos aquí para ayudarte a encontrar los muebles perfectos para tu
            hogar
          </p>
        </div>

        <section className='contacto'>
          <ContactForm />
          <ContactInfo />
          <ContactUbicacion />
        </section>
      </main>
      {/* Footer */}
    </>
  )
}

export default Contacto