import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import ModalOpcions from "./ModalOpcions";

function Formulari(props) {

    const [tasca, setTasca] = useState("cinema");

    function handleInput(e) {
        setTasca(e.target.value)
    }

    function enviarForm(e) {
        e.preventDefault();
        props.afegirTasca(tasca);
        setTasca("");
    }

    return (
        <Form onSubmit={enviarForm} >
            <Form.Group className="mb-3" controlId="tasca">
                <Form.Label>Nova tasca</Form.Label>
                <Form.Control type="text" placeholder="entrar nova tasca" value={tasca} name="tasca" onChange={handleInput} />
                <br />
                <ModalOpcions setOpcio={setTasca} boto="Opcions" titol="Tria tasca" opcions={["cinema", "bici", "netflix"]} />
                {' '}
                <Button type="submit" disabled={!tasca} >Enviar</Button>
            </Form.Group>
        </Form>
    )
}


export default Formulari;

