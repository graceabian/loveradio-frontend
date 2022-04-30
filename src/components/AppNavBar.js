import { Navbar, Nav, Container } from "react-bootstrap";

//we will now describe how we want our Navbar to look.
function AppNavBar() {
  return (
    <Navbar bg="primary" expand="lg">
      <Container>
        <Navbar.Brand> Love Radio Manila </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav></Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavBar;
