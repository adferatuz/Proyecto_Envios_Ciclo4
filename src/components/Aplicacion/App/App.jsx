import {React} from "react";
import {  Header } from "../Dashboard/Prueba";
import '../css/style.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Loggin } from "../Servicios/Servicios";


export const Actualizable = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/Dashboard" element ={<Header />}></Route> 
                <Route path="/Loggin" element ={<Loggin />}></Route>               
            </Routes>
        </BrowserRouter>       
    )
}