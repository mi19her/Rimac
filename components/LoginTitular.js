import "../styles/index.scss";

export default () => (
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
      <input placeholder="Nro de Documento"></input>
    </div>
    <input placeholder="Nombre" className="form-dni"></input>
    <section>
      <p>
        <input type="checkbox" />
        Acepto la <a href="/">Política de Proteccion de Datos Personales </a>y los
        <a>Términos y Condiciones</a>
      </p>
      <p>
        <input type="checkbox" />
        Acepto la Política de Envio de <a href="/">Comunicaciones Comerciales</a>
      </p>
      <button>COMENCEMOS</button>
    </section>
  </form>
);
