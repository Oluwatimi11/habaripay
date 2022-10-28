import styled from "styled-components"
import { Heading } from "../../atoms/typography/index";
import Text from "../../atoms/typography/index";


export const MainDiv = styled.div`
`;

export const MainDivTop = styled.div`
margin: 4rem 0 2rem 0;
display: flex;
flex-direction: row;
justify-content: space-between;
width: 100%;
`;

export const MainDivLeft = styled.div`
width: 55%;
`;

export const MainDivRight = styled.div`

`;

export const MainDivCenter = styled.div`

`;

export const MainDivBottom = styled.div`

`;


export const MainDivText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 4rem;
  padding-bottom: 5rem;
`;

export const MainDivTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const MainHeading = styled(Heading)`
  font-size : 70px; 
  font-weight : 700; 
  color : var(--light-black);
  font-family: 'Gentium Plus';
  line-height: 100px;
`;

export const MainSpan = styled.span`

`;

export const MainText = styled(Text)`
  font-size : 18px; 
  font-weight : 400; 
  color : var(--light-black);
  font-family: Roboto;
  width: 100%;
  line-height: 35px;
  margin-bottom: 3rem;
`;

export const MainDivBottomTop = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
margin: 2rem 0;
`;

export const MainList = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 30%;
margin-right: 4px;
align-items: center;
`;

export const ListIcon = styled.div`
  border-radius: 50%;
  margin: 2rem 1.5rem 2rem 0;
  height: 24px;
  width: 24px;
  padding: 3px;
  border: var(--border-1);
  align-items: center;
`;

export const Icon = styled.svg`
  font-size: 14px;
  font-weight: 900;
  color: #467ae9;
  margin: .3rem auto auto .3rem;
`;


export const ListText = styled(Text)`
color: #838282;
font-weight: 600;
font-size: 17px;
`;

export const ListSpan = styled.span`
  margin-right: .5rem;
  color: var(--black);
`;

export const MainAd = styled.div`
text-align: center;
color: #838282;
font-weight: 600;
margin-bottom: 5rem;
font-size: 15px;
`;

export const MainTextLayout = styled.span`
font-size: 70px;
font-weight: 700;
color: var(--dark-secondary);
background-color: var(--trans-secondary);
border-bottom: var(--border-2);
line-height: 10px;
font-family: 'Gentium plus';
`;


