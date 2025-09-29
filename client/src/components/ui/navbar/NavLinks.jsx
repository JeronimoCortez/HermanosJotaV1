const LINKS = ["inicio", "productos", "contacto"];

const NavLinks = ({ mostrarPagina }) => {
  return (
    <ul>
      {LINKS.map((link, i) => (
        <li key={i} onClick={() => mostrarPagina(link)}>
          {link}
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
