import {React} from "react";
import '../css/style.css';
import { useNavigate } from "react-router-dom";
import sloganImg from '../images/pngtree-free-shipping-label-with-chat-bulb-frame-png-image_3416174.jpg'

export const Header = () => {
    const navigate = useNavigate();
    const handleOnClick = () => {
        navigate("/Loggin");
    };
    const navigate1 = useNavigate();
    const handleOnClick1 = () => {
        navigate1("/Envios");
    };
    
    
    return (
    <>
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container px-5">
                <a className="navbar-brand" href="#!"><h1 >Envios InstaYA!</h1></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse MenuListaNavbar" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item"><a className="nav-link active btn btn-success btn-circle btn-sm " aria-current="page" href="#!"><b>Pagina principal</b></a></li>
                        
                        <li className="nav-item"><div class="dropdown">
                        <button class="btn btn-success nav-link active dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <b>Envios</b> 
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#" onClick={handleOnClick1}><b>Mensajeria (-5K)</b></a></li>
                            <li><a class="dropdown-item" href="#" onClick={handleOnClick1}><b>Carga (+5K)</b></a></li>
                            <li><a class="dropdown-item" href="#" onClick={handleOnClick1}><b>Contra Entrega</b></a></li>
                        </ul>
                        </div>
                        </li>
                        <li className="nav-item"><a className="nav-link active btn btn-success btn-circle btn-sm" href="#!" onClick={handleOnClick}><b> Log in</b></a></li>
                    </ul>
                </div>
            </div>
        </nav>

        <div className="container px-4 px-lg-5">
            
            <div className="row gx-4 gx-lg-5 align-items-center my-5">
                <div className="col-lg-7"><img className="img-fluid rounded mb-4 mb-lg-0" src={sloganImg} alt="..." /></div>
                <div className="col-lg-5">
                    <h1 className="font-weight-light">Conozca nuestra empresa</h1>
                    <h2>Trabajamos para que te sientas seguro de tus envios! <br /> 100% confiables.</h2>
                    <a className="btn btn-primary" href="#!">Call to Action!</a>
                </div>
            </div>
            
            <div className="card text-white bg-secondary my-5 py-4 text-center">
                <div className="card-body slogan"><p className="text-white m-0">This call to action card is a great place to showcase some important information or display a clever tagline!
                </p></div>
            </div>
            
            <div className="row gx-4 gx-lg-5">
                <div className="col-md-4 mb-5">
                    <div className="card h-100">
                        <div className="card-body">
                            <h2 className="card-title">Card One</h2>
                            <p className="card-text"><b>Obtenga hasta un 30% de descuento para su proximo giro</b></p>
                        </div>
                        <div className="card-footer"><a className="btn btn-primary btn-sm" href="#!">More Info</a></div>
                    </div>
                </div>
                <div className="col-md-4 mb-5">
                    <div className="card h-100">
                        <div className="card-body">
                            <h2 className="card-title">Card Two</h2>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod tenetur ex natus at dolorem enim! Nesciunt pariatur voluptatem sunt quam eaque, vel, non in id dolore voluptates quos eligendi labore.</p>
                        </div>
                        <div className="card-footer"><a className="btn btn-primary btn-sm" href="#!">More Info</a></div>
                    </div>
                </div>
                <div className="col-md-4 mb-5">
                    <div className="card h-100">
                        <div className="card-body">
                            <h2 className="card-title">Card Three</h2>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni quas ex numquam, maxime minus quam molestias corporis quod, ea minima accusamus.</p>
                        </div>
                        <div className="card-footer"><a className="btn btn-primary btn-sm" href="#!">More Info</a></div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};