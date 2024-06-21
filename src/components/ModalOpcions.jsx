
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalOpcions({ setOpcio, boto, titol, opcions=["A", "B", "C"] }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="outline-primary" onClick={handleShow}>
                {boto}
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{titol}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex justify-content-between">
                        {opcions.map((opcio, index) => (
                            <Button key={index} variant="outline-primary" onClick={() => { setOpcio(opcio); handleClose() }} >{opcio}</Button>
                        ))}
      
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Tanca
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalOpcions;