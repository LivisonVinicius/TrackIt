import styled from "styled-components";
import React from "react";
import { useState, useEffect } from "react";
import { useContext } from "react";
import UserData from "./Contexts/UserData";
import axios from "axios";
import Check from "./Components/imgs/Check.svg";
import 'dayjs/locale/pt-br';
import dayjs from 'dayjs';

export default function HojeComponents() {
  const { userD, setUserD } = useContext(UserData);
  const [habitos, setHabitos] = useState([]);
  const days = dayjs().locale('pt-br').format('dddd, DD/MM');     const dayofWeek = days[0].toUpperCase() + days.substring([1]);
  function getHabits() {
    const promise = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
      { headers: { Authorization: `Bearer ${userD.token}` } }
    );
    promise.then((resp) => {
      setHabitos(resp.data);
    });
    promise.catch((resp) => {
      alert(resp.response.data.message);
    });
  }
  const habitComponent = habitos.map((habito) => (
    <Habito>
      <h3>{habito.name}</h3>
      <h4>{`Sequência atual:${habito.currentSequence} dias`}</h4>
      <h4>{`Seu recorde:${habito.highestSequence}`}</h4>
      <div>
        <img src={Check} alt="check" />
      </div>
    </Habito>
  ));
  useEffect(() => getHabits(), []);
  return (
    <Box>
      <Top>
        <h2>{dayofWeek}</h2>
        <h3>Nenhum hábito concluído ainda</h3>
      </Top>
      <HabitsBox>{habitComponent}</HabitsBox>
    </Box>
  );
}

const Box = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 98px;
  align-items: center;
  margin-bottom: 100px;
`;
const Top = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left:17px;
  h2 {
    font-family: "Lexend Deca";
    width: 340px;
    height: 29px;
    font-size: 22.976px;
    line-height: 29px;
    color: #126ba5;
  }
  h3 {
    font-family: "Lexend Deca";
    width: 278px;
    height: 22px;
    font-size: 17.976px;
    line-height: 22px;
    color: #bababa;
  }
`;
const HabitsBox = styled.section`
  width:100%;
  display:flex;
  align-items:center;
  flex-direction:column;
`;
const Habito = styled.div`
  width: 100%;
  width: 340px;
  height: 94px;
  background: #ffffff;
  border-radius: 5px;
  margin-bottom:10px;
  position:relative;
  box-sizing:border-box;
  div img {
    width: 35px;
    height: 28px;
  }
  div {
    background: #8fc549;
    border-radius: 5px;
    display: flex;
    width: 69px;
    height: 69px;
    justify-content:center;
    align-items:center;
    position:absolute;
    right:28px;
    bottom:10px;
  }
  h3 {
    font-family: "Lexend Deca";
    font-size: 19.976px;
    line-height: 25px;
    width: 240px;
    height: 25px;
    color: #666666;

  }
  h4 {
    font-family: "Lexend Deca";
    width: 148px;
    height: 16px;
    font-size: 12.976px;
    line-height: 16px;
    color: #666666;
  }
`;
