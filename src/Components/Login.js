import "../Styles/Login_Style.css";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Contexto } from "../context/context";

export default function Login() {
  const { obtenerUsuario, obtenerAgente } = useContext(Contexto);

  const notify = () =>
    toast.success(
      "¡Perfecto! Uno de nuestros Agentes le enviara un correo con su nueva contraseña.",
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      }
    );
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [datoss, setDatoss] = useState(null);

  const navigate = useNavigate();

  const urladd =
    "http://localhost/PHP/React/mypolice/src/Services/consulta.php";


    if (email==="admin@gmail.com" && password==="admin1234"){

      navigate("/Admin")
    
    }

  const enviarDatos = (e) => {
    e.preventDefault();

    const params = {
      email: email,
      password: password,
    };

    axios
      .get(urladd, { params })
      .then((response) => {
        console.log(response);
        // Manejar la respuesta del servidor
        const datos = response.data;
        // Realizar las operaciones necesarias con los datos recibidos
        setDatoss(datos);

        if (datos == null) {
          setError("No se a encontrado el usuario");
        } else {
          setError("");
          for (let i = 0; i < datos.length; i++) {
            if (datos[i].existe === "1" && datos[i].estado === "1") {
              obtenerUsuario(email);

              navigate("/Dashboard");
              // Realizar la navegación a "/Dashboard" usando la función de navegación de React Router
            } else if (datos[i].existe === "1" && datos[i].estado === "2") {
              obtenerAgente(email);
              navigate("/Agente")
              // Realizar la navegación a "/Agente" usando la función de navegación de React Router
            }
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="container h-90">
        <div className="row d-flex justify-content-center align-items-center h-90">
          <div className="col-xl-11">
            <div className="card rounded-2 text-black">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-5">
                    <div className="text-center">
                      <img
                        src="https://us.123rf.com/450wm/defmorph/defmorph1809/defmorph180900053/108046316-logotipo-del-coche-con-la-mano-del-c%C3%ADrculo-logotipo-colorido-eps-10.jpg?ver=6"
                        style={{ width: "185px", display: "initial" }}
                        alt="logo"
                      />
                    </div>
                    <form>
                      <h6 className="pb-4">Ingrese con su Cuenta</h6>
                      <div className="form-outline mb-3 ">
                        <input
                          type="email"
                          id="form2Example11"
                          className="form-control form-control-lg"
                          placeholder="Email"
                          required
                          onChange={(e) => setEmail(e.target.value)}
                          name="email"
                        />
                        <label
                          className="form-label"
                          htmlFor="form2Example11"
                        ></label>
                      </div>
                      <div className="form-outline mb-2">
                        <input
                          type="password"
                          id="form2Example22"
                          className="form-control form-control-lg"
                          placeholder="Contraseña"
                          name="password"
                          required
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <label
                          className="form-label"
                          htmlFor="form2Example22"
                        ></label>
                      </div>
                      <div className="text-center pt-1 mb-10 pb-1">
                        <button
                          className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3 btn-lg"
                          type="button"
                          onClick={enviarDatos}
                        >
                          Ingresar
                        </button>
                        <h5>{error}</h5>
                      </div>
                      <div className="text-center pt-1 mb-5 pb-1">
                        <a
                          className="text-muted fs-5"
                          href="#olvidoContraseña"
                          data-toggle="modal"
                        >
                          ¿Olvido su Contraseña?
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="area col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h2 className="mb-4">
                      ¿Quieres conducir con tranquilidad?
                    </h2>
                    <p className="small mb-0  fs-5">
                      {" "}
                      ¡Protege tu vehículo con nuestro seguro de auto! En
                      GruposSeguros, ofrecemos una amplia gama de opciones de
                      cobertura para que puedas elegir la que mejor se adapte a
                      tus necesidades y presupuesto. No arriesgues tu seguridad
                      ni la de tu vehículo, elige la tranquilidad de estar
                      protegido con nuestro seguro de auto. Contáctanos hoy
                      mismo para obtener más información y una cotización
                      personalizada.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Modal - Olvido Contraseña --> */}
      <div id="olvidoContraseña" className="modal fade">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div>
              <div className="modal-header">
                <h4 className="modal-title">Recuperar Contraseña</h4>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label>Ingrese el email de su Cuenta</label>
                  <input type="email" className="form-control" required />
                </div>
              </div>
              <div className="modal-footer">
                <input
                  type="button"
                  className="btn btn-primary"
                  data-dismiss="modal"
                  value="Cancelar"
                />
                <input
                  type="submit"
                  className="btn btn-success"
                  data-dismiss="modal"
                  value="Enviar"
                  onClick={notify}
                />
              </div>
            </div>
          </div>
        </div>
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
    </>
  );

  const LoaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  `;
}
//¡Perfecto! Uno de nuestros Agentes le enviara un correo con su nueva contraseña.
