import styled from "styled-components";
import { Link } from "react-router-dom";
import Image from "../../atoms/image/image.component"

export const Navigationbar = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const NavbarDiv = styled.div`
width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1rem 0;
`;

export const NavbarDivLeft = styled.div`
width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 50%;
  margin-right: .5rem;
  align-items: center;
`;

export const NavbarList = styled(Link)`
font-family: Roboto;
font-size: 15px;
color: #333;
text-decoration: none;
`;

export const NavbarDivCenter = styled.div`
border: .5px solid #999;
margin: .4rem .5rem 0 .5rem;
height: 23px;
`;

export const NavbarDivRight = styled.div`
 display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: .5rem;
  width: 8%;
  align-items: center;
`;

export const NavbarSpanFlag = styled.span`
  align-items: center;
`;

export const NavbarImage = styled(Image)`
border-radius: 50%;
width: 20px;
height: 20px;
margin: .5rem auto auto .2rem;
`;

export const NavbarSpanArrow = styled.span`
`;

