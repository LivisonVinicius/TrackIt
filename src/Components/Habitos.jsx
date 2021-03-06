import React from "react";
import Head from "./Head";
import Footer from "../Footer";
import ListaDeHabitos from "../ListaDeHabitos";
import styled , {createGlobalStyle} from "styled-components";

export default function Habitos (){
    return (
        <Main>
            <GlobalStyle/>
            <Head/>
            <ListaDeHabitos/>
            <Footer/>
        </Main>
    )
}
const GlobalStyle = createGlobalStyle`
body{
    background-color:#f2f2f2;
}
`

const Main = styled.main`
    width:100%;
    display:flex;
    font-size: 38.982px;
    background-color:#F2F2F2;
    min-height:100%;
`