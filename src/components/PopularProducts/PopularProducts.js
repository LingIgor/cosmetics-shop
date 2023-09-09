import React from "react";
import Product from "../Product/Product";
import { Title , ContainerProduct} from "./PopularProducts.styled";




const PopularProducts = ({ props }) => {
  return (
    <div>
      <Title>{props}</Title>
      <ContainerProduct >
        
          <Product  />
          
          
      </ContainerProduct>
    </div>
  );
};

export default PopularProducts;
