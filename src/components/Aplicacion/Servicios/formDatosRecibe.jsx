import { useEffect } from "react";
import { useForm } from "react-hook-form";

const FormDatosRecibe = ({vista, handleClickChild}) => {
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
                        <h5 className="modal-title">Destino del envio</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleClick}></button>
                    </div>
                <div className="modal-body">
                <form action="" onSubmit={handleSubmit(customSubmit)}>
                <div className="row form-envio__datos">                   
                    <div className="col-12">                    
                        <label htmlFor="DireccionLlegada"><h6>Direccion de llegada</h6></label>
                        <input {...register("DireccionLlegada", { required: true })}
                        aria-invalid = {errors.DireccionLlegada ? "true": "false"}
                        type="text" 
                        className="form-control" 
                        id="DireccionLlegada" 
                        name="DireccionLlegada"/>
                        {errors.DireccionLlegada && <span>This field is required <br /></span>}

                        <label htmlFor="ciudadLlegada"><h6>Ciudad Llegada</h6></label>
                        <input {...register("ciudadLlegada", { required: true })}
                        aria-invalid = {errors.ciudadLlegada ? "true": "false"}
                        type="text" 
                        className="form-control" 
                        id="ciudadLlegada"
                        name="ciudadLlegada" />
                        {errors.ciudadLlegada && <span>This field is required <br /></span>}

                        <label htmlFor="IdRecibe"><h6>Numero identificacion del que recibe</h6></label>
                        <input {...register("IdRecibe", { required: true })}
                        aria-invalid = {errors.IdRecibe ? "true": "false"}
                        type="number" 
                        className="form-control" 
                        id="IdRecibe" 
                        name="IdRecibe"/>
                        {errors.IdRecibe && <span>This field is required <br /></span>}

                        <p><b>Nombre de quien recibe</b></p>
                        <div className="">                                      
                            <input {...register("iNombre", { required: true })}
                            aria-invalid = {errors.iNombre ? "true": "false"}
                            type="text" 
                            aria-label="First name" 
                            className="form-control" 
                            id="iNombre"
                            name="iNombre" />
                            {errors.iNombre && <span>This field is required <br /></span>}

                            <p><b>Apellido de quien recibe</b></p>
                            <input {...register("iApellido", { required: true })}
                            aria-invalid = {errors.iApellido ? "true": "false"} 
                            type="text" 
                            aria-label="Last name" 
                            className="form-control" 
                            id="iApellido"
                            name="iApellido" />
                            {errors.iApellido && <span>This field is required <br /></span>}

                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="submit" className="btn btn-primary">Guardar</button>
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleClick}>Cerrar</button>
                        
                    </div>                   
                    </div>

                </form>
                </div>
                
                </div>
            </div>
        </div>
    )
}
export default FormDatosRecibe;