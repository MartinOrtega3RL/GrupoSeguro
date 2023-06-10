<?php


$id_Factura = $_GET['id_Factura'];


$conn = mysqli_connect("localhost", "root", "", "seguros") or die("Error con la conexion");

$sql = "UPDATE facturacion SET estado_Pago = 1 where num_Factura = '$id_Factura'";

if (mysqli_query($conn, $sql)) {
    // Paso 5: Verificar si la consulta se ejecutó correctamente
    if (mysqli_affected_rows($conn) > 0) {
      echo "pago aprobado";
    } else {
      echo "Error al insertar los datos";
    }
  } else {
    echo "Error: " . mysqli_error($conn);
}


mysqli_close($conn);
 

?>
