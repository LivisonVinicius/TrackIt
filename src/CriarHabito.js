import styled from "styled-components";
import React from "react";
import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import UserData from "./Contexts/UserData";

export default function CriarHabito(props) {
  const { userD } = useContext(UserData);
  const [habit, setHabit] = useState("");
  const [chosen, setChosen] = useState([]);
  function chose(selected) {
    if (chosen.includes(selected)) {
      setChosen((chosen) =>
        chosen.filter((selecionado) => selecionado !== selected)
      );
    } else {
      setChosen([...chosen, selected]);
    }
  }
  function submitData(event) {
    event.preventDefault();
    if(chosen.length!==0){
      const objPost = {
        name: habit,
        days: chosen,
      };
      const promise = axios.post(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
        objPost,
        { headers: { Authorization: `Bearer ${userD.token}` } }
      );
      promise.then(() => {
        !props.create ? props.setCreate(true) : props.setCreate(false);
        setHabit("");
        setChosen([]);
        props.GetHabits()
      });
      promise.catch((resp) => {
        alert(resp.response.data.message);
      });
    }else{
      alert("Escolha pelo menos um dia")
    }
  }
  return (
    <CriacaoHabito display={props.create ? "flex" : "none"}>
      {!props.create ? (
        <></>
      ) : (
        <FormHabito onSubmit={submitData}>
          <input
            type="text"
            id="habit"
            value={habit}
            minLength={5}
            maxLength={20}
            required
            onChange={(e) => setHabit(e.target.value)}
            placeholder="nome do hábito"
          />
          <DiasDaSemana chosen={chosen} chose={chose} />
          <button type="submit">{"Salvar"}</button>
          <ul onClick={() => props.setCreate(false)}>{"Cancelar"}</ul>
        </FormHabito>
      )}
    </CriacaoHabito>
  );
}

function DiasDaSemana({ chosen, chose }) {
  const dias = ["D", "S", "T", "Q", "Q", "S", "S"];
  function verify(index) {
    return chosen.includes(index);
  }
  const componentDay = dias.map((dia, index) => (
    <Day
      onClick={() => chose(index)}
      background={verify(index) ? "#CFCFCF" : "#FFFFFF"}
      color={verify(index) ? "#FFFFFF" : "#CFCFCF"}
    >
      {dia}
    </Day>
  ));
  return <section>{componentDay}</section>;
}
const CriacaoHabito = styled.div`
  display: ${(props) => props.display};
  width: 340px;
  height: 180px;
  background: #ffffff;
  border-radius: 5px;
  flex-direction: column;
  box-sizing: border-box;
  margin-bottom:10px;
`;

const FormHabito = styled.form`
  font-family: "Lexend Deca";
  display: flex;
  width: 100%;
  height: 100%;
  margin-left: 18px;
  flex-direction: column;
  padding-top: 19px;
  box-sizing: border-box;
  position: relative;
  input {
    font-family: "Lexend Deca";
    width: 303px;
    height: 45px;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    font-size: 19.976px;
    line-height: 25px;
    padding-left: 11px;
    box-sizing: border-box;
  }
  button {
    font-family: "Lexend Deca";
    width: 84px;
    height: 35px;
    background: #52b6ff;
    border-radius: 4.63636px;
    text-align: center;
    font-size: 15.976px;
    line-height: 20px;
    border: none;
    color: #ffffff;
    position: absolute;
    right: 30px;
    bottom: 10px;
  }
  ul {
    font-family: "Lexend Deca";
    width: 84px;
    height: 35px;
    background: #ffffff;
    border-radius: 4.63636px;
    text-align: center;
    font-size: 15.976px;
    line-height: 20px;
    border: none;
    color: #52b6ff;
    position: absolute;
    right: 124px;
    bottom: 5px;
  }
`;

const Day = styled.div`
  margin-top: 8px;
  margin-right: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background: ${(props) => props.background};
  border: 1px solid #cfcfcf;
  border-radius: 5px;
  font-size: 19.976px;
  line-height: 25px;
  color: ${(props) => props.color};
`;
