import {Link} from 'react-router-dom'

const LINKS = [
  { name: "Inicio", path: "/" },
  { name: "Productos", path: "/catalogo" }, 
  { name: "Contacto", path: "/contacto" }
];

const NavLinks = () => { 
  return (
      <ul>
          {LINKS.map((item, i) => (
              <li key={i}> 
                  <Link to={item.path} className="nav-link-style">
                      {item.name} 
                  </Link>
              </li>
          ))}
      </ul>
  );
};

export default NavLinks;
