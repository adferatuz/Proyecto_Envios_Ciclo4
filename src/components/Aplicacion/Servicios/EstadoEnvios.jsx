import {React, useState} from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import HistorialEnvios from "./historialEnvios";


export const EstadoEnvios = () => {
    const navigate = useNavigate();
    const handleOnClick = () => {
        navigate("/");
    };
    const handleClickChild = () => {
        setMostrar(false)
    }

    const mostrarHistorial = ()=>{
        setMostrar(true);          
    }

    const [mostrar, setMostrar] = useState (false);

    const {register, formState: {errors}, handleSubmit} = useForm ();
    const customSubmit = (data) =>{console.log(data)};
    

    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container px-5">
                <a className="navbar-brand" href="#!"><h1 >Envios InstaYA!</h1></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse MenuListaNavbar" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item"><a className="nav-link active btn btn-success btn-circle btn-sm" aria-current="page" href="#!" onClick={handleOnClick}><b> Pagina principal </b></a></li>                        
                    </ul>
                </div>
            </div>
        </nav>
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                    
                    </div>
                    <div className="col">
                    <form action="" onSubmit={handleSubmit(customSubmit)}>
                    <div className="input-group mb-3 margen">
                        <span className="input-group-text" id="buscar"><i className="bi bi-search"></i></span>
                        <input {...register("buscar", { required: true })}
                        aria-invalid = {errors.buscar? "true": "false"} 
                        type="text" 
                        className="form-control" 
                        placeholder="Digite el codigo de seguimiento"  
                        name="buscar"
                        id="buscar"/> 
                        <button className="btn btn-outline-secondary" type="submit" onClick={()=>{mostrarHistorial()}}>Button</button>                         
                        </div>
                        {errors.buscar && <span id="spanBuscar">"Digite el codigo de seguimiento"<br /></span>}
                        </form>
                    </div>
                    <div className="table-historial">
                        {mostrar ? <HistorialEnvios vista = {mostrar}  handleClickChild = {handleClickChild} /> : ''}
                    </div>
                </div>
            </div>
            
        </>
    );
};