<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET, POST,DELETE");
header("Allow: GET,POST,DELETE");



echo "AgregarAgente";
echo "<br>";
echo "<br>";
// Paso 1: Conexión a la base de datos
$conn = mysqli_connect("localhost","root","","seguros")or die("Error con la conexion");


if ($_SERVER["REQUEST_METHOD"] === "POST"){


    $nombre = mysqli_real_escape_string($conn, $_POST["data"]['nombre']);
    $apellido = mysqli_real_escape_string($conn, $_POST["data"]['apellido']);
    $dni = mysqli_real_escape_string($conn, $_POST["data"]['dni']);
    $estado = mysqli_real_escape_string($conn, $_POST["data"]['estado']);
    $email = mysqli_real_escape_string($conn, $_POST["data"]['email']);
    $password = mysqli_real_escape_string($conn, $_POST["data"]['password']);
    $numberPhone = mysqli_real_escape_string($conn, $_POST["data"]['numberPhone']);
    $provincia = mysqli_real_escape_string($conn, $_POST["data"]['provincia']);
    $ciudad = mysqli_real_escape_string($conn, $_POST["data"]['ciudad']);
    $barrio = mysqli_real_escape_string($conn, $_POST["data"]['barrio']);
    $calle = mysqli_real_escape_string($conn, $_POST["data"]['calle']);

    
    //Para tabla personas
    $sqlPersonas = "INSERT INTO personas (nombre, apellido, dni,telefono) VALUES ('$nombre', '$apellido', '$dni','$numberPhone')";
    mysqli_query($conn, $sqlPersonas);

    //Para tabla cuenta
    $sqlCuenta = "INSERT INTO cuenta(cuenta_email,cuenta_pass,Personas_dni, estado) VALUES ('$email', '$password','$dni')";
    mysqli_query($conn, $sqlCuenta);
    $id_Cuenta = mysqli_insert_id($conn);
    //Para tabla agente
    $sqlAgente = "INSERT INTO agente(id_Cuenta) VALUES ('$id_Cuenta')";
    mysqli_query($conn, $sqlAgente);
    //Para tabla Provincia
    $sqlProvincia = "INSERT INTO provincia (nom_Provincia) VALUES('$provincia')";
    mysqli_query($conn, $sqlProvincia);
    $id_Prov = mysqli_insert_id($conn);

    //Para tabla Ciudad 
    $sqlCiudad = "INSERT INTO ciudad(nom_Ciudad,Provincia_id) VALUES('$ciudad','$id_Prov')";
    mysqli_query($conn, $sqlCiudad);
    $id_Ciudad = mysqli_insert_id($conn);
    //Para tabla Domicilio
    $sqlDomicilio = "INSERT INTO domicilio (id_Domicilio, calle,barrio,id_Ciudad,Personas_dni) 
    VALUES ('$id_Domicilio','$calle','$barrio','$id_Ciudad','$dni')";
    mysqli_query($conn, $sqlDomicilio);
    
}




mysqli_close($conn);
?>
