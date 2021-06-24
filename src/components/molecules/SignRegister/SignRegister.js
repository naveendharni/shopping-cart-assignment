import { memo } from "react";
import { Container } from "./SignRegister.styles";
import NavLink from "components/atoms/Links/Links";

const SignRegister = () => {
  return (
    <Container>
      <NavLink classes="links" url="/">
        SignIn
      </NavLink>
      <NavLink classes="links" url="/register">
        Register
      </NavLink>
    </Container>
  );
};

export default memo(SignRegister);
