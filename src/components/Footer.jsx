import { Navbar, Container } from "react-bootstrap";

function Footer(props) {
    const idioma = props.idioma;

    const missatge = idioma=='ca' ? "Peu de pàgina" : "Pie de página";

    return (
        <Navbar fixed="bottom" className="bg-body-tertiary">
            <Container className = "d-flex justify-content-center">

            <h2>{missatge}</h2>
            </Container>
        </Navbar>
      );
}


export default Footer;