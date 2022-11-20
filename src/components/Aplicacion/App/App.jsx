import {React} from "react";
import {  Header } from "../Prueba/Prueba";
import '../css/style.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Loggin } from "../Servicios/Servicios";


export const Actualizable = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element ={<Header />}></Route> 
                <Route path="/loggin" element ={<Loggin />}></Route>               
            </Routes>
        </BrowserRouter>       
    )
}