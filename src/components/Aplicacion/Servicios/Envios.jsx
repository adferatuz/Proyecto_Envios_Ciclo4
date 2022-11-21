import {React} from "react";
import { useNavigate } from "react-router-dom";
import {confirmarEnvio}from "./confirmacionEnvioFormulario"

export const Envios = () => {
    const navigate = useNavigate();
    const handleOnClick = () => {
        navigate("/");
    };
    const navigate1 = useNavigate();
    const handleOnClick1 = () => {
        navigate1("/Loggin");
    };
    const navigate2 = useNavigate();
    const handleOnClick2 = () => {
        navigate2("/EstadoEnvios");
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
                        <li className="nav-item"><a className="nav-link active btn btn-success btn-circle btn-sm" href="#!" onClick={handleOnClick2}><b>Sigue tu envio</b> </a></li>
                        <li className="nav-item"><a className="nav-link active btn btn-success btn-circle btn-sm" href="#!" onClick={handleOnClick1}><b> Log in </b></a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <div className="container fondo">
            <div className="navbar navbar-expand-lg margen">
                <h1>Por favor diligencie el siguiente formulario</h1>
            </div>
        <div className="container text-center">
            <div className="row">
            <div className="col-4">
                            <label htmlFor="iUsername"> <h6> Username</h6></label>
                            <input id="iUsername" name="username" type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"/>
                            <label htmlFor="iemail"><h6>Email</h6></label>
                            <input type="email" className="form-control" placeholder="example@example.com" aria-label="email" aria-describedby="addon-wrapping" name="iemail" id="iemail"/>
                            <label htmlFor="ipassword"><h6>Password</h6></label>
                            <input id="ipassword" name="Password" type="Password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="addon-wrapping"/>
                        </div>

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
                        <option selected>Elige</option>
                        <option defaultValue="1">Si</option>
                        <option defaultValue="2">No</option>
                        
                    </select>
                    </div>
                    <label htmlFor="ipeso"><h6>Peso aproximado en kg</h6></label>
                    <input type="text" className="form-control" id="ipeso" />
                    
                </div>
            </div>
            <div class="container text-center fondo">
                <div class="row">
                    <div class="col">
                    <label htmlFor="iciudadRecogida"><h6>Direccion de remitente</h6></label>
                    <input type="text" className="form-control" id="iciudadRecogida" />
                    <label htmlFor="iciudadRem"><h6>Ciudad remitente</h6></label>
                    <input type="text" className="form-control" id="iciudadRem" />
                    <label htmlFor="iIdRemitente"><h6>Numero identificacion del remitente</h6></label>
                    <input type="text" className="form-control" id="iIdRemitente" />
                    <span ><h6>Nombre y Apellido del remitente</h6></span>
                    <div class="input-group">                                      
                    <input type="text" aria-label="First name" className="form-control" />
                    <input type="text" aria-label="Last name" className="form-control" />
                </div>
                    </div>
                <div class="col">                    
                <label htmlFor="iDireccionLlegada"><h6>Direccion de llegada</h6></label>
                    <input type="text" className="form-control" id="iDireccionLlegada" />
                    <label htmlFor="iciudadLlegada"><h6>Ciudad Llegada</h6></label>
                    <input type="text" className="form-control" id="iciudadLlegada" />
                    <label htmlFor="iIdRecibe"><h6>Numero identificacion del que recibe</h6></label>
                    <input type="text" className="form-control" id="iIdRecibe" />
                    <span ><h6>Nombre y Apellido del que recibe</h6></span>
                    <div class="input-group">                                      
                    <input type="text" aria-label="First name" className="form-control" />
                    <input type="text" aria-label="Last name" className="form-control" />
                </div>
                    </div>
                    <div class="col">
                    <div className="margen">
                    <span><h3>Por favor llenar todos los espacios.</h3></span>
                    </div>
                    <button type="button" class="btn btn-primary" onClick={()=>{confirmarEnvio()}}>Confirmar envio</button>
                    </div>
                </div>
            </div>
            
           
        </div>
        </div>
        </>
    );
};