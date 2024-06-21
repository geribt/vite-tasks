import { Alert, CloseButton } from "react-bootstrap";

function Llistat({ tasques, eliminarTasca }) {


    return (
        <>
        <br />
                {tasques.map((e, index) => (
                    <Alert key={index} variant={'primary'} >
                        <div className="d-flex justify-content-between">
                            {e}
                            <CloseButton onClick={() => eliminarTasca(index)} />
                        </div>
                    </Alert>
                ))}
                {tasques.length === 0 && <Alert variant={'danger'}>No hi ha tasques...</Alert>}

        </>
    )


}

export default Llistat;