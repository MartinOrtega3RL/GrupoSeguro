import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import { useContext } from "react";
import { mpContexto } from '../context/mpContext';

export default function Mercadopago() {

    const {preferenceId} = useContext(mpContexto);

    initMercadoPago('TEST-d858fd9d-0177-41fb-a024-b3927ab07de7');
    

    return (
        <div id="wallet-container">
            {preferenceId && (
                <Wallet
                    customization={{
                        texts: {
                            action: 'pay',
                            valueProp: 'security_details',
                        },
                        visual: {
                            buttonBackground: 'black',
                            buttonHeight : '50px',
                            borderRadius: '5px',
                            valuePropColor : 'grey',
                            verticalPadding : '400px',
                            horizontalPadding: '800px'
                        },
                    }}
                    initialization={{
                        preferenceId: preferenceId
                        , redirectMode: 'modal',

                    }}

                />
            )}

        </div>
    );
};
