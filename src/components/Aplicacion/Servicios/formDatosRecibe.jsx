import { useEffect } from "react";

const FormDatosRecibe = ({vista, handleClickChild}) => {
    useEffect(() =>{         
    },[vista])

    const handleClick = () => {
        handleClickChild();

    }
    return (
        <div className="modal fondo-modal" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Modal title</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleClick}></button>
                    </div>
                <div className="modal-body">
                <form action="">
                <div className="row">                   
                    <div className="col-12">                    
                        <label htmlFor="iDireccionLlegada"><h6>Direccion de llegada</h6></label>
                        <input type="text" className="form-control" id="iDireccionLlegada" />
                        <label htmlFor="iciudadLlegada"><h6>Ciudad Llegada</h6></label>
                        <input type="text" className="form-control" id="iciudadLlegada" />
                        <label htmlFor="iIdRecibe"><h6>Numero identificacion del que recibe</h6></label>
                        <input type="text" className="form-control" id="iIdRecibe" />
                        <span ><h6>Nombre y Apellido del que recibe</h6></span>
                        <div className="input-group">                                      
                            <input type="text" aria-label="First name" className="form-control" id="iNombre" />
                            <input type="text" aria-label="Last name" className="form-control" id="iApellido" />
                        </div>
                    </div>                   
                    </div> 
                </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
        </div>
    )
}
export default FormDatosRecibe;