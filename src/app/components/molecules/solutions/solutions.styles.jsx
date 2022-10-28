import styled from "styled-components";
import { Heading } from "../../atoms/typography/index";
import Text from "../../atoms/typography/index";
import { Link } from "react-router-dom";
import Image from "../../atoms/image/image.component"

export const SolutionsDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 15rem 0;
  width: 100%;
`;

export const SolutionDivLeft = styled.div`
  width: 50%;
`;

export const SolutionDivRight = styled.div`
  width: 50%;
  padding-left: 6rem;
`;

export const SolutionDivText = styled.div``;

export const SolutionTextLayout = styled.span`
  font-size: 18px;
  font-weight: 400;
  padding-right: 8px;
  color: var(--tertinary);
  background-color: var(--light-tertinary);
  border-bottom: var(--border-5);
`;

export const SolutionHeading = styled.div``;

export const SolutionSubHeading = styled(Heading)``;

export const SolutionText = styled(Text)`
  font-size: 19px;
  color: #838282;
  margin-bottom: 2rem;
  width: 100%;
`;

export const SolutionLinkDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 50%;
`;

export const SolutionLinkText = styled(Link)`
  font-size: 20px;
  color: var(--dark-secondary);
`;

export const SolutionLinkIcon = styled.span`
  border-radius: 50%;
  margin: 2rem 1.5rem 2rem 0;
  height: 13px;
  width: 13px;
  padding: 0;
  border: var(--border-1);
  align-items: center;
`;

export const Icon = styled.svg`
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  color: #467ae9;
`;

export const SolutionListIcon = styled.div`
 border-radius: 5px;
  margin-right: 1.5rem;
  height: 15px;
  width: 15px;
  border: var(--border-4);
  justify-content: center;
`;

export const SolutionIcon = styled.svg`
font-size: 15px;
  font-weight: 900;
  color: var(--primary);
`;

export const SolutionImage = styled(Image)`
height: 650px;
width: 550px;
border-radius: 5px;
`;

export const SolutionTypes = styled.div`
 display: grid;
  grid-template-columns: auto auto;
  gap: .5rem 1rem;
  width: 100%;
  margin-bottom: 1rem;
`;

export const SolutionList = styled.div`
display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

export const ListIcon = styled.div`

`;
export const ListText = styled.p`
width: 100%;
color: #838282;
`;
