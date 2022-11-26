import {React, useState} from "react";
import { useNavigate } from "react-router-dom";
import ModalEnviado from "./confirmacionEnvioFormulario";
import FormDatosEnvios from './formularioDatosEnvios';
import FormDatosRecibe from "./formDatosRecibe";


export const Envios = () => {
    const navigate = useNavigate();
    const handleOnClick = () => {
        navigate("/");
    };
    const navigate1 = useNavigate();
    const handleOnClick1 = () => {
        navigate1("/Loggin");
    };
    const navigate2 = useNavigate();
    const handleOnClick2 = () => {
        navigate2("/EstadoEnvios");
    };

    const confirmarEnvio = ()=>{
        setMostrar(1);          
    }

    const confirmarEnvio2 = ()=>{
        setMostrar(2);          
    }

    const confirmarEnvio3 = ()=>{
        setMostrar(3);          
    }

    const handleClickChild = () => {
        setMostrar(0)
        console.log('cerrar'+''+setMostrar)
    }

    const [mostrar, setMostrar] = useState (0);
    const formDatosPer = 1;
    const formDatosEnv = 2;
    const formDatosRec = 3;
    
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container px-5">
                <a className="navbar-brand" href="#!"><h1 >Envios InstaYA!</h1></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse MenuListaNavbar" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item"><a className="nav-link active btn btn-success btn-circle btn-sm" aria-current="page" href="#!" onClick={handleOnClick}><b> Pagina principal </b></a></li>
                        <li className="nav-item"><a className="nav-link active btn btn-success btn-circle btn-sm" href="#!" onClick={handleOnClick2}><b>Sigue tu envio</b> </a></li>
                        <li className="nav-item"><a className="nav-link active btn btn-success btn-circle btn-sm" href="#!" onClick={handleOnClick1}><b> Log in </b></a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <div className="container fondo">
            <div className="navbar navbar-expand-lg margen">
                <h1>Por favor diligencie el siguiente formulario</h1>
            </div>
        <div className="container text-center">            
                <div className="row">
                    <div className="col-4">                
                        <i className="bi bi-brightness-alt-high-fill"></i>
                        <button type="button" className="btn btn-primary" onClick={()=>{confirmarEnvio()}}>Por favor ingrese sus datos perosnales.</button>
                        { formDatosPer === mostrar ? <ModalEnviado vista = {mostrar}  handleClickChild = {handleClickChild} /> : ''}  
                    </div>
                    <div className="col-4">
                        <i className="bi bi-brightness-alt-high-fill"></i>
                        <button type="button" className="btn btn-primary" onClick={()=>{confirmarEnvio2()}}>Por favor digite los datos del envio.</button> 
                        { formDatosEnv === mostrar ? <FormDatosEnvios vista = {mostrar}  handleClickChild = {handleClickChild} /> : ''}
                    </div>               
                    <div className="col-4">
                        <i className="bi bi-brightness-alt-high-fill"></i>
                        <button type="button" className="btn btn-primary" onClick={()=>{confirmarEnvio3()}}>Por favor digite los datos del envio.</button>
                        { formDatosRec === mostrar ? <FormDatosRecibe vista = {mostrar}  handleClickChild = {handleClickChild} /> : ''} 
                    </div>               
                </div>
            <div className="container text-center fondo">
                               
            </div>            
            
              
            </div>        
        </div>
        </>
    );
};