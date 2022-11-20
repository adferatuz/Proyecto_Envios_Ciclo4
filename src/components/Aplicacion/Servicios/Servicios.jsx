import {React} from "react";
import { useNavigate } from "react-router-dom";
import imgCarrousel1 from '../images/pngtree-free-delivery-icon-png-image_1922196.jpg'
import imgCarrousel2 from '../images/1154103408.jpg'
import imgCarrousel3 from '../images/istockphoto-1132930101-612x612.jpg'

export const Loggin = () => {
    const navigate = useNavigate();
    const handleOnClick = () => {
        navigate("/Dashboard");
    };

    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container px-5">
                <a className="navbar-brand" href="#!"><h1 >Envios InstaYA!</h1></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse MenuListaNavbar" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item"><a className="nav-link active btn btn-primary btn-circle btn-sm" aria-current="page" href="#!" onClick={handleOnClick}>Menu principal</a></li>
                        <li className="nav-item"><a className="nav-link btn btn-secondary btn-icon-split" href="#!" >Log in</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <div className="container">
            <div className="col-md-4 mb-5 item">
                    <div className="card h-100">
                        <div className="card-body">
                            <h2 className="card-title">Card One</h2>
                            <p className="card-text"><b>Obtenga hasta un 30% de descuento para su proximo giro</b></p>
                        </div>
                        <div className="card-footer"><a className="btn btn-primary btn-sm" href="#!">More Info</a></div>
                    </div>
                </div>
                
                <div className="col-md-4 mb-5 item" id="item1">
                    <div className="card h-100">
                        <div className="card-body">
                        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div class="carousel-item active">
                    <img src={imgCarrousel1} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                    <img src={imgCarrousel2} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                    <img src={imgCarrousel3} class="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                        </div>
                    </div>
                </div>


                        <div className="card-footer"><a className="btn btn-primary btn-sm" href="#!">More Info</a></div>
                    </div>
                </div>
            
        
         
        </>
    )
}
