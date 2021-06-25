import { useSelector } from "react-redux";
import { Container, CategoryItem } from "./Sidebar.styles";

const Sidebar = ({ active, changeFilter }) => {
  const { categories } = useSelector((state) => state.categories);

  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem
          active={active === item.id}
          key={item.id}
          onClick={() => changeFilter(item.id)}
        >
          {item.name}
        </CategoryItem>
      ))}
    </Container>
  );
};

export default Sidebar;
