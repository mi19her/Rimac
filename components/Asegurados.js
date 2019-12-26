import "../styles/index.scss";

export default () => (
  <form>
    <div>
      <h2>
        Tus <strong>asegurados</strong>
      </h2>
    </div>
    <p>Presentanos a quienes vamos a proteger</p>
    <div className="form-dni">
      <input>
      </input>
    </div>
    <button>+</button>
    <p>Quiero asegurar a alguien mas</p>
    <button>CONTINUAR</button>
  </form>
);
