import React from "react";
import {
    Icon,
    ListIcon,
  ListSpan,
  ListText,
  MainAd,
  MainDiv,
  MainDivBottom,
  MainDivBottomTop,
  MainDivCenter,
  MainDivLeft,
  MainDivRight,
  MainDivText,
  MainDivTextDiv,
  MainDivTop,
  MainHeading,
  MainList,
  MainText,
  MainTextLayout,
} from "./main.styles";
import Rule from "../rule/rule.component";
import Button, {
  BUTTON_TYPE_CLASSES,
} from "../../atoms/button/button.component";
import { BsCheckLg } from "react-icons/bs";
import { featureItems } from "../../../assets/data/data";

const Main = () => {
  return (
    <>
      <MainDiv>
        <MainDivTop>
          <MainDivLeft>
            <MainDivText>
              <MainDivTextDiv>
                <MainHeading>
                  A faster &amp; easier way to receive <MainTextLayout>payments</MainTextLayout> online.
                </MainHeading>
                <MainText className="saves">
                  Scuad builds innovative pathways to enable all types of
                  businesses and individuals from around the world make and
                  receive payments smarter and simpler
                </MainText>
              </MainDivTextDiv>
              <Button buttonType={BUTTON_TYPE_CLASSES.curved} width="210px">
                Create an Account
              </Button>
            </MainDivText>
          </MainDivLeft>
          <MainDivRight></MainDivRight>
        </MainDivTop>
        <MainDivCenter>
          <Rule />
        </MainDivCenter>
        <MainDivBottom>
            <MainDivBottomTop>
        {featureItems.map((el, i) => {
              const { feature, about, id } = el;
              return (
                <MainList key={`${i}${id}`}>
                <ListIcon><Icon><BsCheckLg /></Icon></ListIcon>
                <ListText><ListSpan><b>{feature}</b></ListSpan>{about}</ListText>
            </MainList>
              );
            })}
            </MainDivBottomTop>
            <MainAd>
                Fees range between 0.10-2.4NGN (+ additional fees based on % of transaction value). More pricing details per payment method here.
            </MainAd>
        </MainDivBottom>
      </MainDiv>
    </>
  );
};

export default Main;
