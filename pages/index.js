import Intro from "../components/Intro";
import Login from "../components/Login";
 import fetch from "isomorphic-unfetch";
import "../styles/index.scss";

const Index = () => {
  // console.log(props.data.data);

  return (
    <div className="main">
      <div className="inicio">
        <section className="logo">
          <img src="/logo.png" alt="logo" />
        </section>
        <Intro />
      </div>
        <section className="girls">
        <img src="/girls.png" alt="logo" />
      </section>
      <div className="formulario">
        <Login />
      </div>
    </div>
  );
};

Index.getInitialProps = async () => {
  const res = await fetch("https://freestyle.getsandbox.com/dummy/obtenerdatospersona", {
    method: "POST",
  });
  const data = await res.json();

  console.log("resultado", data);

  return {
    data,
  };
};

export default Index;
