import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './Spinner.css';

function Spinner() {
    const [vermell, setVermell] = useState(0);
    const [verd, setVerd] = useState(0);
    const [blau, setBlau] = useState(0);
    const [vermell2, setVermell2] = useState(0);
    const [verd2, setVerd2] = useState(0);
    const [blau2, setBlau2] = useState(0);
    const [pasos, setPasos] = useState(10);
    const [cercles, setcercles] = useState([]);

    const calcularGradient = () => {
        const nousCercles = [];
        for (let i = 0; i < pasos; i++) {
            const r = Math.round(parseInt(vermell) + (i * (parseInt(vermell2) - parseInt(vermell)) / (pasos - 1)));
            const g = Math.round(parseInt(verd) + (i * (parseInt(verd2) - parseInt(verd)) / (pasos - 1)));
            const b = Math.round(parseInt(blau) + (i * (parseInt(blau2) - parseInt(blau)) / (pasos - 1)));
            nousCercles.push(`rgb(${r},${g},${b})`);
        }
        setcercles(nousCercles);
    };

    return (
        <>
            <div className="container">
                <div className="col-6">
                    <label>Vermell</label>
                    <Form.Range min="0" max="255" value={vermell} onChange={(e) => setVermell(e.target.value)} className="form-range" id="customRange1" />
                    <label>Verd</label>
                    <Form.Range min="0" max="255" value={verd} onChange={(e) => setVerd(e.target.value)} className="form-range" id="myRange2" />
                    <label>Blau</label>
                    <Form.Range min="0" max="255" value={blau} onChange={(e) => setBlau(e.target.value)} className="form-range" id="myRange3" />
                    <div className="spinner">
                        <svg width="100" height="100">
                            <circle cx="50" cy="50" r="40" fill={`rgb(${vermell},${verd},${blau})`} />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="col-6">
                    <label>Vermell</label>
                    <Form.Range min="0" max="255" value={vermell2} onChange={(e) => setVermell2(e.target.value)} className="form-range" id="customRange2" />
                    <label>Verd</label>
                    <Form.Range min="0" max="255" value={verd2} onChange={(e) => setVerd2(e.target.value)} className="form-range" id="myRange4" />
                    <label>Blau</label>
                    <Form.Range min="0" max="255" value={blau2} onChange={(e) => setBlau2(e.target.value)} className="form-range" id="myRange5" />
                    <div className="spinner">
                        <svg width="100" height="100">
                            <circle cx="50" cy="50" r="40" fill={`rgb(${vermell2},${verd2},${blau2})`} />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="container">
                <label>Pasos</label>
                <Form.Range min="10" max="40" value={pasos} onChange={(e) => setPasos(e.target.value)} />
                <Button type="button" className="btn btn-primary" onClick={calcularGradient}>Calcular</Button>
            </div>
            <div className="container">
                {cercles.map((color, index) => (
                    <svg key={index} width="50" height="50">
                        <circle cx="25" cy="25" r="20" fill={color} />
                    </svg>
                ))}
            </div>
        </>
    );
}

export default Spinner;
