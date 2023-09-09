import styled from "@emotion/styled";
import { Container } from "@mui/material";

export const BanerContainer = styled(Container)`
  position: relative;
  max-width: 100%;
  height: 500px;
  background-color: #f0f0f0;
  margin: 0 auto;
  padding: 60px;
  margin-bottom: 80px;
  padding: 0;

  @media (min-width: 1200px) {
    max-width: 100%;
  }

  @media (min-width: 600px) {
    padding: 0;
  }
`;

export const BanerTitle = styled.button`
  position: absolute;
  top: 192px;
  right: 400px;
  padding: 12px 24px;
  background-color: #f5f5f5;
  color: #ff6b81;
  border: 2px solid #ff6b81;
  border-radius: 25px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.3s, color 0.3s, transform 0.2s;

  &:hover {
    background-color: #ff6b81;
    color: #ffffff;
    transform: scale(1.05);
  }
`;
