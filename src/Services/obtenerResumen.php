<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET, POST, DELETE");
header("Allow: GET, POST, DELETE");



// Paso 1: Conexión a la base de datos

$num_Poliza = $_GET['num_Poliza'];
$conn = mysqli_connect("localhost","root","","seguros")or die("Error con la conexion");
// Ejecutar una consulta para obtener todos los datos de una tabla
$consulta = "SELECT monto_Total,
SUBSTRING_INDEX(GROUP_CONCAT(num_Cuota SEPARATOR ', '), ',', 4) AS Numero_de_Cuotas,
SUBSTRING_INDEX(GROUP_CONCAT(Fecha_emision SEPARATOR ', '), ',', 4) AS Emision_Fecha
FROM facturacion
WHERE estado_Pago = 1 AND num_Poliza = '$num_Poliza' ;";
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
