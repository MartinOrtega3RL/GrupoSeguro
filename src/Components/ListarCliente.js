import { useEffect,useState } from "react";
import axios from "axios";
import "../Assets/css/lstClient.css";


export default function ListarCliente (){


    const [data, setDatos] = useState([])
  

    useEffect(() => {
        axios.get("http://localhost/PHP/React/mypolice/src/Services/ObtenerPoliza.php") 
        .then(response => {
            setDatos(response.data);
          })
          .catch(error => {
            console.log(error);
          });
    },[])

    console.log(data);
    return(
        <>
        <section className="intro">
            <div className="bg-image h-100">
                <div className="mask d-flex align-items-center h-100">
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="card mask-custom">
                        <div className="card-body">
                            <div className="table-responsive">
                            <table className="table table-borderless text-white mb-0">
                                <thead>
                                <tr>
                                    <th scope="col">Nombre Completo</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Celular</th>
                                    <th scope="col">fecha_Inicio</th>
                                    <th scope="col">fecha_Vencimiento</th>
                                    <th scope="col">Numero Agente</th>
                                    <th scope="col">Ver Poliza</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {data.map((datos,index) => (
                                    <tr key={index}>
                                        <th scope="row">{datos.nombre} {datos.apellido}</th>
                                        <td>{datos.cuenta_email}</td>
                                        <td>{datos.telefono}</td>
                                        <td>{datos.fecha_Inic}</td>
                                        <td>{datos.fecha_Fin}</td>
                                        <td>{datos.num_Empleado}</td>
                                        <td>
                                            <a href="#editEmployeeModal" className="edit" data-toggle="modal"><i className="fa-solid fa-eye"></i></a>
                                        </td>
                                        
                                    </tr>
                                    ))}  
                                </tbody>
                            </table>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
        </>
    )

}