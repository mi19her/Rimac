import "../styles/index.scss";
import Router from 'next/router'
import React, {useState} from 'react';


export default () => {
  const [dni, setDni] = useState('');
  const [name, setName] = useState('');
  const [politicaDatos, setpoliticaDatos] = useState(false);
  const [politicaEnvio, setpoliticaEnvio] = useState(false);


  const getDni = (e) => {
    setDni(e.target.value);
  };
  const getName = (e) => {
    setName(e.target.value);
  };
  const getpoliticaDatos= (e) => {
    setpoliticaDatos(e.target.checked);
    console.log(e.target.checked)
  };
  const getPoliticaEnvio= (e) => {
    setpoliticaEnvio(e.target.checked);
    console.log(e.target.checked)
  };
  const validateForm = () => {
    return  name.length >= 3 && dni.length == 8 && politicaDatos == true && politicaEnvio== true ;
  };
  const disableSubmitButton = !validateForm();

  return(
    <form>
    <div>
      <h2>
        Protégelos <strong>ahora</strong>{" "}
      </h2>
    </div>
    <p>ingresa los datos del titular</p>
    <div className="form-dni">
      <select>
        <option>DNI</option>
      </select>
      <input placeholder="Nro de Documento" value={dni} onChange={getDni} ></input>
    </div>
    <input placeholder="Nombre" className="form-dni" value={name} onChange={getName}></input>
    <section>
      <p>
        <input  type="checkbox" checked={politicaDatos} onChange={getpoliticaDatos} />
        Acepto la <a href="/">Política de Proteccion de Datos Personales </a>y los
        <a>Términos y Condiciones</a>
      </p>
      <p>
        <input  type="checkbox" checked={politicaEnvio} onChange={getPoliticaEnvio}/>
        Acepto la Política de Envio de <a href="/">Comunicaciones Comerciales</a>
      </p>
      <button onClick={() => {
          Router.push('/PasoUno')
          if (!disableSubmitButton) {
            setCheck(false);
            setDni('');
            setName('');
          }
        }}
        disabled={disableSubmitButton}>EMPECEMOS
      </button>
    </section>
  </form>
  )
}

