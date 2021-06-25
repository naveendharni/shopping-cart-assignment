import { useSelector } from "react-redux";
import { Container } from "./SignRegister.styles";
import { signOut } from "helpers/saveUser";
import NavLink from "components/atoms/Links/Links";

const SignRegister = () => {
  const { isUser } = useSelector((state) => state.cart);

  return (
    <Container>
      {isUser ? (
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
