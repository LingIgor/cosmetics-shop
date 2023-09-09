import styled from "@emotion/styled";
import { Toolbar, Typography } from "@mui/material";


const StyledToolbar = styled(Toolbar)`
  max-width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px; /* Додайте бажані відступи */
`;


const Title = styled(Typography) `
display: flex;
flex-direction: column;
text-align: center;
`

const TitleSpan = styled.span `
font-size: 10px;
line-height: 1;

`



export {StyledToolbar, Title, TitleSpan}