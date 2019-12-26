import "../styles/index.scss";
import Link from "next/link";

export default () => (
  <form>
    <div>
      <h2>
        Hola <strong>Eva</strong>
      </h2>
      <h2>cuéntanos sobre tí</h2>
    </div>
    <p>
      Podrás protegerlos <strong>por solo S/20 al mes </strong>por asegurado
    </p>
    <p>Datos del Titular</p>
    <div className="form-dni">
      <select>
        <option>DNI</option>
      </select>
      <input placeholder="Nro de Documento"></input>
    </div>
    <input placeholder="Correo" className="form-dni"></input>
    <section>
      <p>¿ESTE SEGURO ES PARA TI?</p>
      <p>
        <input type="checkbox" />
        No
      </p>
      <p>
        <input type="checkbox" />
        Sí
      </p>
      <div className="btn-continuar">
        <p>Modificar DNI</p>
        <button>
          <Link href="/PasoDos">
            <a>CONTINUAR</a>
          </Link>
        </button>
      </div>
    </section>
  </form>
);
