import {React} from "react";
import { Footer, Header, Section } from "../Prueba/Prueba";
import '../css/style.css';


// funcion callback

// import { useEffect, useState } from "react";

// export const Actualizable = () => {
//     const [text,setText] = useState("");
//     useEffect(()=>{
//         const espera = seTimeout(() => setText('Actualizado'), 5000);
//         return ()=> clearTimeout(espera);
//     }, []);
//     return <button className="btn btn-primary"></button>

// };

export const Actualizable = () => {
    return(
        <div className="container fondo">
            <Header />
            <Section />
            <Footer />
            
        </div>
    )
}