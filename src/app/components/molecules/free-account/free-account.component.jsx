import React from "react";
import { AccountDiv, AccountDivLeft, AccountDivRight, AccountDivText, AccountHeading, AccountTextLayout, MainTextLayout } from "./free-account.styles";
import Button, {
  BUTTON_TYPE_CLASSES,
} from "../../atoms/button/button.component";

const FreeAccount = () => {
  return (
    <>
      <AccountDiv>
          <AccountDivLeft>
            <AccountDivText>
              <AccountTextLayout>Ready for a trial ?</AccountTextLayout>
                <AccountHeading>
                  Start accepting<br /> <MainTextLayout>payments</MainTextLayout> in minutes
                </AccountHeading>
            </AccountDivText>
          </AccountDivLeft>
          <AccountDivRight>
          <Button buttonType={BUTTON_TYPE_CLASSES.curved} width="230px" height="60px">
                Create a free Account
              </Button>
          </AccountDivRight>
      </AccountDiv>
    </>
  );
};

export default FreeAccount;
