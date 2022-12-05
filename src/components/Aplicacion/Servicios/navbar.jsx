import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-light navbar-dark bg-dark">
            <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container px-5">
                <a className="navbar-brand" href="/"><h1 >Envios InstaYA!</h1></a>
            </div>
        </nav>
                <div id="navbarNav">
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
                                to="/">Log out</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        
    </>
    )
}

export default Navbar