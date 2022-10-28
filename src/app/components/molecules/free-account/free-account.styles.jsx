import styled from "styled-components"
import { Heading } from "../../atoms/typography/index";


export const AccountDiv = styled.div`
display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4rem;
`;

export const AccountDivLeft = styled.div`
width: 60%;
`;

export const AccountDivRight = styled.div`

`;


export const AccountDivText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 4rem;
  padding-bottom: 5rem;
`;

export const AccountHeading = styled(Heading)`
  font-size : 70px; 
  font-weight : 700; 
  color : var(--light-black);
  font-family: 'Gentium Plus';
  line-height: 100px;
`;


export const AccountTextLayout = styled.span`
  font-size: 18px;
  font-weight: 400;
  color: var(--primary);
  background-color: var(--light-primary);
  border-bottom: var(--border-6);
  padding-right: 6px;
  width: 21%;
`;

export const MainTextLayout = styled.span`
  font-size: 70px;
font-weight: 700;
color: var(--dark-secondary);
background-color: var(--trans-secondary);
border-bottom: var(--border-2);
line-height: 10px;
font-family: 'Gentium plus';
padding-right: .5rem;
`;

