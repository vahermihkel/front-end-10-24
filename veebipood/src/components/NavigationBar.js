import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; 

function NavigationBar() {
  const { t, i18n } = useTranslation();

  function muudaKeelET() {
    i18n.changeLanguage("et");
  }

  function muudaKeelEN() {
    i18n.changeLanguage("en");
  }

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">Veebipood</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/osta-kinkekaart">{t("gift-card")}</Nav.Link>
            <Nav.Link as={Link} to="/ostukorv">{t("cart")}</Nav.Link>
            <NavDropdown title={t("maintain")} id="collapsible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/halda-tooted">{t("maintain-products")}</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/halda-esindused">Halda esindusi</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/halda-hinnad">Halda hinnad</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/halda-kasutajad">Halda kasutajad</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/halda-tootajad">Halda töötajad</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/halda-autod">Halda autod</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/lisa-toode">Lisa toode</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Tavakasutaja" id="collapsible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/tooted">Tooted</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/esindused">Esindused</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/hinnad">Hinnad</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/kasutajad">Kasutajad</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/tootajad">Töötajad</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/autod">Autod</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/kaart">Meie poed kaardil</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            

            {/* <button >Eesti</button>
            <button >English</button> */}

            <Nav.Link>
              <img src="/estonian.png" onClick={muudaKeelET} className="lang" alt="" />
              <img src="/english.png" onClick={muudaKeelEN} className="lang" alt="" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;