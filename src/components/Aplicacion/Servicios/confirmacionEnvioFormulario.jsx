import {React} from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios"



const  ModalEnviado = ({vista, handleClickChild})=> {
    useEffect(() =>{         
    },[vista])

    const {register, formState: {errors}, handleSubmit} = useForm ();

    const customSubmit = (dataForms) =>{
        axios
            .post("http://localhost:4000/remitentes/create", dataForms)
            .then(response => console.log(response.data))
        console.log(dataForms)};
     

    const handleClick = () => {
        handleClickChild();
    }
    
    return (
         
        <div className="modal fondo-modal" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Registro</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleClick}></button>
                    </div>
                <div className="modal-body">
                <form action="" onSubmit={handleSubmit(customSubmit)} >
                    <div className="col form-envio__datos"> 
                    </div>
                    <div className="col form-envio__datos">
                        <label htmlFor="direccionRemitente"><h6>Direccion de remitente</h6></label>
                        <input {...register("direccionRemitente", { required: true })}
                        aria-invalid = {errors.direccionRemitente ? "true": "false"}
                        type="text" 
                        className="form-control" 
                        id="direccionRemitente"
                        name="direccionRemitente" />
                        {errors.direccionRemitente && <span>This field is required <br /></span>}


                        <label htmlFor="ciudadRemitente"><h6>Ciudad remitente</h6></label>
                        <input {...register("ciudadRemitente", { required: true })}
                        aria-invalid = {errors.ciudadRemitente ? "true": "false"} 
                        type="text" 
                        className="form-control" 
                        id="ciudadRemitente" 
                        name="ciudadRemitente"/>
                        {errors.ciudadRemitente && <span>This field is required <br /></span>}

                        <label htmlFor="IdRemitente"><h6>Numero identificacion del remitente</h6></label>
                        <input {...register("IdRemitente", { required: true })}
                        aria-invalid = {errors.IdRemitente ? "true": "false"}
                        type="number" 
                        className="form-control" 
                        id="IdRemitente" />
                        {errors.IdRemitente && <span>This field is required <br /></span>}


                        <p><b>Nombre del remitente</b></p>
                        <div className="col">                                      
                            <input {...register("firstname", { required: true, maxLength:15 })}
                            aria-invalid = {errors.firstname ? "true": "false"}
                            type="text"
                            id="firstname"
                            name="firstname" 
                            aria-label="First name" 
                            className="form-control" />
                            {errors.firstname && <span>This field is required. <br /></span>}
                            
                            <p><b>Apellido del remitente</b></p>
                            <input {...register("lastName", { required: true, maxLength:15 })}
                            aria-invalid = {errors.lastName ? "true": "false"}
                            type="text"
                            id="lastName"
                            name="lastName" 
                            aria-label="Last name" 
                            className="form-control" />
                            {errors.lastName && <span>This field is required. <br /></span>}
                            
                            <button type="submit" className="btn btn-primary">Guardar</button>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleClick}>Cerrar</button>
                            
                        </div>
                    </div>
                </form>   
                </div>              
                </div>                
            </div>           
        </div>
         
   
    );
};

export default ModalEnviado;

