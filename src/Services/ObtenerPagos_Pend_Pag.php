<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET, POST, DELETE");
header("Allow: GET, POST, DELETE");



// Paso 1: Conexión a la base de datos

$num_Poliza = $_GET['num_Poliza'];
$conn = mysqli_connect("localhost","root","","seguros")or die("Error con la conexion");
// Ejecutar una consulta para obtener todos los datos de una tabla
$consulta = "SELECT fecha_Emision AS ultimo_Pago, COUNT(num_Factura) as Cuotas_Pagadas,
(SELECT COUNT(num_Factura) FROM facturacion WHERE estado_Pago = 0 AND num_Poliza = '$num_Poliza') as Cantidad_Facturas_Pendientes
FROM facturacion
WHERE estado_Pago = 1 AND num_Poliza ='$num_Poliza'
ORDER BY fecha_Emision ASC
LIMIT 1;";
$resultado = $conn->query($consulta);

// Verificar si hay resultados y crear un arreglo con los datos
if ($resultado->num_rows > 0) {
    $datos = array();
    while($fila = $resultado->fetch_assoc()) {
        // Agregar cada fila de datos al arreglo
        $datos[] = $fila;
    }
} else {
    $datos = null;
}

// Cerrar la conexión
$conn->close();


$datos_json = json_encode($datos);
echo $datos_json;