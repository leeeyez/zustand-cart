import React from "react";
import pokelogo from "../assets/pokelogo.svg";
import { styled } from "styled-components";

const Header = () => {
  return (
    <Wrapper>
      <img src={pokelogo} />
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  width: 100vw;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  position: fixed;
  top: 0;
  img {
    width: 200px;
  }
`;
