import "../styles/index.scss";

export default () => (
  <form>
    <div>
      <h2>
        Protégelos <strong>ahora</strong>{" "}
      </h2>
    </div>
    <p>ingresa los datos del titular</p>
    <select>
      <option>DNI</option>
    </select>
    <input placeholder="Nro de Documento"></input>
    <div>
      <p>Acepto la </p>
      <li>Política de Proteccion de Datos Personales </li>
      <p>y los </p>
      <li>Términos y Condiciones</li>
      <button>COMENCEMOS</button>
    </div>
  </form>
);
