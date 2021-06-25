// import Button from "@material-ui/core/Button";
import { ButtonStyle } from "./CustomButton.styles.js";

const CustomButton = ({ children, classes, onClick }) => {
  return (
    <ButtonStyle
      className={`confirm-btn ${classes ? classes : ""}`}
      type="submit"
      onClick={onClick}
    >
      {children}
    </ButtonStyle>
  );
};

export default CustomButton;
