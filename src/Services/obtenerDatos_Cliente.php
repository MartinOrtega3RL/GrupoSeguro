<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET, POST, DELETE");
header("Allow: GET, POST, DELETE");



// Paso 1: Conexión a la base de datos

$email = $_GET['email'];
$conn = mysqli_connect("localhost","root","","seguros")or die("Error con la conexion");
// Ejecutar una consulta para obtener todos los datos de una tabla
$consulta = "SELECT v.nombre,v.apellido,a.nombre AS nombre_agente,a.apellido AS apellido_agente,a.num_Empleado,p.fecha_Inic,p.fecha_Fin,p.marca,p.descripcion,p.tipo_Vehiculo,p.num_Motor,p.num_Chasis,p.tipo_Cobertura,p.patente,p.modelo_Año,p.num_Poliza,v.nom_Ciudad,v.nom_Provincia,p.cant_Vehiculos
FROM cliente c 

JOIN view_cuenta_persona v on c.id_Cuenta = v.id_Cuenta
JOIN view_poliza p on c.cuil = p.Cliente_cuil
JOIN view_agente a ON p.num_Empleado = a.num_Empleado

WHERE cuenta_email = '$email'";
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
