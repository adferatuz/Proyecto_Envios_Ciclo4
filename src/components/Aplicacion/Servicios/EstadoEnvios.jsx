import {React} from "react";
import { useNavigate } from "react-router-dom";
import imgFondo from '../images/istockphoto-1132930101-612x612.jpg'

export const EstadoEnvios = () => {
    const navigate = useNavigate();
    const handleOnClick = () => {
        navigate("/");
    };
    

    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container px-5">
                <a className="navbar-brand" href="#!"><h1 >Envios InstaYA!</h1></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse MenuListaNavbar" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item"><a className="nav-link active btn btn-success btn-circle btn-sm" aria-current="page" href="#!" onClick={handleOnClick}><b> Pagina principal </b></a></li>                        
                    </ul>
                </div>
            </div>
        </nav>
            <div class="container text-center">
                <div class="row">
                    <div class="col">
                    Column
                    </div>
                    <div class="col">
                    <div class="input-group mb-3 margen">
                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-search"></i></span>
                        <input type="text" class="form-control" placeholder="Digite el codigo de seguimiento" aria-label="Username" aria-describedby="basic-addon1"/>
                        <button type="button" class="btn btn-success">Consultar Estado</button>
                        </div>
                    </div>
                    <div class="col">
                    Column
                    </div>
                </div>
            </div>
            <div className="container fondo space">
                <img src={imgFondo} alt="" />

            </div>
        </>
    );
};