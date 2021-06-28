import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getOffers } from "store/offers/offersSlice";
import { getCategories } from "store/categories/categoriesSlice";

import Banner from "components/organisms/Banner/Banner";
import Categories from "components/organisms/Categories/Categories";
import { Container } from "./Home.styles";

const Home = () => {
  const dispatch = useDispatch();
  const { offers } = useSelector((state) => state.offers);
  const { categories } = useSelector((state) => state.categories);

  // fetch offers and categories
  useEffect(() => {
    dispatch(getOffers());
    dispatch(getCategories());
  }, []);

  return (
    <Container>
      <Banner data={offers} />
      <Categories data={categories} />
    </Container>
  );
};

export default Home;
