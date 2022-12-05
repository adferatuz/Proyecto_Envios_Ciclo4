import {React, useState} from "react";
import {  Header } from "../Dashboard/Dashboard";
import '../css/style.css';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { Loggin } from "../Servicios/Loggin";
import { Envios } from "../Servicios/Envios";
import { EstadoEnvios } from "../Servicios/EstadoEnvios";
import '../css/style-envios.css';
import Navbar from "../Servicios/navbar";
import Logout from "../Servicios/logout";

export const Actualizable = () => {
    const [mostrar, setMostrar] = useState(true)
    const handleClickChild2 = () => {
        setMostrar(false)
        console.log('hice click')
    }
    return(
        <BrowserRouter>
        {mostrar ? <Loggin vista = {mostrar}  handleClickChild2 = {handleClickChild2}/> : 
        <Navbar />}
            <Routes>
                <Route path="/" element ={<Logout vista = {mostrar}  handleClickChild2 = {handleClickChild2}/>}></Route> 
                <Route path="/PaginaPrincipal" element ={<Header />}></Route>  
                <Route path="/Envios" element ={<Envios />}></Route> 
                <Route path="/EstadoEnvios" element ={<EstadoEnvios />}></Route>              
            </Routes>
        </BrowserRouter>       
    )
}