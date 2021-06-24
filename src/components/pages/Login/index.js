// import { useEffect } from "react";
// import { signOut } from "helpers/saveUser";
import LoginBody from "components/organisms/LoginBody/LoginBody";
import { Container } from "./Login.styles";

const Login = () => {
  // useEffect(() => {
  //   signOut();
  // }, []);
  console.log("eflkn");
  return (
    <Container>
      <LoginBody />
    </Container>
  );
};

export default Login;
