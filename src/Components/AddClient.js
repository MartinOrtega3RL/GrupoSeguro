import "../Assets/css/addClient.css";
import form from "../Assets/Images/form.png";
import React, {useState,useEffect,useContext } from 'react';
import axios from "axios";
import Select from 'react-select';
import { guess} from "cuit";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Contexto } from "../context/context";

export default function AddClient(){

    const [nombre, setNombre] = useState("");
    const [apellido,setApellido] = useState("");
    const [dni, setDni] = useState("");
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [numberPhone, setNumberPhone] =useState(0);
    const [genero, setGenero] = useState("");
    const [provincia, setProvincia] = useState(null);
    const [ciudad,setCiudad] = useState("");
    const [barrio,setBarrio] = useState("");
    const [calle, setCalle] = useState("");
    const [data, setDatos] = useState([]);
 
    //DATOS VEHICULOS
    const [patente, setPatente] = useState("");
    const [numMotor,setNumMotor] = useState(0);
    const [numChasis, setNumChasis] = useState(0);
    const [valorVehiculo, setValorVehiculo] = useState()
    const [marcaVehiculo, setMarcaVehiculo] = useState("");
    const [descripcionVehiculo, setDescripcionVehiculo] = useState("");
    const [descripcionTipoC, setDescripcionTipoC] = useState("");
    const [modeloAño, setModeloAño] = useState(0);
    const [valorCobertura,setValorCobertura] = useState(0);
    const [tipo_vehiculo, setTipo_Vehiculo] = useState(null);
    const [tipo_cobertura,setTipo_Cobertura] = useState(null);


    //Agente
    const [agente,setAgente] = useState(null);

    const options = [
        { value: 'Buenos Aires', label: 'Buenos Aires' },
        { value: 'Catamarca', label: 'Catamarca' },
        { value: 'Chaco', label: 'Chaco' },
        { value: 'Chubut', label: 'Chubut' },
        { value: 'Cordoba', label: 'Cordoba' },
        { value: 'Corrientes', label: 'Corrientes' },
        { value: 'Entre Rios', label: 'Entre Rios' },
        { value: 'Formosa', label: 'Formosa' },
        { value: 'Jujuy', label: 'Jujuy' },
        { value: 'La Pampa', label: 'La Pampa' },
        { value: 'La Rioja', label: 'La Rioja' },
        { value: 'Mendoza', label: 'Mendoza' },
        { value: 'Misiones', label: 'Misiones' },
        { value: 'Neuquen', label: 'Neuquen' },
        { value: 'Rio Negro', label: 'Rio Negro' },
        { value: 'Salta', label: 'Salta' },
        { value: 'San Juan', label: 'San Juan' },
        { value: 'San Luis', label: 'San Luis' },
        { value: 'Santa Cruz', label: 'Santa Cruz' },
        { value: 'Santa Fe', label: 'Santa Fe' },
        { value: 'Santiago del Estero', label: 'Santiago del Estero' },
        { value: 'Tierra del Fuego', label: 'Tierra del Fuego' },
        { value: 'Tucuman', label: 'Tucuman' },
      ];

    const optionsAgente = data.map(element => {
        return {
          value: element.num_Empleado,
          label: element.cuenta_email
        };
      });

    

      const optionsVehiculo = [
        {value: "Automovil", label:"Automovil"},
        {value: "Camionta", label:"Camioneta"},
        {value: "Camion", label:"Camion"},
        {value: "Motocicleta", label:"Motocicleta"},
        {value: "Suv", label:"Suv"},
        ]   
        
    const optionCobertura = [
        {value: "A", label:"A"},
        {value: "B", label:"B"},
        {value: "B1", label:"B1"},
        {value: "C", label:"C"},
    ]  
    const notify = () => toast.success('¡Se ha registrado el cliente Correctamente!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    const urladd = "http://localhost/PHP/React/mypolice/src/Services/agregarInfo.php";
    
    var qs = require("qs");
    const enviarDatos = (e) => {
        e.preventDefault();
        // "M" for male, "F" for female and "E" for business / "Persona Jurídica"
        const cuit = guess(dni, genero);    
        axios.post(urladd,qs.stringify({
            data: {
                "nombre": nombre,
                "apellido": apellido,
                "dni":dni,
                "cuil":cuit,
                "email":email,
                "password": password,
                "numberPhone":numberPhone,
                "provincia": provincia.value,
                "ciudad": ciudad,
                "barrio":barrio,
                "calle":calle,
                //Vehiculo datos
                "patente":patente,
                "numMotor":numMotor,
                "numChasis":numChasis,
                "valorVehiculo":valorVehiculo,
                "marcaVehiculo":marcaVehiculo,
                "descripcionVehiculo":descripcionVehiculo,
                "descripcionTipoV":descripcionTipoC,
                "modeloAño":modeloAño,
                "tipo_vehiculo":tipo_vehiculo.value,
                "tipo_cobertura":tipo_cobertura.value,
                "valor_cobertura":valorCobertura,
                //Agente datos
                "num_Agente":agente.value,
    
                
            }
        }))
        .then(function(response){
            notify()
            console.log(response);
        })
        .catch(function(error){
            console.log(error)
        });
    }

    useEffect(() => {
        axios.get("http://localhost/PHP/React/mypolice/src/Services/obtenerData.php") 
        .then(response => {
            setDatos(response.data);
          })
          .catch(error => {
            console.log(error);
          });
    },[])

    
    return(
        <>
        <Select
            value={agente}
            onChange={setAgente}
            options={optionsAgente}

        /> 

        <div className="container register">
        
            <div className="row">
                {/* Parte de Izquierda - Login */}
                <div className="col-md-3 register-left">
                    <img src={form} alt="" />
                </div>
                {/* Termina*/}
                {/* Parte de derecha - Register */}
                
                <div className="col-md-9 register-right">
                     
                    <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="home-tab" data-toggle="tab" href="#cliente" role="tab" aria-controls="home" aria-selected="true">Cliente</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="profile-tab" data-toggle="tab" href="#vehiculo_cobertura" role="tab" aria-controls="profile" aria-selected="false">Vehiculo</a>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="cliente" role="tabpanel" aria-labelledby="home-tab">
                            <h3 className="register-heading">Datos Cliente</h3>
                            <div className="row register-form ">
                                <div className="col-md-6 ">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Nombre *" onChange={(e) => setNombre(e.target.value)}/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Apellido *" onChange={(e) => setApellido(e.target.value)}/>
                                    </div>
                                    <div className="form-group">
                                        <input type="number" className="form-control" placeholder="DNI *" onChange={(e) => setDni(e.target.value)}/>
                                    </div>
                                    
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="Email *" onChange={(e) => setEmail(e.target.value)}/>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" placeholder="Contraseña *" onChange={(e) => setPassword(e.target.value)}/>
                                    </div>
                                    <div className="form-group">
                                        <div className="maxl">
                                            <label className="radio inline">
                                                <input type="radio" name="gender" value="M" onChange={(e) => setGenero(e.target.value)} />
                                                <span> Masculino </span>
                                            </label>
                                            <label className="radio inline">
                                                <input type="radio" name="gender" value="F" onChange={(e) => setGenero(e.target.value)}/>
                                                <span> Femenino </span>
                                            </label>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                    <div className="form-group">
                                        <input type="text" minLength="10" maxLength="10" name="txtEmpPhone" className="form-control" placeholder="Numero Telefono *" onChange={(e) => setNumberPhone(e.target.value)}  />
                                    </div>
                                        <Select
                                           value={provincia}
                                           onChange={setProvincia}
                                           options={options}
                                        />                                
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Ciudad *" onChange={(e) => setCiudad(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Barrrio *" onChange={(e) => setBarrio(e.target.value)}/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Calle *" onChange={(e) => setCalle(e.target.value)}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ///////////////////////////////////////////////// */}
                        <div className="tab-pane fade show" id="vehiculo_cobertura" role="tabpanel" aria-labelledby="profile-tab">
                            <h3 className="register-heading">Datos Vehiculo</h3>
                            <div className="row register-form">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Patente *" onChange={(e) => setPatente(e.target.value)}/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Numero de Motor"  onChange={(e) => setNumMotor(e.target.value)}/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Numero de Chasis"  onChange={(e) => setNumChasis(e.target.value)}/>
                                    </div>
                                    <Select
                                           value={tipo_vehiculo}
                                           onChange={setTipo_Vehiculo}
                                           options={optionsVehiculo}
                                        />   
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="number" className="form-control" placeholder="Valor Vehiculo ($)*" onChange={(e) => setValorVehiculo(e.target.value)} />
                                    </div>
                                    
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Fabricante/Marca *" onChange={(e) => setMarcaVehiculo(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Descripcion " onChange={(e) => setDescripcionVehiculo(e.target.value)}/>
                                    </div>
                                    <div className="form-group">
                                        <input type="number" className="form-control" placeholder="Modelo Año *"  onChange={(e) => setModeloAño(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="datos-cobertura">
                                <h3 className="register-heading">Datos Coberutra</h3>
                                <div className="row register-form">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <Select
                                                value={tipo_cobertura}
                                                onChange={setTipo_Cobertura}
                                                options={optionCobertura}
                                            />   
                                        </div>
                                        <div className="form-group">
                                            <input type="number" className="form-control" placeholder="Valor Cobertura ($)*" onChange={(e) => setValorCobertura(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Descripcion de Tipo"  onChange={(e) => setDescripcionTipoC(e.target.value)}/>
                                        </div>
                                        
                                        <input type="submit" className="btnRegister" value="Ingresar" onClick={enviarDatos}/>
                                    </div>
                                    <div>
                                        <ToastContainer
                                        position="top-right"
                                        autoClose={5000}
                                        hideProgressBar={false}
                                        newestOnTop={false}
                                        closeOnClick={false}
                                        rtl={false}
                                        pauseOnFocusLoss
                                        draggable
                                        pauseOnHover={false}
                                        theme="light"
                                        />
                                        {/* Same as */}
                                        <ToastContainer />
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )

}
