import "../Styles/Login_Style.css";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
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
  return (
    <>
      <div className="container py-4 h-90">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-12">
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
                      <h3 className="mt-5 mb-5 pb-1">
                        Nosotros somos GruposSeguros
                      </h3>
                    </div>
                    <form>
                      <h6 className="pb-4">Ingrese con su Cuenta</h6>
                      <div className="form-outline mb-3 ">
                        <input
                          type="email"
                          id="form2Example11"
                          className="form-control form-control-lg"
                          placeholder="Email"
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
                        >
                          Ingresar
                        </button>
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
                    <ul className="circles">
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
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
                  className="btn btn-default"
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
}
//¡Perfecto! Uno de nuestros Agentes le enviara un correo con su nueva contraseña.
