<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET, POST,DELETE");
header("Allow: GET,POST,DELETE");


// Paso 1: Conexión a la base de datos
$conn = mysqli_connect("localhost","root","","seguros")or die("Error con la conexion");
// Ejecutar una consulta para obtener todos los datos de una tabla
$consulta = "SELECT p.num_Poliza,v.nombre,v.apellido,v.telefono, p.fecha_Inic,p.fecha_Fin,p.num_Empleado,v.cuenta_email
from view_poliza p
join cliente c on c.cuil = p.Cliente_cuil
join view_cuenta_persona v on c.id_Cuenta = v.id_Cuenta";

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


?>