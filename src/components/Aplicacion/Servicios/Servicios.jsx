import {React} from "react";
import { useNavigate } from "react-router-dom";
import imgCarrousel1 from '../images/images (1).jfif'
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
                        <li className="nav-item"><a className="nav-link active btn btn-success btn-circle btn-sm" aria-current="page" href="#!" onClick={handleOnClick}><b> Pagina principal </b></a></li>
                        <li className="nav-item"><a className="nav-link active btn btn-success btn-circle btn-sm" href="#!"><b>Sigue tu envio</b> </a></li>
                        <li className="nav-item"><a className="nav-link active btn btn-success btn-circle btn-sm" href="#!" ><b> Log in </b></a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <div className="container">
            <div className="col-md-4 mb-5 item">
                    <div className="card h-100">
                        <div className="card-body col-sm-9 bg-light p-3 border">
                            <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"/>
                            <input type="Password" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="addon-wrapping"/>
                        </div>
                        <div className="card-footer"><button type="button" class="btn btn-success">Success</button></div>
                    </div>
                </div>
                
                <div className="col-md-4 mb-5 item" id="item1">
                <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={imgCarrousel1} class="d-block w-100" alt="..."/>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                    </div>
                    <div class="carousel-item">
                    <img src={imgCarrousel2} class="d-block w-100" alt="..."/>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                    </div>
                    </div>
                    <div class="carousel-item">
                    <img src={imgCarrousel3} class="d-block w-100" alt="..."/>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p>
                    </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>


                        <div className="card-footer"><a className="btn btn-primary btn-sm" href="#!">More Info</a></div>
                    </div>
                </div>
            
        
         
        </>
    )
}
