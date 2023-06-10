<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET, POST,DELETE");
header("Allow: GET,POST,DELETE");

// Paso 1: Conexión a la base de datos
$conn = mysqli_connect("localhost", "root", "", "seguros") or die("Error con la conexión");

// Paso 2: Recibir los datos enviados desde Axios
$data = json_decode(file_get_contents("php://input"), true);
$num_Factura = intval($data["num_Factura"]); // Convertir a entero

// Paso 3: Insertar los datos en la tabla 'prueba' si num_Factura no es 0
if ($num_Factura !== 0) {
  $sql = "INSERT INTO prueba VALUES ($num_Factura)";
  $result = mysqli_query($conn, $sql);

  // Paso 4: Comprobar si la inserción fue exitosa
  if ($result) {
    echo "Datos insertados correctamente";
  } else {
    echo "Error al insertar los datos: " . mysqli_error($conn);
  }
} else {
  echo "El número de factura no puede ser 0";
}

// Paso 5: Cerrar la conexión a la base de datos
mysqli_close($conn);
?>