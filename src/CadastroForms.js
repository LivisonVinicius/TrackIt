import styled from "styled-components"
import { useState} from "react";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from  'react-loader-spinner'

export default function CadastroForms (){
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [load,setLoad] = useState(false);
    const navigate = useNavigate();
    
    function submitData (event){
        event.preventDefault();
        setLoad(true)
        const objPost={email:email,name:name,image:image,password:senha}
        const promise=axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",objPost)
        promise.then(()=>{navigate("/");setLoad(false)})
        promise.catch(()=>{alert("Usuário já cadastrado");setLoad(false)})
    }
    return(
        <Forms onSubmit={submitData} load={load?"flex":"none"} button={!load?"initial":"none"}>
            <input
              type="email"
              id="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
            />
            <input
              type="password"
              id="senha"
              value={senha}
              minLength={3}
              required
              onChange={(e) => setSenha(e.target.value)}
              placeholder="senha"  
            />
            <input
              type="text"
              id="nome"
              value={name}
              minLength={3}
              maxLength={12}
              required
              onChange={(e) => setName(e.target.value)}
              placeholder="nome"
              
            />
            <input
              type="url"
              id="image"
              value={image}
              required
              onChange={(e) => setImage(e.target.value)}
              placeholder="foto"
            />
            
            <button type="submit">{'Entrar'}</button>
            <div>
                <ThreeDots color="#ffffff" height={50} width={50} />
            </div>
        </Forms>
    )
}

const Forms= styled.form`
width:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin-top:32px;

input{
    width: 303px;
    height: 45px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-family: 'Lexend Deca';
    font-size: 19.976px;
    line-height: 25px;
    padding-left:11px;
    margin-bottom:6px;
    box-sizing:border-box;
}
button{
    border:none;
    width: 303px;
    height: 45px;
    background: #52B6FF;
    border-radius: 4.63636px;
    font-family: 'Lexend Deca';
    font-size: 19.976px;
    line-height: 25px;
    color: #FFFFFF;
    display:${(props) => props.button};
}
div{
    display:${(props) => props.load};
    border:none;
    justify-content:center;
    align-items:center;
    width: 303px;
    height: 45px;
    background: #52B6FF;
    border-radius: 4.63636px;
    color: #FFFFFF;
}
`
