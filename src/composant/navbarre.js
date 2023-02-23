import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logobedflix from '../images/logobedflix.png';
import Recherche from './champRecherche';

import { Link } from 'react-router-dom';


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
            {/* <Link to="/"><Nav.Link to="/" className='active'>Accueil</Nav.Link></Link>
            <Link to="/films"><Nav.Link >Films</Nav.Link></Link>
            <Link to="/series"><Nav.Link >Series</Nav.Link></Link> */}
            <Nav.Link className='active'><Link to="/">Accueil</Link></Nav.Link>
            <Nav.Link><Link to="/Films">Films</Link></Nav.Link>
            <Nav.Link><Link to="/Series">Series</Link></Nav.Link>
          </Nav>
          <Recherche/>
        </Container>
      </Navbar>
      
    </>
  );
}

export default Navbarre;