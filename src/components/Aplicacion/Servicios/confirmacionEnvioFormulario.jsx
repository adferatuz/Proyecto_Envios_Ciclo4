import {React} from "react";
import { useEffect } from "react";


const  ModalEnviado = ({vista, handleClickChild})=> {
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
                    <div className="col-4">                
                        <label htmlFor="iUsername"> <h6> Username</h6></label>
                        <input id="iUsername" name="username" type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"/>
                        <label htmlFor="iemail"><h6>Email</h6></label>
                        <input type="email" className="form-control" placeholder="example@example.com" aria-label="email" aria-describedby="addon-wrapping" name="iemail" id="iemail"/>
                        <label htmlFor="ipassword"><h6>Password</h6></label>
                        <input id="ipassword" name="Password" type="Password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="addon-wrapping"/>
                    </div>
                    <div className="col">
                        <label htmlFor="iciudadRecogida"><h6>Direccion de remitente</h6></label>
                        <input type="text" className="form-control" id="iciudadRecogida" />
                        <label htmlFor="iciudadRem"><h6>Ciudad remitente</h6></label>
                        <input type="text" className="form-control" id="iciudadRem" />
                        <label htmlFor="iIdRemitente"><h6>Numero identificacion del remitente</h6></label>
                        <input type="text" className="form-control" id="iIdRemitente" />
                        <span ><h6>Nombre y Apellido del remitente</h6></span>
                        <div className="input-group">                                      
                            <input type="text" aria-label="First name" className="form-control" />
                            <input type="text" aria-label="Last name" className="form-control" />
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
         
   
    );
};

export default ModalEnviado;

