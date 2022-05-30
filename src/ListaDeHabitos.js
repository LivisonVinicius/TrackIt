import styled from "styled-components";
import React from "react";
import { useState, useEffect } from "react";
import { useContext } from "react";
import UserData from "./Contexts/UserData";
import axios from "axios";
import Group from "./Components/imgs/Group.svg";
import DiasDaSemana from "./DiasDaSemana";
import CriarHabito from "./CriarHabito";

export default function ListaDeHabitos() {
  const { userD } = useContext(UserData);
  const [create, setCreate] = useState(false);
  const [habitos, setHabitos] = useState([]);
  function DeleteHabit(id) {
    const confirm = window.confirm("Quer deletar esse hábito");
    if (confirm) {
      const promise = axios.delete(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`,
        { headers: { Authorization: `Bearer ${userD.token}` } }
      );
      promise.then(() => GetHabits());
    } else {
      return;
    }
  }
  function GetHabits() {
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
  }
  useEffect(() => {
    GetHabits();
  }, []);
  const componentsHabitos = habitos.map((habito) => (
    <Habito>
      <p>{habito.name}</p>
      <DiasDaSemana days={habito.days} />
      <img
        src={Group}
        onClick={() => {
          DeleteHabit(habito.id);
        }}
      />
    </Habito>
  ));
  return (
    <Box>
      <MeusHabitos>
        <p>Meus hábitos</p>
        <div onClick={() => (!create ? setCreate(true) : setCreate(false))}>
          +
        </div>
      </MeusHabitos>
      <CriarHabito
        create={create}
        setCreate={setCreate}
        GetHabits={GetHabits}
      />
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

//                                              CSS
const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 98px;
  align-items: center;
  margin-bottom: 100px;
  padding:0px 17px 0px 17px;
  p {
    width: 100%;
    height: 74px;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
  }
  section {
    display: flex;
  }
`;
const MeusHabitos = styled.div`
  width: 100%;
  height: 36px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  p {
    width: 100%;
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
  width: 95%;
  height: 91px;
  background: #ffffff;
  border-radius: 5px;
  box-sizing: border-box;
  position: relative;
  padding-left: 15px;
  margin-bottom: 10px;
  p {
    width: 90%;
    height: 25px;
    margin-top: 15px;
  }
  img {
    position: absolute;
    right: 10px;
    top: 10px;
  }
`;
