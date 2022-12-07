import {React, useState,useEffect} from "react";
import '../css/style.css';
import FormLoggin from "./formLoggin";
import { useForm } from "react-hook-form";
import axios from 'axios'

export const Loggin = ({vista}) => {
    useEffect(() =>{},[vista]) 
    const [mostrar, setMostrar] = useState (false)
    const [codigo,setCodigo] = useState (null)
    const {register, formState: {errors}, handleSubmit} = useForm ();
   
    const customSubmit = (dataForms) =>{
        axios
        .get("http://localhost:4000/envios/read")
        .then(response =>{    
            response.data?.map((data) =>{
                if(data.Password === dataForms.LogginPassword &&
                  data.username === dataForms.LogginUsername)
                {
                    return(setCodigo(data._id))
                }else 
                {
                    return(setCodigo('No Esta Registrado')) 
                } 
                       
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
                            <div className="card h-100 form__item">
                           {codigo ? <span id="spanCode"><b>Codigo de seguimiento De Envio: {codigo}</b></span>:''}
                           </div>   
                    </div>
                    
                </div>
                
                </div>
                </div>
         
        </>
    )
}
