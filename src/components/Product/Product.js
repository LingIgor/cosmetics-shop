import React from "react";
import IMG from "../../images/product.jpg";
import { 
  ProductImage,
  ProductTitle,
  ProductCategory,
  ProductRating,
  ProductPrice,
  CardConteiner,
  BtnBuy,
  ProductCardLink,
} from "./Product.styled";
import cardsData from "../../products/products.json"




const Product = () => {

  const priceWithDiscount = (price) => {
    const discount = price * 0.1;
    return discount;
  };

  return (
    <div style={{ display: " flex", gap: " 15px" }}>
      {cardsData.map(({ id, title, category, price, rating }) => (
         <ProductCardLink  key={id}to={`/product/${id}`}>
      
         
          <ProductImage component="img" alt="Card Image" src={IMG} />
          <CardConteiner>
            <ProductTitle variant="h6" component="div">
              {title}
            </ProductTitle>
            <ProductCategory variant="body2" color="text.secondary">
              {category}
            </ProductCategory>
            <ProductRating variant="body2" color="text.secondary">
              Rating: {rating}
            </ProductRating>
            <ProductPrice>
              <div style={{ color: " red" }}>
                {price - priceWithDiscount(Number(price))} <span>₴</span>
              </div>
              <div style={{ textDecoration: "line-through", color: "grey" }}>
                {price} <span>₴</span>
              </div>
            </ProductPrice>
          </CardConteiner>
          <BtnBuy className="buy-button">Купити</BtnBuy>       
      
        </ProductCardLink>
        
      ))}
    </div>
  );
};

export default Product;
