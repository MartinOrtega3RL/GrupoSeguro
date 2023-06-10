<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET, POST, DELETE");
header("Allow: GET,POST,DELETE");


$num_Factura = 0;

require __DIR__ .  '../../../vendor/autoload.php';

MercadoPago\SDK::setAccessToken('TEST-8325316103805583-060520-b4f848a659cae511165db755a89ce066-190255153');

$conn = mysqli_connect("localhost", "root", "", "seguros") or die("Error con la conexion");


$obtainedResult = true;

if ($obtainedResult){

    if (isset($_GET['num_Factura'])) {
        $idFactura = intval($_GET['num_Factura']);
        // Resto del código que utiliza $idFactura
    }
    $query = "SELECT * FROM facturacion WHERE num_Factura = $idFactura";
    $result = mysqli_query($conn, $query);

    if ($row = mysqli_fetch_assoc($result)) {
        $num_Factura = $row['num_Factura'];
        $monto_Total = $row['monto_Total'];
        $fecha_Vencimiento = $row['fecha_Vencimiento'];
        $fecha_Emision = $row['fecha_Emision'];
        $cliente_Cuil = $row['cliente_Cuil'];
        $nombrenum_Poliza = $row['num_Poliza'];
        $num_Cuota = $row['num_Cuota'];
        $fecha_Pago = $row['fecha_Pago'];
        $id_Pago = $row['id_Pago'];
        $estado_pago = $row['estado_Pago'];

        // Asigna más variables según las columnas de tu tabla

        // Establecer la bandera en verdadero para salir del ciclo

    }

    mysqli_free_result($result);

    // Pausar la ejecución del código durante un tiempo antes de realizar la siguiente iteración
    sleep(1); // Puedes ajustar el tiempo de pausa según tus necesidades


    mysqli_close($conn);

    require __DIR__ .  '../../../vendor/autoload.php';

    MercadoPago\SDK::setAccessToken('TEST-8325316103805583-060520-b4f848a659cae511165db755a89ce066-190255153');
 
    $preference = new MercadoPago\Preference();
            
    // Crea un ítem en la preferencia
    $item = new MercadoPago\Item();

    $item->id = $num_Factura;
    $item->title = 'Factura #' . $num_Factura;
    $item->quantity = 1;
    $item->unit_price = $monto_Total;
    $preference->items = array($item);
    $successUrl = "http://localhost/PHP/React/mypolice/src/Services/PagoAprobado.php?id_Factura=" . $num_Factura;
    
    $preference->back_urls = array(
        "success" => $successUrl,
        "failure" => "http://www.tu-sitio/failure",
        "pending" => "http://www.tu-sitio/pending"
    );
    
    $preference->auto_return = "approved";
    $preference->save();
    echo json_encode(array('preferenceId' => $preference->id));
}
// Llamada a la función



//fin base de datos
?>

