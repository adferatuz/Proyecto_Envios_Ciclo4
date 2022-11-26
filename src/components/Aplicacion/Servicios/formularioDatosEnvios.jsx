import { useEffect } from "react";

const FormDatosEnvios = ({vista, handleClickChild}) => {
    useEffect(() =>{         
    },[vista])
    
    const handleClick = () => {
        handleClickChild();

    }
    return(
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
                        <div className="col-4">
                            <h6 id="margen">Digite fecha y hora para atender al personal del envio</h6>
                            <label htmlFor="itime"><h6>Tiempo</h6></label>
                            <input id="itime" type="time" className="form-control"   aria-describedby="addon-wrapping"/>
                            <label htmlFor="idate"><h6>Fecha</h6></label>
                            <input id="idate" className="form-control" type="date" min="2021-01-01" max="2023-12-31" />                        
                        </div>               
                        <div className="col-2"><h6>Datos del envio en cm</h6>
                            <label htmlFor="ialto"><h6>Alto</h6></label>
                            <input type="text" className="form-control" id="ialto" />
                            <label htmlFor="iancho"><h6>Ancho</h6></label>
                            <input type="text" className="form-control" id="iancho" />
                            <label htmlFor="ilargo"><h6>Largo</h6></label>
                            <input type="text" className="form-control" id="ilargo" />
                        </div>
                        <div className="col-2"><h6>Mercancia delicada?</h6>                   
                            <div className="input-group mb-3">                   
                                <select className="form-select" id="inputGroupSelect01">
                                    <option select ="true">Elige</option>
                                    <option defaultValue="1">Si</option>
                                    <option defaultValue="2">No</option>   
                                </select>
                            </div>
                            <label htmlFor="ipeso"><h6>Peso aproximado en kg</h6></label>
                            <input type="text" className="form-control" id="ipeso" />   
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
export default FormDatosEnvios;