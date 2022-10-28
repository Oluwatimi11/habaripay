import React from "react";
import { navContent } from "../../../assets/data/data";
import { FaCaretDown } from "react-icons/fa";
import { NavbarDiv, NavbarDivCenter, NavbarDivLeft, NavbarDivRight, NavbarImage, NavbarList, NavbarSpanArrow, NavbarSpanFlag } from "./navbar.styles";
import flag from "../../../assets/svg/flag2.jpeg";

const Navbar = () => {
    
    return (
      <>
      <NavbarDiv>
        <NavbarDivLeft>
        {navContent.map((el, i) => {
              const { name, url, id } = el;
              return (
                <NavbarList className="active" to={url} key={`${i}${id}`}>
                  {name}
                </NavbarList>
              );
            })}
        </NavbarDivLeft>
        <NavbarDivCenter></NavbarDivCenter>
        <NavbarDivRight>
            <NavbarSpanFlag>
            <NavbarImage url={flag} altName="Logo Image" />
            </NavbarSpanFlag>
            <NavbarSpanArrow>          
                <FaCaretDown />
            </NavbarSpanArrow>
        </NavbarDivRight>
      </NavbarDiv>
      </>
    );
  };
  
  export default Navbar;
  