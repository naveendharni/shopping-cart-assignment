import { useSelector } from "react-redux";
import { Container } from "./SignRegister.styles";
import { signOut } from "helpers/saveUser";
import NavLink from "components/atoms/Links/Links";

const SignRegister = () => {
  const { isUser } = useSelector((state) => state.cart);

  return (
    <Container>
      {isUser ? (
        <div className="container__links" onClick={signOut}>
          SignOut
        </div>
      ) : (
        <>
          <NavLink classes="container__links" url="/">
            SignIn
          </NavLink>
          <NavLink classes="container__links" url="/register">
            Register
          </NavLink>
        </>
      )}
    </Container>
  );
};

export default SignRegister;
