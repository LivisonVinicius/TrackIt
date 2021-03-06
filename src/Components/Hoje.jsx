import React from "react";
import Head from "./Head";
import Footer from "../Footer";
import styled , {createGlobalStyle} from "styled-components";
import HojeComponents from "../HojeComponents";

export default function Hoje (){
    return (
        <Main>
            <GlobalStyle/>
            <Head/>
            <HojeComponents/>
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