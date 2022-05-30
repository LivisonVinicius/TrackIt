import styled from "styled-components";
import React from "react";
import { useNavigate } from "react-router-dom";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Doned from "./Contexts/Doned";
import { useContext } from "react";


export default function Footer() {
  const { doned } = useContext(Doned);
  const percentage = doned


  const navigate = useNavigate();
  return (
    <Foot>
      <p onClick={()=>navigate("/habitos")}>Hábitos</p>
      <div onClick={()=>navigate("/hoje")}>
        <CircularProgressbar value={percentage} text={`Hoje`} background backgroundPadding={6} onClick={()=>navigate("/hoje")} />
      </div>
      <p onClick={()=>navigate("/historico")}>Histórico</p>
    </Foot>
  );
}

const Foot = styled.footer`
  width: 100%;
  height: 70px;
  background: #FFFFFF;
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0px;
  right:0px;
  align-items:center;
  box-sizing: border-box;
  p {
    width: 79px;
    height: 22px;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;
    color: #52b6ff;
  }
  svg {
    width:70px;
    height:70px;
    margin-bottom:60px;
  }
  .CircularProgressbar-path {
        stroke: #FFFFFF;
        
    }
    .CircularProgressbar-trail {
        stroke: #52B6FF;
        
    }
    .CircularProgressbar-text {
        fill: #FFFFFF;
        
    }
    .CircularProgressbar-background {
        fill: #52B6FF;
    }
`;
