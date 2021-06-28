import Navigation from "components/molecules/Navigation/Navigation";
import CartIcon from "components/molecules/CartIcon/CartIcon";
import SignRegister from "components/molecules/SignRegister/SignRegister";

import { Container } from "./Header.styles";
import Logo from "static/images/logo.png";

const Header = () => {
  return (
    <Container>
      <img className="logo" src={Logo} alt="logo" />
      <Navigation />
      <CartIcon />
      <SignRegister />
    </Container>
  );
};

export default Header;
