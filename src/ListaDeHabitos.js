import styled from "styled-components";
import React from "react";
import { useState, useEffect } from "react";
import { useContext } from "react";
import UserData from "./Contexts/UserData";
import axios from "axios";
import Group from "./Components/imgs/Group.svg";
import DiasDaSemana from "./DiasDaSemana";

export default function ListaDeHabitos() {
  const { userD, setUserD } = useContext(UserData);
  const [habitos, setHabitos] = useState([]);
  const componentsHabitos = habitos.map((habito) => (
    <Habito>
      <p>{habito.name}</p>
      <DiasDaSemana days={habito.days} />
      <img src={Group} />
    </Habito>
  ));
  useEffect(() => {
    const promise = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
      { headers: { Authorization: `Bearer ${userD.token}` } }
    );
    promise.then((resp) => {
      setHabitos(resp.data);
    });
    promise.catch((resp) => {
      alert(resp.response.data.message);
    });
  });

  return (
    <Box>
      <MeusHabitos>
        <p>Meus hábitos</p>
        <div>+</div>
      </MeusHabitos>
      {habitos.length === 0 ? (
        <p>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </p>
      ) : (
        componentsHabitos
      )}
    </Box>
  );
}

const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 98px;
  align-items: center;
  p {
    width: 338px;
    height: 74px;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
  }
`;
const MeusHabitos = styled.div`
  width: 340px;
  height: 36px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom:20px;
  p {
    width: 148px;
    height: 29px;
    font-size: 22.976px;
    line-height: 29px;
    color: #126ba5;
  }
  div {
    width: 40px;
    height: 35px;
    background: #52b6ff;
    border-radius: 4.63636px;
    font-size: 26.976px;
    line-height: 34px;
    text-align: center;
    color: #ffffff;
  }
`;
const Habito = styled.div`
  width: 340px;
  height: 91px;
  background: #ffffff;
  border-radius: 5px;
  p {
    width: 300px;
    height: 25px;
  }
`;