import Logo from "./imgs/Logo.jpeg"
import styled from "styled-components"
import React from "react"
import CadastroForms from "../CadastroForms"
import { Link } from "react-router-dom";

export default function Cadastro(){
    return(
        <Main>
            <Logobox><img src={Logo} alt="Logo"/></Logobox>
            <CadastroForms/>
            <Link to={`/`}>
                <P>Já tem uma conta? Faça login!</P>
            </Link>
        </Main>
    )
    
}

const Logobox = styled.div`
    width:180px;
    height:180px;
`

const Main = styled.main`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top:68px;
    flex-direction:column;   
`

const P = styled.p`
    width: 232px;
    height: 17px;
    font-family: 'Lexend Deca';
    font-size: 13.976px;
    line-height: 17px;
    color: #52B6FF;
    margin-top:25px;
`