import { Button, Col, Container, Row } from "react-bootstrap";
import Formulari from "./Formulari";
import { useState } from "react";

import Llistat from "./Llistat";

function Content(props) {

    const [tasques, setTasques] = useState([]);

    function afegirTasca(tascaX){
        setTasques([...tasques, tascaX])
    }

    function eliminarTasca(idTasca){
        setTasques(  tasques.filter((e,i) => i!==idTasca)  )
    }


    return (
        <Container>
            <main>
                <h1>Contingut</h1>
                <hr />
                <Row>
                    <Col>
                        <Formulari afegirTasca={afegirTasca} />
                    </Col>
                    <Col>
                        <Llistat tasques={tasques} eliminarTasca={eliminarTasca} />
                    </Col>
                </Row>

            </main>
        </Container>
    )
}


export default Content;