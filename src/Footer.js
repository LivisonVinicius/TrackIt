import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Foot>
      <p>Hábitos</p>
      <div></div>
      <p>Histórico</p>
    </Foot>
  );
}

const Foot = styled.footer`
  width: 100%;
  height: 70px;
  background-color: red;
  display: flex;
  justify-content: space-around;
  position: fixed;
  right: 0px;
  bottom: 0px;
  align-items:center;
  p {
    width: 79px;
    height: 22px;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;
    color: #52b6ff;
  }
`;
