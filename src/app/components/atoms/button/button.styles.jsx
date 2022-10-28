import styled from "styled-components";

export const BaseButton = styled.button`
  min-width: 50px;
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "3rem"};
  color: #fff;
  background-color: var(--primary);
  font-size: var(--font-size);
  font-weight: 700;
  border: 1px solid #fff;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 17px 25px;
  gap: 16px;

  &:hover {
    border: none;
    background-color: var(--secondary) ;
  }
`;

export const CurvedButton = styled(BaseButton)`
  border-radius: 5px;
`;
