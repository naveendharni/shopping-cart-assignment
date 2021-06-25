import CategoryItem from "components/molecules/CategoryItems/CategoryItem";
import { Container } from "./Categories.styles";

const Categories = ({ data }) => {
  return (
    <Container>
      {data.map((item, i) => (
        <CategoryItem key={item.key} item={item} index={i} />
      ))}
    </Container>
  );
};

export default Categories;
