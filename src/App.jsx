import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import { useState } from 'react';
import Alarma from './components/Alarma';
import LoginForm from './components/LoginForm';

function App() {

    const [lang, setLang] = useState("es");


    return (
        <>
            <Header titol="La Meva App" lang={lang} setLang={setLang} />
            
            {/* <Content lang={lang} setLang={setLang} />
            <Alarma /> */}

            <LoginForm email_correcte="abc@def.com" password_correcte="1234" />
            
            <Footer idioma={lang}  />
        </>
    )
}

export default App
