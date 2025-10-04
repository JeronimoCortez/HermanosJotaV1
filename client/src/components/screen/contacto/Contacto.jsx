import "./contacto.css";
import HeroProductoContacto from "../../ui/hero-producto-contacto/HeroProductoContacto";
import ContactForm from "../../ui/contacto/ContactForm";
import ContactInfo from "../../ui/contacto/ContactInfo";
import ContactUbicacion from "../../ui/contacto/ContactUbicacion";

const Contacto = () => {
  return (
    <>
      <main>
        <HeroProductoContacto
          title="Contáctanos"
          subtitle="Estamos aquí para ayudarte a encontrar los muebles perfectos para tu hogar"
        />

        <section className="contacto">
          <ContactForm />
          <ContactInfo />
          <ContactUbicacion />
        </section>
      </main>
    </>
  );
};

export default Contacto;
