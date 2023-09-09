import React from "react";
import { BanerContainer, BanerTitle } from "./Baner.styled";
import Baner from "../../images/ban.jpg";

const Banner = () => {
  return (
    <BanerContainer>
      <img src={Baner} alt="S4D" style={{ width: "100%", height: "100%" }} />
      <BanerTitle>Детальніше</BanerTitle>
    </BanerContainer>
  );
};

export default Banner;
