import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const MyButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBtn = () => {
    if (location.pathname === "/") {
      navigate("/mypokemon");
    } else {
      navigate("/");
    }
  };
  return (
    <Button onClick={handleBtn}>
      {location.pathname === "/" ? "내가 잡은 포켓몬" : "포켓몬 잡으러 가기"}
    </Button>
  );
};

export default MyButton;

const Button = styled.button`
  position: fixed;
  right: 50px;
  bottom: 50px;
  border: 2px solid black;
  background-color: white;
  font-size: 30px;
  border-radius: 50px;
  font-family: "DOSGothic";
  padding: 20px;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    background-color: yellow;
  }
`;
