import { Link } from "react-router-dom";
import '../../components/layout/Nav.css';


const Nav = (props) => {
return (
    
  <nav> 
  <div>
      <ul>
          <li><Link to="/"> INICIO</Link></li>
          <li><Link to="/nosotros"> NOSOTROS</Link></li>
          <li><Link to="/articulos"> PRODUCTOS</Link></li>
          <li><Link to="/contacto"> CONTACTO</Link></li>
      </ul>
  </div>
</nav>
  

);

};

export default Nav;