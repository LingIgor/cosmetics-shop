import React from "react";
import AppBar from "@mui/material/AppBar";

import { HorizontalBotton, ToolBar } from "./HorizontalMenu.styled";

const HorizontalMenu = () => {
  return (
    <AppBar position="static" style={{boxShadow: "none"}}>
      <ToolBar>
        <HorizontalBotton color="inherit">Парфюмерия</HorizontalBotton>
        <HorizontalBotton color="inherit">Макияж</HorizontalBotton>
        <HorizontalBotton color="inherit">Волосы</HorizontalBotton>
        <HorizontalBotton color="inherit">Лицо</HorizontalBotton>
        <HorizontalBotton color="inherit">Тело и ванна</HorizontalBotton>
        <HorizontalBotton color="inherit">Мужчинам</HorizontalBotton>
        <HorizontalBotton color="inherit">
          Аксессуары и техника
        </HorizontalBotton>
        <HorizontalBotton color="inherit">Health & Care</HorizontalBotton>
        <HorizontalBotton color="inherit">Подарки</HorizontalBotton>
        <HorizontalBotton color="inherit">Одежду</HorizontalBotton>
        <HorizontalBotton color="inherit">Бренды</HorizontalBotton>
      </ToolBar>
    </AppBar>
  );
};

export default HorizontalMenu;
