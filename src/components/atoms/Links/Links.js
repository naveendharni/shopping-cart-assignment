// // import { memo } from "react";
import { Link } from "react-router-dom";

const NavLink = ({ classes, url, children }) => {
  return (
    <Link className={classes} to={url}>
      {children}
    </Link>
  );
};

export default NavLink;
