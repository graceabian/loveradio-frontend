import { Navbar, Nav, Container } from "react-bootstrap";

//we will now describe how we want our Navbar to look.
function AppNavBar() {
  return (
    <Navbar className="navbar navbar-default nav-burger padding: 5px 0px; margin:none">
      <Container>
        <Navbar.Brand> Love Radio </Navbar.Brand>
        <Navbar.Brand> Raqi Terra </Navbar.Brand>
        <Navbar.Brand> Provincial Station </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav></Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavBar;
