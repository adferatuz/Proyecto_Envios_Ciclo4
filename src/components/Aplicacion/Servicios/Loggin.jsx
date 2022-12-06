import {React, useState,useEffect} from "react";
import '../css/style.css';
import FormLoggin from "./formLoggin";
import { useForm } from "react-hook-form";
import axios from 'axios'

export const Loggin = ({vista, handleClickChild2}) => {
    useEffect(() =>{},[vista]) 
    const [mostrar, setMostrar] = useState (false);
    const [datos,setDatos] = useState (null);
    const {register, formState: {errors}, handleSubmit} = useForm ();
   
    const customSubmit = (dataForms) =>{
        axios
        .get("http://localhost:4000/loggin/read")
        .then(response =>{    
            setDatos(response.data)
            datos?.map((data) =>{
                if(data.Password === dataForms.LogginPassword &&
                  data.username === dataForms.LogginUsername)
                  { handleClickChild2()}  
            })})       
         
        }       
    
    const handleShowFormClick = () => {
        setMostrar(true)
    }
    const handleClickChild = () => {
        setMostrar(false)
    }

    return (
        <>
         <nav className="navbar navbar-expand-lg bg-light navbar-dark bg-dark">
            <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container px-5">
            <span  className="navbar-brand"><h1 >Envios InstaYA!</h1></span>
            </div>
        </nav>
                <div id="navbarNav">
                    <ul className="navbar-nav">
                    </ul>
                </div>
            </div>
        </nav>
        <div className="fondo">
        <div className="container">
            <div className="col-md-4 mb-5 item">
            
                    <div className="card h-100 form-envio__datos">
                    <form action="" onSubmit={handleSubmit(customSubmit)} >
                        <div className="card-body col-sm-9 bg-light p-3 border">
                            <input {...register("LogginUsername", { required: true, maxLength:15 })}
                            aria-invalid = {errors.LogginUsername ? "true": "false"}
                            type="text" 
                            id="LogginUsername" 
                            name="LogginUsername" 
                            className="form-control" 
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="addon-wrapping"/>
                            {errors.LogginUsername && <span>This field is required. Max length 15<br /></span>}
                            

                            <input {...register("LogginPassword", { required: true })}
                            aria-invalid = {errors.LogginPassword ? "true": "false"}
                            type="Password" 
                            id="LogginPassword"
                            name="LogginPassword"
                            className="form-control" 
                            placeholder="Password" 
                            aria-label="Password" 
                            aria-describedby="addon-wrapping"/>
                            {errors.LogginPassword && <span>This field is required <br /></span>}
                        </div>
                        <div className="col-2">
                            
                            <button type="submit" className="btn btn-primary" >  Doble Click!!</button>
                           
                            </div>
                        </form>                            
                            <div className="col">
                            <button type="button" className="btn btn-success" onClick={()=> {handleShowFormClick()}}>Crear usuario</button>
                            {mostrar ? <FormLoggin vista = {mostrar}  handleClickChild = {handleClickChild} /> : ''}
                            </div>   
                    </div>
                    
                </div>
                
                </div>
                </div>
         
        </>
    )
}
