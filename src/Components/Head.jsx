import styled from "styled-components";
import React from "react";
import { useContext } from "react";
import UserData from "../Contexts/UserData";

export default function Head() {
  const { userD } = useContext(UserData);
  return (
    <Header>
      <h1>TrackIt</h1>
      <img src={userD.image} alt="ProfilePic" />
    </Header>
  );
}

const Header = styled.header`
  width: 100%;
  height: 70px;
  position: fixed;
  top: 0px;
  background: #126ba5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: space-between;
  padding: 20px;
  box-sizing: border-box;
  align-items: center;
  z-index: 1;
  h1 {
    width: 97px;
    height: 49px;
    font-family: "Playball";
    line-height: 49px;
    color: #ffffff;
  }
  img {
    width: 51px;
    height: 51px;
    border-radius: 98.5px;
  }
`;
