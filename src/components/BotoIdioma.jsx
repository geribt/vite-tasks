

function BotoIdioma({lang, setLang}){

    return (
        <p className="d-inline-flex gap-1">
        <button type="button" onClick={()=>setLang("ca")} className={lang=='ca' ? "btn active" : "btn"} data-bs-toggle="button">CA</button>
        <button type="button" onClick={()=>setLang("es")}  className={lang=='es' ? "btn active" : "btn"} data-bs-toggle="button" aria-pressed="true">ES</button>
      </p>
    )
}

export default BotoIdioma;
