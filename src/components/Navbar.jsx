import React from "react";
import styled from "styled-components";

export const Navbar = () => {
  return (
    <div>
      <Title>Awesome Todo list</Title>
    </div>
  );
};

export default Navbar;

//style
const Title = styled.h1`
  font-size: 2.4rem;
  text-align: center;
`;
