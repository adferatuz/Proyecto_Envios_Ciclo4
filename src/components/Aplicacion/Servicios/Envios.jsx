import {React, useState,useEffect} from "react";
import ModalEnviado from "./confirmacionEnvioFormulario";
import FormDatosEnvios from './formularioDatosEnvios';
import FormDatosRecibe from "./formDatosRecibe";

export const Envios = () => {    

    const confirmarEnvio = ()=>{ setMostrar(1)}            
    const confirmarEnvio2 = ()=>{setMostrar(2)}            
    const confirmarEnvio3 = ()=>{ setMostrar(3)} 
    const handleClickChild = () => {setMostrar(0)}            
    const [mostrar, setMostrar] = useState (0);
    const formDatosPer = 1;
    const formDatosEnv = 2;
    const formDatosRec = 3;
   
    return (
        <>        
        <div className="container fondo">
            <div className="navbar navbar-expand-lg margen">
                <h1>Por favor diligencie el siguiente formulario</h1>
            </div>
        <div className="container text-center">            
                <div className="row">
                    <div className="col-4">                
                        <i className="bi bi-brightness-alt-high-fill"></i>
                        <button type="button" className="btn btn-primary" onClick={()=>{confirmarEnvio()}}>Por favor ingrese sus datos perosnales.</button>
                        { formDatosPer === mostrar ? <ModalEnviado vista = {mostrar}  handleClickChild = {handleClickChild}/> : ''}  
                    </div>
                    <div className="col-4">
                        <i className="bi bi-brightness-alt-high-fill"></i>
                        <button type="button" className="btn btn-primary" onClick={()=>{confirmarEnvio2()}}>Por favor digite los datos del envio.</button> 
                        { formDatosEnv === mostrar ? <FormDatosEnvios vista = {mostrar}  handleClickChild = {handleClickChild}/> : ''}
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