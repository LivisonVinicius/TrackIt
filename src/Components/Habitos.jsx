import styled from "styled-components";
import React from "react";
import Head from "./Head";
import Footer from "../Footer";
import ListaDeHabitos from "../ListaDeHabitos";

export default function Habitos (){
    return (
        <Main>
            <Head/>
            <ListaDeHabitos/>
            <Footer/>
        </Main>
    )
}

const Main = styled.main`
    width:100%;
    display:flex;
    font-size: 38.982px;
    background-color:#F2F2F2;
`