import React from "react";
import styled from "styled-components";

//style
import { theme } from "../GlobalStyle";

export const Navbar = () => {
  return <Title color={theme.palette.text.primary}>Awesome Todo list</Title>;
};

export default Navbar;

//style
const Title = styled.h1`
  font-size: 2.4rem;
  text-align: center;
  color: ${(props) => props.color};
`;
