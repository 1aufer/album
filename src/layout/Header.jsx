import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Navbar expand ={'lg'}>
    <Container fluid>
        <Navbar.Brand as={Link}>Juarema App</Navbar.Brand>
        <Navbar.Toggle aria-controls = "minhanav"/>
        <Navbar.Collapse id="minhanav">
            <Navbar.Text as={Link} to="/">Inicial</Navbar.Text>
            <Navbar.Text as={Link} to="/sobre">Sobre</Navbar.Text>
            <Navbar.Text as={Link} to="/contato">Contato</Navbar.Text>
    </Navbar.Collapse>
    </Container>
    </Navbar>
  );
}
