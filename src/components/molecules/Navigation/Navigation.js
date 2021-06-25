import { Container } from "./Navigation.styles";
import NavLink from "components/atoms/Links/Links";

const Navigation = () => {
  return (
    <Container>
      <NavLink classes="links" url="/home">
        Home
      </NavLink>
      <NavLink classes="links" url="/products">
        Products
      </NavLink>
    </Container>
  );
};

export default Navigation;
