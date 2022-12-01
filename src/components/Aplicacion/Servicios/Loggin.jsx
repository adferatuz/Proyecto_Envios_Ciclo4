import {React, useState} from "react";
import { useNavigate } from "react-router-dom";
import imgCarrousel1 from '../images/images (1).jfif'
import imgCarrousel2 from '../images/1154103408.jpg'
import imgCarrousel3 from '../images/istockphoto-1132930101-612x612.jpg'
import '../css/style.css';
import FormLoggin from "./formLoggin";
import { useForm } from "react-hook-form";


export const Loggin = () => {
    const [mostrar, setMostrar] = useState (false);
    const {register, formState: {errors}, handleSubmit} = useForm ();
    const customSubmit = (dataForms) =>{console.log(dataForms)};


    const navigate = useNavigate();
    const handleOnClick = () => {
        navigate("/");
    };
    const navigate1 = useNavigate();
    const handleOnClick1 = () => {
        navigate1("/EstadoEnvios");
    };

    const handleShowFormClick = () => {
        setMostrar(true)
    }
    const handleClickChild = () => {
        setMostrar(false)
    }

    return (
        <>
        <div className="fondo">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container px-5">
                <a className="navbar-brand" href="#!"><h1 >Envios InstaYA!</h1></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse MenuListaNavbar" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item"><a className="nav-link active btn btn-success btn-circle btn-sm" aria-current="page" href="#!" onClick={handleOnClick}><b> Pagina principal </b></a></li>
                        <li className="nav-item"><a className="nav-link active btn btn-success btn-circle btn-sm" href="#!" onClick={handleOnClick1}><b>Sigue tu envio</b> </a></li>
                        <li className="nav-item"><a className="nav-link active btn btn-success btn-circle btn-sm" href="#!" ><b> Log in </b></a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <div className="container">
            <div className="col-md-4 mb-5 item">
            
                    <div className="card h-100 form-envio__datos">
                    <form action="" onSubmit={handleSubmit(customSubmit)} >
                        <div className="card-body col-sm-9 bg-light p-3 border">
                            <input {...register("LogginUsername", { required: true, maxLength:15 })}
                            aria-invalid = {errors.LogginUsername ? "true": "false"}
                            type="text" 
                            id="LogginUsername" 
                            name="LogginUsername" 
                            className="form-control" 
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="addon-wrapping"/>
                            {errors.LogginUsername && <span>This field is required. Max length 15<br /></span>}
                            

                            <input {...register("LogginPassword", { required: true })}
                            aria-invalid = {errors.LogginPassword ? "true": "false"}
                            type="Password" 
                            id="LogginPassword"
                            name="LogginPassword"
                            className="form-control" 
                            placeholder="Password" 
                            aria-label="Password" 
                            aria-describedby="addon-wrapping"/>
                            {errors.LogginPassword && <span>This field is required <br /></span>}
                        </div>
                        <div className="col-2">
                            <button type="submit" className="btn btn-primary" >Success</button>
                            </div>
                        </form>                            
                            <div className="col">
                            <button type="button" className="btn btn-warning" onClick={()=> {handleShowFormClick()}}>Crear usuario</button>
                            {mostrar ? <FormLoggin vista = {mostrar}  handleClickChild = {handleClickChild} /> : ''}
                            </div>   
                    </div>
                    
                </div>
                
                <div className="col-md-4 mb-5 item" id="item1">
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src={imgCarrousel1} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img src={imgCarrousel2} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img src={imgCarrousel3} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p>
                    </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>


                        <div className="card-footer"><a className="btn btn-primary btn-sm" href="#!">More Info</a></div>
                    </div>
                </div>
                </div>
        
         
        </>
    )
}
