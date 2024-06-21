import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

function Pantalla({ valor }) {
    return (
        <div>
            <hr />
            <h1>{valor}</h1>
            <hr />
        </div>
    )
}

function Teclat({ clica }) {

    return (
        <>
            <Button onClick={() => clica("G")} >G</Button>{' '}
            <Button onClick={() => clica("A")} >A</Button>{' '}
            <Button onClick={() => clica("T")} >T</Button>{' '}
            <Button onClick={() => clica("C")} >C</Button>
        </>
    )
}





function Alarma() {

    const [valor, setValor] = useState(" ");


    function clica(lletra) {
        setValor(valor + lletra);
    }

    return (
        <Container>
            <Row>
                <Col xs={6}>
                    <Pantalla valor={valor} />
                    <Teclat clica={clica} />
                </Col >
            </Row >
        </Container>)
}

export default Alarma;