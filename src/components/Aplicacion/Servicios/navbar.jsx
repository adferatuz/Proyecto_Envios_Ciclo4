import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react"

const Navbar = ({}) => {

    const [mostrar,setMostrar] = useState(false)
    const handleClick = () => {
       setMostrar(true) 
    }

    return (
        <>
        <nav className="navbar navbar-expand-lg bg-light navbar-dark bg-dark navbar-nav">
            <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container px-5">
                <span  className="navbar-brand"><h1 >Envios InstaYA!</h1></span>
                
            </div>
        </nav>
                <div id="navbar-nav">
                    <ul className="navbar-nav">
                    
                    <li className="nav-item">
                            <NavLink
                                style={({ isActive }) => ({ color: isActive ? 'red' : 'white' })}
                                className="nav-link btn btn-ligth"
                                to="/PaginaPrincipal">PaginaPrincipal</NavLink>
                        </li>
                        
                        
                        <li className="nav-item">
                            <NavLink
                                style={({ isActive }) => ({ color: isActive ? 'red' : 'white' })}
                                className="nav-link btn btn-ligth"
                                to="/Envios">Envios</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                style={({ isActive }) => ({ color: isActive ? 'red' : 'white' })}
                                className="nav-link btn btn-ligth"
                                to="/EstadoEnvios">Sigue tu Envio</NavLink>
                        </li>
                       
                        <li className="nav-item">
                            <NavLink
                                style={({ isActive }) => ({ color: isActive ? 'red' : 'white' })}
                                className="nav-link btn btn-ligth"
                                to="/" onClick={handleClick}>Bienvenido</NavLink>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
        
    </>
    )
}

export default Navbar