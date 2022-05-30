import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Login from "./Components/Login";
import Cadastro from "./Components/Cadastro";
import UserData from "./Contexts/UserData";
import Doned from "./Contexts/Doned";
import Habitos from "./Components/Habitos";
import Hoje from "./Components/Hoje";
import Historico from "./Components/Historico";

export default function App() {
  const [userD, setUserD] = useState([]);
  const [doned, setDoned] = useState(0);
  return (
    <UserData.Provider value={{ userD, setUserD }}>
      <Doned.Provider value={{ doned, setDoned }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/habitos" element={<Habitos />} />
            <Route path="/hoje" element={<Hoje />} />
            <Route path="/historico" element={<Historico />} />
          </Routes>
        </BrowserRouter>
      </Doned.Provider>
    </UserData.Provider>
  );
}
