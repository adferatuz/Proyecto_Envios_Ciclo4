import {React, useState, useEffect} from "react";
import { useForm } from "react-hook-form";
import axios from 'axios'


const FormLoggin =  ({vista,handleClickChild})=> {
     
    const [codigo,setCodigo] = useState (null)
    const [mostrarBtn,setMostrarBtn] = useState(true)
    const handleClick = () => {handleClickChild()} 
    const handleBtnClick= () =>{ handleClickChild()}     
    useEffect(() =>{},[vista])     
    const {register, formState: {errors}, handleSubmit} = useForm ();
    const customSubmit1 = (dataForms) =>{  
        axios 
            .post("http://localhost:4000/envios/create", dataForms)
            .then(result=>
                {setCodigo(result.data._id) 
                (console.log(result.data._id))})
        setMostrarBtn(false)  }                         
    
    return (
        <div className="modal fondo-modal" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Registro</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleClick}></button>
                    </div>
                <div className="modal-body">
                <form action="" onSubmit={handleSubmit(customSubmit1)} >
                    <div className="col form-envio__datos"> 

                        <label htmlFor="username"> <h6> Usuario</h6></label>
                        <input {...register("username", { required: true, maxLength:15 })}
                        aria-invalid = {errors.username ? "true": "false"}
                        id="username" 
                        name="username" 
                        type="text" 
                        className="form-control "
                        placeholder="Username"
                        aria-label="username" 
                        aria-describedby="addon-wrapping"/>
                        {errors.username && <span>This field is required. Max length 15<br /></span>}

                        <label htmlFor="email"><h6>Correo electronico</h6></label>
                        <input {...register("email", { required: true })}
                        aria-invalid = {errors.email ? "true": "false"}
                        type="email"
                        className="form-control" 
                        placeholder="example@example.com" 
                        aria-label="email" 
                        aria-describedby="addon-wrapping"
                        name="email" 
                        id="email"/>
                        {errors.email && <span>This field is required <br /></span>}

                        <label htmlFor="Password"><h6>Contraseña</h6></label>
                        <input {...register("Password", { required: true })}
                        aria-invalid = {errors.Password ? "true": "false"} 
                        id="Password" 
                        name="Password" 
                        type="Password" 
                        className="form-control" 
                        placeholder="Password" 
                        aria-label="Password" 
                        aria-describedby="addon-wrapping"/>
                        {errors.Password && <span>This field is required <br /></span>}

                        { mostrarBtn ? <button type="submit" className="btn btn-primary">Guardar</button>:''}
                        
                    </div>
                    </form>
                        {mostrarBtn == false ? <div >
                            <button type="button" 
                            className="btn btn-success"
                            data-bs-dismiss="modal"
                            onClick={handleBtnClick}
                            >Confirmar Envio</button>
                        </div> :''}
                        <div>   
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleClick}>Cerrar</button> 
                        </div>
                        <div className="card h-100 form__item">
                           {codigo ? <span id="spanCode"><b>Codigo de seguimiento De Envio: {codigo}</b></span>:''}
                        </div> 
                      
                </div>              
                </div>                
            </div>           
        </div>

    )
}
export default FormLoggin