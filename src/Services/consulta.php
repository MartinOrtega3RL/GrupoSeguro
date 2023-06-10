<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET, POST, DELETE");
header("Allow: GET, POST, DELETE");

$email = $_GET['email'];
$password = $_GET['password'];

// Conexión a la base de datos
$servername = "localhost";
$username = "root";
$dbpassword = "";
$dbname = "seguros";

$conn = mysqli_connect($servername, $username, $dbpassword, $dbname);


if ($conn->connect_error) {
    die("Error en la conexión: " . $conn->connect_error);
}

$query = "SELECT COUNT(*) AS existe, estado FROM cuenta WHERE cuenta_email = '$email' AND cuenta_pass = '$password' GROUP BY estado";

$result = $conn->query($query);

// Verificar si hay resultados y crear un arreglo con los datos
if ($result->num_rows > 0) {
    $datos = array();
    while ($fila = $result->fetch_assoc()) {
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
