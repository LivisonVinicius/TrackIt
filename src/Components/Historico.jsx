import React from "react";
import Head from "./Head";
import Footer from "../Footer";
import styled, { createGlobalStyle } from "styled-components";

export default function Historico() {
  return (
    <Main>
      <GlobalStyle />
      <Head />
      <HistoricoComponents>
        <h1>Histórico</h1>
        <h2>Em breve você poderá ver o histórico dos seus hábitos aqui!</h2>
      </HistoricoComponents>
      <Footer />
    </Main>
  );
}
const GlobalStyle = createGlobalStyle`
body{
    background-color:#f2f2f2;
}
`;

const Main = styled.main`
  width: 100%;
  display: flex;
  font-size: 38.982px;
  background-color: #f2f2f2;
  min-height: 100%;
  box-sizing:border-box;
`;
const HistoricoComponents = styled.div`
  width: 100%;
  margin-top:98px;
  margin-left:15px;
  h1 {
    width: 100px;
    height: 29px;
    font-family: "Lexend Deca";
    font-size: 22.976px;
    line-height: 29px;
    color: #126ba5;
  }
  h2 {
    width: 338px;
    height: 74px;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
    font-family: "Lexend Deca";
  }
`;
