import { useEffect } from "react";

const HistorialEnvios = ({vista, handleClickChild}) => {

    useEffect(() =>{         
    },[vista])

    const labels = [
        'Id',
        'Codigo',
        'Fecha de envio',
        'Remitente',
        'Estado del envio',    
    ]

    const datos =[{
        id: 1,
        codigo: 2234325,
        fechaEnvio: '09/11/2022',
        remitente: 'Adrian fernandez',
        estadoEnvio: 'En espera'
    }]

    return (
        <>
        <table className="table table-warning">
            <thead>
                <tr>
                    {labels.map((labels, index) => {
                        return (<th key={index} scope="col">{labels}</th>)
                    })}
                </tr>
            </thead>
            <tbody>
                {datos.map((datos, index) => {
                    return (
                        <tr key={index}>
                            <th scope="row">{datos.id}</th>
                            <td>{datos.codigo}</td>
                            <td>{datos.fechaEnvio}</td>
                            <td>{datos.remitente}</td>
                            <td>{datos.estadoEnvio}</td>
                        </tr>
                    )
                })}
                
               
                
            </tbody>
        </table>
        </>
    )

}

export default HistorialEnvios