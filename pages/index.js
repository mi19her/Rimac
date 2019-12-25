import Base from "../components/Base";
import Login from "../components/Login";
import LoginTitular from "../components/LoginTitular";
import fetch from "isomorphic-unfetch";

const Index = () => (
  <Base children2={<LoginTitular />}>
    <Login />
  </Base>
);

Index.getInitialProps = async () => {
  const res = await fetch("https://freestyle.getsandbox.com/dummy/obtenerdatospersona", {
    method: 'POST'
  });
  const data = await res.json();

  console.log('resultado', data);

  // return {
  //   shows: data.show,
  // };
  return {}
};

export default Index;
