import styled from "styled-components";
import React from "react";
import { useState, useEffect } from "react";
import { useContext } from "react";
import UserData from "./Contexts/UserData";
import axios from "axios";
import Check from "./Components/imgs/Check.svg";
import "dayjs/locale/pt-br";
import dayjs from "dayjs";
import Doned from "./Contexts/Doned";

export default function HojeComponents() {
  const { doned, setDoned } = useContext(Doned);
  const { userD } = useContext(UserData);
  const [habitos, setHabitos] = useState([]);
  const [click, setClick] = useState(true);
  const days = dayjs()
    .locale("pt-br")
    .format("dddd, DD/MM");
  const dayofWeek = days[0].toUpperCase() + days.substring([1]);
  useEffect(() => getHabits(), []);
  function contaDone(resp) {
    const contador = resp.map((response) => (response.done ? 1 : 0));
    if(contador.length!==0){
        const total = contador.reduce((a, b) => a + b);
        const pctg =(Math.floor((total/resp.length)*100))
        setDoned(pctg);
    }else{
        setDoned(0)
    }
    
  }
  function getHabits() {
    const promise = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
      { headers: { Authorization: `Bearer ${userD.token}` } }
    );
    promise.then((resp) => {
      setHabitos(resp.data);
      contaDone(resp.data);
    });
    promise.catch((resp) => {
      alert(resp.response.data.message);
    });
  }
  function uncheck(done, id) {
    setClick(false);
    const promise = axios.post(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/${
        done ? "uncheck" : "check"
      }`,
      {},
      { headers: { Authorization: `Bearer ${userD.token}` } }
    );
    promise.then(() => {
      getHabits();
      setClick(true);
    });
    promise.catch((resp) => {
      alert(resp.response.data.message);
      setClick(true);
    });
  }
  const habitComponent = habitos.map((habito) => (
    <Habito
      background={habito.done ? "#8fc549" : "#EBEBEB"}
      current={habito.done ? "#8fc549" : "#666666"}
      record={
        habito.currentSequence === habito.highestSequence &&
        habito.highestSequence !== 0
          ? "#8fc549"
          : "#666666"
      }
    >
      <h3>{habito.name}</h3>
      <h4 className="current">
        Sequência atual:
        <span>
          {habito.currentSequence} {habito.currentSequence > 1 ? "dias" : "dia"}
        </span>
      </h4>
      <h4 className="record">
        Seu recorde:<span>{habito.highestSequence}</span>
      </h4>
      <div onClick={() => (click ? uncheck(habito.done, habito.id) : "")}>
        <img src={Check} alt="check" />
      </div>
    </Habito>
  ));
  console.log(doned)
  return (
    <Box>
      <Top color={doned?"#8FC549":"#BABABA"}>
        <h2>{dayofWeek}</h2>
        <h3>{!doned?"Nenhum hábito concluído ainda":`${doned}% dos hábitos concluídos`}</h3>
      </Top>
      <HabitsBox>{habitComponent}</HabitsBox>
    </Box>
  );
}

const Box = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 98px;
  align-items: center;
  padding-bottom: 100px;
  box-sizing: border-box;
`;
const Top = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  margin-bottom:28px;
  box-sizing: border-box;
  h2 {
    font-family: "Lexend Deca";
    width: 340px;
    height: 29px;
    font-size: 22.976px;
    line-height: 29px;
    color: #126ba5;
    margin-bottom: 17px;
  }
  h3 {
    font-family: "Lexend Deca";
    width: 278px;
    height: 22px;
    font-size: 17.976px;
    line-height: 22px;
    color: ${(props) => props.color};
  }
`;
const HabitsBox = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
`;
const Habito = styled.div`
  width: 100%;
  width: 340px;
  height: 94px;
  background: #ffffff;
  border-radius: 5px;
  margin-bottom: 10px;
  position: relative;
  box-sizing: border-box;
  div img {
    width: 35px;
    height: 28px;
  }
  div {
    background: ${(props) => props.background};
    border-radius: 5px;
    display: flex;
    width: 69px;
    height: 69px;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 28px;
    bottom: 10px;
    box-sizing: border-box;
  }
  h3 {
    font-family: "Lexend Deca";
    font-size: 19.976px;
    line-height: 25px;
    margin:15px 0px 7px 15px;
    width: 240px;
    height: 25px;
    color: ${(props) => props.color};
  }
  h4 {
    font-family: "Lexend Deca";
    width: 148px;
    height: 16px;
    margin-left:15px;
    font-size: 12.976px;
    line-height: 16px;
    color: #666666;
  }
  .current span {
    color: ${(props) => props.current};
  }
  .record span {
    color: ${(props) => props.record};
  }
`;
