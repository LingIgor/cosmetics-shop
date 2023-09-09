import React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";


import { AppBarStyled, BtnHeader} from "./Header.styled";

function Header() {
  return (
    <AppBarStyled position="static">
      <Toolbar>
       
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <BtnHeader color="inherit">100% оригінальна продукція</BtnHeader>
        </Typography>

        <BtnHeader color="inherit">Акції</BtnHeader>
        <BtnHeader color="inherit">Доставка і Оплата</BtnHeader>
        <BtnHeader color="inherit">Статті</BtnHeader>
        <BtnHeader color="inherit">Про магазин</BtnHeader>
        <BtnHeader color="inherit">Eng</BtnHeader>
        <BtnHeader color="inherit">Укр</BtnHeader>
      
      </Toolbar>
    </AppBarStyled>
  );
}

export default Header;
