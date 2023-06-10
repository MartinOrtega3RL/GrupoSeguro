import { NavLink} from "react-router-dom";
import "../Assets/css/Sidebar.css";
import LogoSeguros from "../Assets/Images/LogoSeguros.png";
import Reloj from '../Components/Reloj';
import { useLocation } from "react-router-dom";


export default function SidebarAdmn(){

    const location = useLocation();

    




    return(
        <>
            <div className="sidebar">
                <div className="header-sidebar">
                    <p className='text-center'>GruposSeguros</p>
                    <img src={LogoSeguros} className="img-Logo" alt='logo.Seguros'></img>
                    <p className="line"></p>
                </div>
                <ul>
                    <li>
                        <NavLink to="" className="text-light rounded py-2 w-100  d-inline-block px-3" activeclassname="active">
                            <i className="me-2 fa-solid fa-house"></i> Portada</NavLink>
                    </li>
                    <div className="text-light rounded py-2 w-100  d-inline-block px-3">
                        <nav className="navbar navbar-default" role="navigation">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle x collapsed " 
                                data-toggle="collapse" data-target="#navbar-collapse-x">
                                    <i className="fa-solid fa-users"></i> Clientes
                                </button>
                                
                            </div>
                            <div className="collapse navbar-collapse" id="navbar-collapse-x">
                                <ul className="nav navbar-nav navbar-right">
                                    <li data-toggle="collapse" data-target="#navbar-collapse.in">
                                    <NavLink to="addClient"  className="text-light rounded py-2 w-100  d-inline-block px-3" activeclassname="active">
                                        Agregar</NavLink>
                                    </li>
                                    <li data-toggle="collapse" data-target="#navbar-collapse.in">
                                    <NavLink to="ListarCliente"  className="text-light rounded py-2 w-100  d-inline-block px-3" activeclassname="active">
                                         Listar</NavLink>
                                    </li>
                                 </ul>
                            </div>
                        </nav>
                    </div>
                    <li>
                        <NavLink to="s"   className="text-light rounded py-2 w-100 d-inline-block px-3" activeclassname="active">
                            <i className="me-2 fa-solid fa-flag"></i> Reportes</NavLink>
                    </li>
                    <li>
                        
                        <Reloj></Reloj>
                    </li>
                </ul>

            </div>
        
        </>
    )
}
