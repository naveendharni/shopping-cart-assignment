// // import { memo } from "react";
import { Container } from "./SignRegister.styles";
import { signOut } from "helpers/saveUser";
import NavLink from "components/atoms/Links/Links";

const SignRegister = () => {
  const isAuthenticated = localStorage.getItem("user");

  console.log({ isAuthenticated });
  return (
    <Container>
      {isAuthenticated ? (
        <div className="links" onClick={signOut}>
          SignOut
        </div>
      ) : (
        <>
          <NavLink classes="links" url="/">
            SignIn
          </NavLink>
          <NavLink classes="links" url="/register">
            Register
          </NavLink>{" "}
        </>
      )}
    </Container>
  );
};

export default SignRegister;
