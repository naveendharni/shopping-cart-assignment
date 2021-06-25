import Button from "@material-ui/core/Button";

const CustomButton = ({ children, classes, onClick }) => {
  return (
    <Button
      className={`confirm-btn ${classes ? classes : ""}`}
      variant="contained"
      color="secondary"
      type="submit"
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
