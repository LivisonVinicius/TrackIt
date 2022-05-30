import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Login from "./Components/Login";
import Cadastro from "./Components/Cadastro";
import UserData from "./Contexts/UserData";
import Habitos from "./Components/Habitos";
import Hoje from "./Components/Hoje";

export default function App() {
  const [userD, setUserD] = useState([]);
  return (
    <UserData.Provider value={{userD,setUserD}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/habitos" element={<Habitos />} />
          <Route path="/hoje" element={<Hoje />} />
        </Routes>
      </BrowserRouter>
    </UserData.Provider>
  );
}
