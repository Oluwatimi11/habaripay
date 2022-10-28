import React from "react";
import pay from "../../../assets/img/payment1.jpg";
import { BsArrowRightShort } from "react-icons/bs";
import { BsCheck2 } from "react-icons/bs";
import { solutionItems } from "../../../assets/data/data";
import { Icon, ListText, SolutionDivLeft, SolutionDivRight, SolutionDivText, SolutionHeading, SolutionIcon, SolutionImage, SolutionLinkDiv, SolutionLinkIcon, SolutionLinkText, SolutionList, SolutionListIcon, SolutionsDiv, SolutionSubHeading, SolutionText, SolutionTextLayout, SolutionTypes } from "./solutions.styles";

const Solutions = () => {
  return (
    <>
      <SolutionsDiv>
        <SolutionDivLeft>
          <SolutionImage url={pay} altName="Pay Image" />
        </SolutionDivLeft>
        <SolutionDivRight>
          <SolutionDivText>
            <SolutionHeading>
              <SolutionTextLayout>Solutions</SolutionTextLayout>
            </SolutionHeading>
            <SolutionSubHeading>
              Better payments,<br /> unlimited opportunities
            </SolutionSubHeading>
            <SolutionText>
              Get faster, more reliable transactions. Higher conversions.
              Unbeatable insight and flexibility. So you can delight your
              customers and unlock new revenue streams.
            </SolutionText>
            <SolutionTypes>
              {solutionItems.map((el, i) => {
                const { solution, id } = el;
                return (
                  <SolutionList key={`${i}${id}`}>
                    <SolutionListIcon>
                      <SolutionIcon>
                        <BsCheck2 />
                      </SolutionIcon>
                    </SolutionListIcon>
                    <ListText>{solution}</ListText>
                  </SolutionList>
                );
              })}
            </SolutionTypes>
            <SolutionLinkDiv>
              <SolutionLinkText>Create a free account</SolutionLinkText>
              <SolutionLinkIcon>
                <Icon>
                  <BsArrowRightShort />
                </Icon>
              </SolutionLinkIcon>
            </SolutionLinkDiv>
          </SolutionDivText>
        </SolutionDivRight>
      </SolutionsDiv>
    </>
  );
};

export default Solutions;
