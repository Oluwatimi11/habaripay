import React from "react";
import styled from "styled-components";
import { pxToRem } from "../../../utils/helpers/pxToRem";

const TextContent = styled.span`
  font-size: ${({ size }) => size && pxToRem(size)};
  font-weight: ${({ weight }) => weight};
  color: ${({ color }) => color || "var(--dark-secondary)"};
  margin: 0;
  background-color: ${({ backgroundColor }) =>
    backgroundColor || "var(--trans-secondary)"};
  border-bottom: ${({ borderBottom }) =>
    borderBottom || "var(--border-2)"};
  margin: 0;
  padding: 0;
`;

const TextLayout = (props) => {
  const { title } = props;
  return <TextContent>{title}</TextContent>;
};

export default TextLayout;
