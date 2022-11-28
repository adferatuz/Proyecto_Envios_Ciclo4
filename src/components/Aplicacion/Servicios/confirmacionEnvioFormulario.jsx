import {React} from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";



const  ModalEnviado = ({vista, handleClickChild})=> {
    useEffect(() =>{         
    },[vista])

    const {register, formState: {errors}, handleSubmit} = useForm ();
    const customSubmit = (data) =>{console.log(data)};
     

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

                    </div>
                    <div className="col form-envio__datos">
                        <label htmlFor="ciudadRecogida"><h6>Direccion de remitente</h6></label>
                        <input {...register("ciudadRecogida", { required: true })}
                        aria-invalid = {errors.ciudadRecogida ? "true": "false"}
                        type="text" 
                        className="form-control" 
                        id="ciudadRecogida" />
                        {errors.ciudadRecogida && <span>This field is required <br /></span>}


                        <label htmlFor="ciudadRem"><h6>Ciudad remitente</h6></label>
                        <input {...register("ciudadRem", { required: true })}
                        aria-invalid = {errors.ciudadRem ? "true": "false"} 
                        type="text" 
                        className="form-control" 
                        id="iciudadRem" />
                        {errors.ciudadRem && <span>This field is required <br /></span>}

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
                            
                            <button type="submit" className="btn btn-primary">Save changes</button>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleClick}>Close</button>
                            
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

