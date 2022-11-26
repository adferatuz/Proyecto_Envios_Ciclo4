import {React} from "react";
import { useEffect } from "react";


const  ModalEnviado = ({vista, handleClickChild})=> {
    useEffect(() =>{ 
        console.log('useEffect')
        
    },[vista])
    const handleClick = () => {
        handleClickChild();
        console.log('Hice click')

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
                <div className="col-4">                
                        <label htmlFor="iUsername"> <h6> Username</h6></label>
                        <input id="iUsername" name="username" type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"/>
                        <label htmlFor="iemail"><h6>Email</h6></label>
                        <input type="email" className="form-control" placeholder="example@example.com" aria-label="email" aria-describedby="addon-wrapping" name="iemail" id="iemail"/>
                        <label htmlFor="ipassword"><h6>Password</h6></label>
                        <input id="ipassword" name="Password" type="Password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="addon-wrapping"/>
                    </div>
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

