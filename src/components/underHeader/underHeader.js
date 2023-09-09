import React from "react";
import { BsSearch } from "react-icons/bs";
import IconButton from "@mui/material/IconButton";
import { BsHandbag } from "react-icons/bs";
import { CiUser } from "react-icons/ci";

import { StyledToolbar, Title, TitleSpan } from "./underHeader.styled";
import { Link } from "react-router-dom";

const UnderHeader = ({ handleLogin }) => {
  return (
    <StyledToolbar>
      <IconButton edge="start" color="inherit" aria-label="search">
        <BsSearch size={27} />
      </IconButton>
      <Link to={"/"} style={{textDecoration:"none", color:"black"}}>
      <Title variant="h6" component="div" sx={{ fontSize: 35 }}>
        Cosmetics
        <TitleSpan>by</TitleSpan>
        <TitleSpan>Ling</TitleSpan>
      </Title>
      </Link>
      <div>
        <IconButton color="inherit" aria-label="login" onClick={handleLogin}>
          <CiUser size={33} />
        </IconButton>
        <IconButton color="inherit" aria-label="cart">
          <BsHandbag size={30} />
        </IconButton>
      </div>
    </StyledToolbar>
  );
};

export default UnderHeader;
