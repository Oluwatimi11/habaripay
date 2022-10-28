import styled from "styled-components";
import { Heading } from "../../atoms/typography/index";
import Text from "../../atoms/typography/index";
import { Link } from "react-router-dom";

export const SupportDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 15rem 0;
  width: 100%;
`;

export const SupportSubHeading = styled(Heading)``;

export const SupportHeading = styled.div``;

export const SupportText = styled(Text)`
  font-size: 20px;
  color: #444;
  margin-bottom: 4rem;
`;
export const SupportDivTop = styled.div`
  width: 60%;
`;

export const SupportDivBottom = styled(Text)``;

export const SupportTypes = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 0.5rem;
  width: 100%;
  margin-bottom: 1rem;
`;

export const SupportList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 80%;
  height: 18rem;
  padding: 0.5rem 2rem;
  background-color: #f1f7fe;
`;

export const SupportTextDiv = styled.div``;
export const SupportTextHead = styled.div`
  font-size: 18px;
  color: #222;
`;
export const SupportTextPara = styled(Text)`
  font-size: 16px;
  color: #444;
`;
export const SupportListIcon = styled.div`
  margin: 2rem 1.5rem 3rem 0;
  height: 13px;
  width: 13px;
`;

export const SupportIcon = styled.div`
  font-size: 44px;
  font-weight: bold; ;
`;

export const SupportLinkDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 50%;
`;

export const SupportLinkText = styled(Link)`
  font-size: 18px;
  color: var(--dark-secondary);
  text-decoration: none;
  margin-bottom: 2rem;
`;

export const SupportLinkIcon = styled.span`
  border-radius: 50%;
  margin: 0 1.5rem 2rem 0;
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

export const SupportTextLayout = styled.span`
  font-size: 18px;
  font-weight: 400;
  padding-right: 7px;
  width: 21%;
  color: var(--dark-secondary);
  background-color: var(--trans-secondary);
  border-bottom: var(--border-7);
`;
