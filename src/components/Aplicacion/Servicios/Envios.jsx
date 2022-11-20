import {React} from "react";
import { useNavigate } from "react-router-dom";

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
        <div class="container text-center">
            <div class="row">
            <div class="col-4">
                            <label htmlFor="iUsername"> <h6> Username</h6></label>
                            <input id="iUsername" name="username" type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"/>
                            <label htmlFor="iemail"><h6>Email</h6></label>
                            <input type="email" class="form-control" placeholder="example@example.com" aria-label="email" aria-describedby="addon-wrapping" name="iemail" id="iemail"/>
                            <label htmlFor="ipassword"><h6>Password</h6></label>
                            <input id="ipassword" name="Password" type="Password" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="addon-wrapping"/>
                        </div>

                <div class="col-4">
                            <h6 id="margen">Digite fecha y hora para atender al personal del envio</h6>
                            <label htmlFor="itime"><h6>Tiempo</h6></label>
                            <input id="itime" type="time" class="form-control"   aria-describedby="addon-wrapping"/>
                            <label htmlFor="idate"><h6>Fecha</h6></label>
                            <input id="idate" className="form-control" type="date" min="2021-01-01" max="2023-12-31" />
                        
                        </div>
               
                <div class="col-2"><h6>Datos del envio en cm</h6>
                    <label htmlFor="ialto"><h6>Alto</h6></label>
                    <input type="text" className="form-control" id="ialto" />
                    <label htmlFor="iancho"><h6>Ancho</h6></label>
                    <input type="text" className="form-control" id="iancho" />
                    <label htmlFor="ilargo"><h6>Largo</h6></label>
                    <input type="text" className="form-control" id="ilargo" />
                </div>
                <div class="col-2"><h6>Mercancia delicada?</h6>
                    
                    <div class="input-group mb-3">
                    
                    <select class="form-select" id="inputGroupSelect01">
                        <option selected>Elige</option>
                        <option value="1">Si</option>
                        <option value="2">No</option>
                        
                    </select>
                    </div>
                    <label htmlFor="ipeso"><h6>Peso aproximado en kg</h6></label>
                    <input type="text" className="form-control" id="ipeso" />
                    
                </div>
            </div>
            <div className="row form-control">
                <div className="col-4">
                <label htmlFor="iciudadRecogida"><h6>Direccion de recogida</h6></label>
                    <input type="text" className="form-control" id="ialto" />
                    <label htmlFor="iancho"><h6>Ancho</h6></label>
                    <input type="text" className="form-control" id="iancho" />
                    <label htmlFor="ilargo"><h6>Largo</h6></label>
                    <input type="text" className="form-control" id="ilargo" />

                </div>

            </div>
           
        </div>
        </div>
        </>
    );
};