import "../styles/index.scss";

export default ({children}) => (
  <div className="main1">
    <div className="inicio">
      <section className="logo">
        <img src="/logo.png" alt="logo" />
      </section>
    </div>
    <section className="girls1">
      <img src="/girls2.png" alt="logo" />
    </section>
    <div className="formulario">
    {children}
    </div>
  </div>
);
