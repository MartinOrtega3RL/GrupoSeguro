import { useState } from "react";
import { mpContexto } from "./mpContext";


export default function MercadoContext (props) {
    const {children} = props;
    const [preferenceId,setPreferenceId] = useState("");


    const obtenerPreference = (facturaId) => {
        setPreferenceId(facturaId);
        
    }
    console.log(preferenceId)

    return(
        <>
            <mpContexto.Provider value={{
                preferenceId,
                obtenerPreference
            }}>
                {children}
            </mpContexto.Provider>
        </>
    )






}