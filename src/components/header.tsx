import { Navbar, Container, Nav } from "react-bootstrap";
import '../components/css/header.css';

export function Header() {
    return (
        <Navbar bg="black" expand="lg" variant="dark" className="shadow-lg sticky-top">
            <Container fluid>
                <Nav className="w-100 text-center">
                    <h1 className="text-white fw-bold mx-auto" style={{ color: '#927440' }}>
                        <Navbar.Brand href="/">
                            <img src="Ench.png" height="40" alt="Logo" className="" />
                        </Navbar.Brand>
                    </h1>
                </Nav>
            </Container>
        </Navbar>
    );
}
