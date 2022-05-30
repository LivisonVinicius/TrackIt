import styled from "styled-components";
import React from "react";

export default function DiasDaSemana({ days }) {
  const dias = ["D", "S", "T", "Q", "Q", "S", "S"];
  function verify(index) {
    return days.includes(index+1);
  }
  const componentDay = dias.map((dia, index) => (
    <Day
      background={verify(index) ? "#CFCFCF" : "#FFFFFF"}
      color={verify(index) ? "#FFFFFF" : "#CFCFCF"}
    >
      {dia}
    </Day>
  ));
  return <section>{componentDay}</section>;
}

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
