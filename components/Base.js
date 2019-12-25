import "../styles/index.scss";

export default ({ children, children2 }) => (
  <div className="main">
    <div className="inicio">
      <section className="logo">
        <img src="/logo.png" alt="logo" />
      </section>
      {children}
    </div>
    <section className = "girls">
    <img src="/girls.png" alt="logo" />
    </section>
    <div className="formulario">{children2}</div>
  </div>
);
