import Banner from "../Baner/Baner";
import PopularProducts from "../PopularProducts/PopularProducts";
import SaleSection from "../SaleSection/SaleSection";

export const Home = () => {
  return (
    <div style={{ paddingBottom: "40px", maxWidth: "1400px", margin: "0 auto" }}>
      <Banner />
      <PopularProducts props={"Популярні товари"} />
      <PopularProducts props={"Новинки"} />
      <SaleSection />
    </div>
  );
};
