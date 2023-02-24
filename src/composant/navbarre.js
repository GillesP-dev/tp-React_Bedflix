import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logobedflix from '../images/logobedflix.png';
import Recherche from './champRecherche';

import { Link,NavLink } from 'react-router-dom';


function Navbarre() {
  return (
    <>
      <Navbar bg="dark" variant="dark" id="barreNav">
        <Container className='container-fluid'>
          <Navbar.Brand href="#home"><img
              src={logobedflix}
              width="30"
              height="30"
              className="d-inline-block align-top imagelogo"
              alt="Bedflix logo"
            /></Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/">Accueil</Link>
            <Link to="/Films">Films</Link>
           <Link to="/Series">Series</Link>
          </Nav>
          <Recherche/>
        </Container>
      </Navbar>
      
    </>
  );
}

export default Navbarre;