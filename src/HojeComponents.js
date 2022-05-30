import styled from "styled-components";
import React from "react";
import { useState, useEffect } from "react";
import { useContext } from "react";
import UserData from "./Contexts/UserData";
import axios from "axios";

export default function HojeComponents(){
    return(
        <Box>
            <Top>
                <h2>Segunda, 17/05</h2>
                <h3>Nenhum hábito concluído ainda</h3>
            </Top>
        </Box>
    )
}
