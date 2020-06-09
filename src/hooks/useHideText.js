import React, { useState } from "react";
import styled from "styled-components";
import Checkbox from "@material-ui/core/Checkbox";

export const useHideText = () => {
  const [hidden, setHidden] = useState(false);
  const handleShow = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setHidden(!hidden);
  };
  const text = (text, check, margin, fontSize) => (
    <Text check={check} active={hidden} margin={margin} fontSize={fontSize}>
      {check === null ? null : (
        <Checkbox type="checkbox" checked={check} color="default" />
      )}
      <span onClick={handleShow}>{text}</span>
    </Text>
  );
  return [text];
};

const Text = styled.p`
  display: inline-block;
  margin: ${(props) => props.margin};
  font-size: ${(props) => props.fontSize};
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  text-decoration: ${(props) => (props.check ? "line-through" : null)};
  ${({ active }) =>
    active &&
    `
  cursor: pointer;
  word-wrap: break-word;
  text-overflow: initial;
  overflow: initial;
  white-space: initial;
  `}
`;
