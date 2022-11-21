import {React} from "react";
import {  Header } from "../Dashboard/Dashboard";
import '../css/style.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Loggin } from "../Servicios/Loggin";
import { Envios } from "../Servicios/Envios";
import { EstadoEnvios } from "../Servicios/EstadoEnvios";
import styled from "styled-components";


export const Actualizable = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element ={<Header />}></Route> 
                <Route path="/Loggin" element ={<Loggin />}></Route> 
                <Route path="/Envios" element ={<Envios />}></Route> 
                <Route path="/EstadoEnvios" element ={<EstadoEnvios />}></Route>              
            </Routes>
        </BrowserRouter>       
    )
}