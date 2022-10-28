import React from "react";
import {
  BUTTON_TYPE_CLASSES,
} from "../../atoms/button/button.component";
import { BsArrowRightShort } from "react-icons/bs";
import {
    Btn,
    Cardbtn,
    FeatureCard,
  FeatureDiv,
  FeatureDivLeft,
  FeatureDivRight,
  FeatureDivText,
  FeatureHeading,
  FeatureLink,
  FeatureLinkDiv,
  FeatureLinkIcon,
  FeatureLinkText,
  FeatureLong,
  FeatureLongs,
  FeatureLonger,
  FeatureProfile,
  FeatureRightLinkDiv,
  FeatureRound,
  FeatureSubHeading,
  FeatureText,
  FeatureTextLayout,
  Icon,
  FeatureCopyButton,
} from "./features.style";

const Feature = () => {
  return (
    <>
      <FeatureDiv>
        <FeatureDivLeft>
          <FeatureDivText>
            <FeatureHeading>
              <FeatureTextLayout>Features</FeatureTextLayout>
            </FeatureHeading>
            <FeatureSubHeading>Create Payment Requests</FeatureSubHeading>
            <FeatureText>
              Make a simple payment link in 5 seconds. Use our powerful features
              to customize your request
            </FeatureText>
            <FeatureLinkDiv>
              <FeatureLinkText>Learn More</FeatureLinkText>
              <FeatureLinkIcon>
                <Icon>
                  <BsArrowRightShort />
                </Icon>
              </FeatureLinkIcon>
            </FeatureLinkDiv>
          </FeatureDivText>
        </FeatureDivLeft>
        <FeatureDivRight>
          <FeatureCard>
            <Cardbtn>
              <Btn id="btn-1"></Btn> <Btn id="btn-2"></Btn>
              <Btn id="btn-3"></Btn>
            </Cardbtn>
            <FeatureProfile>
              <FeatureRound></FeatureRound> <FeatureLong><FeatureLongs></FeatureLongs><FeatureLonger></FeatureLonger></FeatureLong>
            </FeatureProfile>
            <FeatureRightLinkDiv>
              <FeatureLink>https://www.habaripay.com/940jej...</FeatureLink>
              <FeatureCopyButton buttonType={BUTTON_TYPE_CLASSES.curved}>
                Copy link
              </FeatureCopyButton>
            </FeatureRightLinkDiv>
            <FeatureProfile>
              <FeatureRound></FeatureRound> <FeatureLong id="long-1"><FeatureLonger></FeatureLonger></FeatureLong>
            </FeatureProfile>
          </FeatureCard>
        </FeatureDivRight>
      </FeatureDiv>
    </>
  );
};

export default Feature;
