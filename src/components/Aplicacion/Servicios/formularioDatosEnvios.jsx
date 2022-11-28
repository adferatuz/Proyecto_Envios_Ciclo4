import { useEffect } from "react";
import { useForm } from "react-hook-form";

const FormDatosEnvios = ({vista, handleClickChild}) => {
    useEffect(() =>{         
    },[vista])

    const {register, formState: {errors}, handleSubmit} = useForm ();
    const customSubmit = (data) =>{console.log(data)};
    
    const handleClick = () => {
        handleClickChild();

    }
    return(
        <div className="modal fondo-modal" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Registro envios</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleClick}></button>
                    </div>
                <div className="modal-body">
                    <form action="" onSubmit={handleSubmit(customSubmit)}>
                        <div className="row form-envio__datos">
                        <div className="col-4">
                            <h6 id="margen">Digite fecha y hora para atender al personal del envio</h6>
                            <label htmlFor="time"><h6>Tiempo</h6></label>
                            <input {...register("time", { required: true })}
                            aria-invalid = {errors.time ? "true": "false"}
                            id="time"
                            name="time" 
                            type="time" 
                            className="form-control"   
                            aria-describedby="addon-wrapping"/>
                            {errors.time && <span>This field is required.<br /></span>}

                            <label htmlFor="date"><h6>Fecha</h6></label>
                            <input {...register("date", { required: true })}
                            aria-invalid = {errors.date ? "true": "false"} 
                            id="date" 
                            className="form-control" 
                            type="date" 
                            min="2021-01-01" 
                            max="2023-12-31" 
                            name="date"/>
                            {errors.date && <span>This field is required.<br /></span>}

                        </div>               
                        <div className="col-4"><h6>Datos del envio en cm</h6>
                            <label htmlFor="alto"><h6>Alto</h6></label>
                            <input {...register("alto", { required: true })}
                            aria-invalid = {errors.alto ? "true": "false"}
                            type="number" 
                            className="form-control" 
                            id="alto"
                            name="alto" />
                            {errors.alto && <span>This field is required.<br /></span>}

                            <label htmlFor="ancho"><h6>Ancho</h6></label>
                            <input {...register("ancho", { required: true })}
                            aria-invalid = {errors.ancho ? "true": "false"}
                            type="number" 
                            className="form-control" 
                            id="ancho"
                            name="ancho" />
                            {errors.ancho && <span>This field is required.<br /></span>}

                            <label htmlFor="largo"><h6>Largo</h6></label>
                            <input {...register("largo", { required: true })}
                            aria-invalid = {errors.largo? "true": "false"}
                            type="number" 
                            className="form-control" 
                            id="largo" 
                            name="largo"/>
                            {errors.largo && <span>This field is required.<br /></span>}

                        </div>
                        <div className="col-4"><h6>Mercancia delicada?</h6>                   
                            <div className="input-group mb-3">                   
                                <select className="form-select" id="inputGroupSelect01">
                                    <option select ="true">Elige</option>
                                    <option defaultValue="1">Si</option>
                                    <option defaultValue="2">No</option>   
                                </select>
                            </div>
                            <label htmlFor="peso"><h6>Peso aproximado en kg</h6></label>
                            <input {...register("peso", { required: true })}
                            aria-invalid = {errors.peso ? "true": "false"}
                            type="number" 
                            className="form-control" 
                            id="peso"
                            name="peso" /> 
                            {errors.peso && <span>This field is required.<br /></span>}

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
export default FormDatosEnvios;