import { useState } from "react";
import { Container, Form, Row, Col, Button} from "react-bootstrap";
import Cercle from "./Cercle";


function Registro() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmarPassword, setConfirmarPassword] = useState("");
    const [correcte, setCorrecte] = useState(false);
    const [correcte2, setCorrecte2] = useState(false);
    const [error, setError] = useState("");
    const [errorMail, setErrorMail] = useState("");

    

    function handleInput(e) {
        if (e.target.name === "email") {
            setEmail(e.target.value);
        } else if(e.target.name === "password") {
            setPassword(e.target.value);
        }else{
            setConfirmarPassword(e.target.value.trim());
        }
    }

    function validateEmail(email){
        return email.match(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
      };

    function validatePassword(password){
        const tieneNumero = /[0-9]/.test(password);
        const tieneMayuscula = /[A-Z]/.test(password);
        const tieneMinuscula = /[a-z]/.test(password);
        const tieneCaracterEspecial = /[!@#\$%\^\&*\)\(+=._-]/.test(password);
    
        if (!tieneNumero) {
            setError("El password debe tener al menos un número");
            return false;
        }
        if (!tieneMayuscula) {
            setError("El password debe tener al menos una mayúscula");
            return false;
        }
        if (!tieneMinuscula) {
            setError("El password debe tener al menos una minúscula");
            return false;
        }
        if (!tieneCaracterEspecial) {
            setError("El password debe tener al menos un carácter especial");
            return false;
        }
        setError("");
        return true;
    }



    function handleSubmit(e) {
        e.preventDefault();
        console.log("Email: " + email + " Password: " + password + " Confirmar Password: " + confirmarPassword);
        if (validateEmail(email)){
            setCorrecte(true);
        }else{
            setErrorMail("El email no es correcto");
            setCorrecte(false);
        }
        if (validatePassword(password)&&validatePassword(confirmarPassword)){
            if(password===confirmarPassword){
                setCorrecte2(true);
            }else{
                setCorrecte2(false);
            }
        }else{
            setCorrecte2(false);
        }
    }


    return (
        <Container>
            <Row>
                <Col>
                    <Form  onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Email..." name="email" value={email} onChange={handleInput} />
                            <p>{errorMail}</p>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password..." name="password" value={password} onChange={handleInput} />
                            <p>{error}</p>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="FormBasicConfirmPassword">
                            <Form.Label>Confirmar Password</Form.Label>
                            <Form.Control type="password" placeholder="Confirmar Password" name="confirmPassword" value={confirmarPassword} onChange={handleInput} />
                        </Form.Group>
                        <Button type="submit">Enviar</Button>
                    </Form>
                </Col>
                <Col>  
                    <Row>
                    <h3>{correcte ? <Cercle color="green" /> : <Cercle color="red"/>}</h3>
                    </Row>
                    <Row>
                    <h3>{correcte2 ? <Cercle color="green" /> : <Cercle color="red"/>}</h3>
                    </Row>
                </Col>
            </Row>

        </Container>
    )
}

export default Registro;