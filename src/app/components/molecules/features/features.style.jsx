import styled from "styled-components";
import { Heading } from "../../atoms/typography/index";
import Text from "../../atoms/typography/index";
import { Link } from "react-router-dom";
import Button from "../../atoms/button/button.component";

export const FeatureDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 17rem 0;
  width: 100%;
`;

export const FeatureDivLeft = styled.div`
  width: 50%;
`;

export const FeatureDivRight = styled.div`
  width: 50%;
  padding-left: 4rem;
`;

export const FeatureDivText = styled.div``;

export const FeatureTextLayout = styled.span`
  font-size: 20px;
  font-weight: 400;
  padding-right: 5px;
  color: var(--tertiary);
  background-color: var(--light-tertiary);
  border-bottom: var(--border-3);
`;

export const FeatureHeading = styled.div``;

export const FeatureSubHeading = styled(Heading)``;

export const FeatureText = styled(Text)`
  font-size: 20px;
  color: #838282;
`;

export const FeatureLinkDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 28%;
`;

export const FeatureLinkText = styled(Link)`
  font-size: 20px;
  color: var(--dark-secondary);
`;

export const FeatureLinkIcon = styled.span`
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

export const FeatureCard = styled.div`
  position: relative;
  width: 75%;
  height: 100%;
  border-radius: 20px;
  border: var(--border);
  margin-left: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Cardbtn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 15%;
  margin: 1rem auto auto 1rem;

  #btn-1 {
    background-color: rgba(255, 0, 0, 0.5);
  }

  #btn-2 {
    background-color: rgba(255, 215, 0, 0.5);
  }

  #btn-3 {
    background-color: rgba(0, 128, 0, 0.5);
  }
`;

export const Btn = styled.div`
  border-radius: 50%;
  height: 14px;
  width: 14px;
`;

export const FeatureProfile = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 85%;
  margin: 2rem;
  align-items: center;

  #long-1 {
    padding-left: 5rem;
    width: 52%;
  }
`;

export const FeatureRound = styled.div`
  border-radius: 50%;
  height: 50px;
  width: 50px;
  background-color: #edeeef;
`;

export const FeatureLong = styled.div`
  height: 15px;
  width: 68%;
  background-color: #edeeef;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 1.5rem;
`;

export const FeatureLongs = styled.div`
  height: 15px;
  width: 25%;
  background-color: #d8dbdd;
  margin-left: 1rem;
`;

export const FeatureLonger = styled.div`
  height: 15px;
  width: 40%;
  background-color: #d8dbdd;
  margin-right: 1.5rem;
`;

export const FeatureRightLinkDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top: var(--mini-border);
  border-bottom: var(--mini-border);
  margin-right: 4rem !important;
  padding: .2rem 0;
  z-index: 1;
  width: 100%;
  position: absolute;
  right: 3rem;
  top: 9rem;
  background-color: var(--white);
`;


export const FeatureLink = styled.div`
  color: #052771;
  text-decoration: underline;
`;

export const FeatureCopyButton = styled(Button)`
  width: 110px; 
  height: 20px;
  font-size: 12px;
`;
