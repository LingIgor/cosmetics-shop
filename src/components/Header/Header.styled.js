import styled from "@emotion/styled";
import { AppBar, Button } from "@mui/material";

const AppBarStyled = styled(AppBar)`
height: 40px;
display: flex;
color: black;
justify-content: center;
font-size: 12px;
background-color: white;
box-shadow: none;
border-bottom: 1px solid rgba(32, 32, 32, 0.1);
border-top: 1px solid rgba(32, 32, 32, 0.1);

`;



const BtnHeader = styled(Button)`
font-size: 12px;
text-transform: none;

`

export { AppBarStyled,BtnHeader };
