const Heading = ({ children, type }) => {
  const Type = type;
  return <Type>{children}</Type>;
  // return <h2>{children}</h2>
};

export default Heading;
