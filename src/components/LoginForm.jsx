import { useState } from "react";
import { Container, Form, Row, Col, Button} from "react-bootstrap";
import Cercle from "./Cercle";

function LoginForm({email_correcte, password_correcte}) {

    const [correcte, setCorrecte] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleInput(e) {

        if (e.target.name === "email") {
            setEmail(e.target.value);
        } else {
            setPassword(e.target.value);
        }
    }

    function enviarForm(e) {
        e.preventDefault();

        if (email===email_correcte && password===password_correcte) {
            setCorrecte(true);
        } else {
            setCorrecte(false);
        }

    }


    return (
        <Container>

            <Row>
                <Col>
                    <Form onSubmit={enviarForm}>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email address</Form.Label>
                            {/* <Form.Control type="email"  name="email" value={email} onChange={(e)=>setEmail(e.target.value)} /> */}
                            <Form.Control type="email" name="email" value={email} onChange={handleInput} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>password</Form.Label>
                            <Form.Control type="password" name="password" value={password} onChange={handleInput} />
                        </Form.Group>
                        <Button type="submit">Enviar</Button>
                    </Form>
                </Col>
                <Col>

                    {/* <p>{email}</p>
                    <p>{password}</p> */}
                    <h3>{correcte ? "CORRECTE" : "INCORRECTE"}</h3>
                    <h3>{correcte ? <Cercle color="green" /> : <Cercle color="red"/>}</h3>
                </Col>
            </Row>
        </Container>




    )
}

export default LoginForm;