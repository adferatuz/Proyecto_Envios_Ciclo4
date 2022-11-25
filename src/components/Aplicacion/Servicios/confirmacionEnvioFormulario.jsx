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
          
        <div className="modal" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Modal title</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleClick}></button>
                    </div>
                <div className="modal-body">
                    <p>Modal body text goes here.</p>
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

