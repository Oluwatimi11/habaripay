import React from "react";
import { BiChevronRight } from "react-icons/bi";
import { supportItems } from "../../../assets/data/data";
import {
  Icon,
  SupportDiv,
  SupportDivBottom,
  SupportDivTop,
  SupportHeading,
  SupportIcon,
  SupportLinkDiv,
  SupportLinkIcon,
  SupportLinkText,
  SupportList,
  SupportListIcon,
  SupportSubHeading,
  SupportText,
  SupportTextDiv,
  SupportTextHead,
  SupportTextLayout,
  SupportTextPara,
  SupportTypes,
} from "./support.styles";

const Support = () => {
  return (
    <>
      <SupportDiv>
        <SupportDivTop>
          <SupportHeading>
            <SupportTextLayout>Support</SupportTextLayout>
          </SupportHeading>
          <SupportSubHeading>
            Trusted by businesses all over Africa
          </SupportSubHeading>
          <SupportText>
            Our platform provides a resource of scalable and reliable technology
            optimized to drive growth in new markets and dominate in older ones.
          </SupportText>
        </SupportDivTop>
        <SupportDivBottom>
          <SupportTypes>
            {supportItems.map((el, i) => {
              const { icon, feature, about, id } = el;
              return (
                <SupportList key={`${i}${id}`}>
                  <SupportListIcon>
                    <SupportIcon>{icon}</SupportIcon>
                  </SupportListIcon>
                  <SupportTextDiv>
                    <SupportTextHead><b>{feature}</b></SupportTextHead>
                    <SupportTextPara>{about}</SupportTextPara>
                  </SupportTextDiv>
                  <SupportLinkDiv>
                    <SupportLinkText>Learn More</SupportLinkText>
                    <SupportLinkIcon>
                      <Icon>
                        <BiChevronRight />
                      </Icon>
                    </SupportLinkIcon>
                  </SupportLinkDiv>
                </SupportList>
              );
            })}
          </SupportTypes>
        </SupportDivBottom>
      </SupportDiv>
    </>
  );
};

export default Support;
