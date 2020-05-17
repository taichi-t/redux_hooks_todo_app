import React, { useState } from "react";
import styled from "styled-components";
import DarkModeToggle from "react-dark-mode-toggle";

//style

export const Navbar = (props) => {
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  const { toggleDarkMode } = props;

  const handleClick = (e) => {
    e.preventDefault();
    setIsDarkMode(!isDarkMode);
    toggleDarkMode();
  };

  return (
    <Container>
      <Title>Awesome Todo list</Title>

      <div onClick={handleClick}>
        <DarkModeToggle checked={isDarkMode} size={50} speed={6} />
      </div>
    </Container>
  );
};

export default Navbar;

//style
const Title = styled.h1`
  font-size: 2.4rem;
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
