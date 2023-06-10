<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET, POST,DELETE");
header("Allow: GET,POST,DELETE");

echo "AgregarCliente";
echo "<br>";
echo "<br>";
// Paso 1: Conexión a la base de datos
$conn = mysqli_connect("localhost","root","","seguros")or die("Error con la conexion");

// Paso 2: Recibir los datos enviados desde Axios

if ($_SERVER["REQUEST_METHOD"] === "POST"){

    $nombre = mysqli_real_escape_string($conn, $_POST["data"]['nombre']);
    $apellido = mysqli_real_escape_string($conn, $_POST["data"]['apellido']);
    $dni = mysqli_real_escape_string($conn, $_POST["data"]['dni']);
    $cuil = mysqli_real_escape_string($conn, $_POST["data"]['cuil']);
    $email = mysqli_real_escape_string($conn, $_POST["data"]['email']);
    $password = mysqli_real_escape_string($conn, $_POST["data"]['password']);
    $numberPhone = mysqli_real_escape_string($conn, $_POST["data"]['numberPhone']);
    $provincia = mysqli_real_escape_string($conn, $_POST["data"]['provincia']);
    $ciudad = mysqli_real_escape_string($conn, $_POST["data"]['ciudad']);
    $barrio = mysqli_real_escape_string($conn, $_POST["data"]['barrio']);
    $calle = mysqli_real_escape_string($conn, $_POST["data"]['calle']);
    //Para tabla personas
    $sqlPersonas = "INSERT INTO personas (nombre, apellido, dni,telefono) VALUES ('$nombre', '$apellido', '$dni','$numberPhone')";
    // Ejecutar la consulta
    mysqli_query($conn, $sqlPersonas);
    //Para tabla cuenta
    $sqlCuenta = "INSERT INTO cuenta(cuenta_email,cuenta_pass,Personas_dni,estado) VALUES ('$email', '$password','$dni', 1)";
    mysqli_query($conn, $sqlCuenta);
    $id_Cuenta = mysqli_insert_id($conn);
    echo $id_Cuenta;
    //Para tabla cliente
    $sqlCliente = "INSERT INTO cliente(cuil,id_Cuenta) VALUES ('$cuil', '$id_Cuenta')";
    mysqli_query($conn, $sqlCliente);   
    //Para tabla Provincia
    $sqlProvincia = "INSERT INTO provincia (nom_Provincia) VALUES('$provincia')";
    mysqli_query($conn, $sqlProvincia);
    $id_Prov = mysqli_insert_id($conn);
    //Para tabla Ciudad 
    $sqlCiudad = "INSERT INTO ciudad(nom_Ciudad,Provincia_id) VALUES('$ciudad','$id_Prov')";
    mysqli_query($conn, $sqlCiudad);
    $id_Ciudad = mysqli_insert_id($conn);
    //Para tabla Domicilio
    $sqlDomicilio = "INSERT INTO domicilio (calle,barrio,id_Ciudad,Personas_dni) 
    VALUES ('$calle','$barrio','$id_Ciudad','$dni')";
    mysqli_query($conn, $sqlDomicilio);

    //para cargar los datos del vehiculo
    $patente = mysqli_real_escape_string($conn, $_POST["data"]['patente']);
    $numMotor = mysqli_real_escape_string($conn, $_POST["data"]['numMotor']);
    $numChasis = mysqli_real_escape_string($conn, $_POST["data"]['numChasis']);
    $valorVehiculo = mysqli_real_escape_string($conn, $_POST["data"]['valorVehiculo']);
    $marcaVehiculo = mysqli_real_escape_string($conn, $_POST["data"]['marcaVehiculo']);
    $descripcionVehiculo = mysqli_real_escape_string($conn, $_POST["data"]['descripcionVehiculo']);
    $descripcionTipoC = mysqli_real_escape_string($conn, $_POST["data"]['descripcionTipoC']);
    $modeloAño = mysqli_real_escape_string($conn, $_POST["data"]['modeloAño']);
    $tipo_vehiculo = mysqli_real_escape_string($conn, $_POST["data"]['tipo_vehiculo']);
    $valor_cobertura = mysqli_real_escape_string($conn, $_POST["data"]['valor_cobertura']);
    $tipo_cobertura = mysqli_real_escape_string($conn, $_POST["data"]['tipo_cobertura']);
    $cuil = mysqli_real_escape_string($conn, $_POST["data"]['cuil']);
    $num_Empleado = mysqli_real_escape_string($conn, $_POST["data"]['num_Agente']);
    
    //tabla tipo_Vehiculo
    $tipo_Vehiculo = "INSERT INTO tipo_vehiculo ( tipo_Vehiculo) VALUES ('$tipo_Vehiculo')";
    mysqli_query($conn, $tipo_Vehiculo);
    $id_Tipo = mysqli_insert_id($conn);

    //tabla fabricante_vehiculo
    $fabricante_vehiculo = "INSERT INTO fabricante_vehiculo ( descripcion,modelo_Año,marca) 
    VALUES ('$descripcionVehiculo','$modeloAño','$marcaVehiculo')";
    mysqli_query($conn, $fabricante_vehiculo); 
    $id_Fabricante = mysqli_insert_id($conn);       
  
    //Talba Cobertura
    $Cobertura = "INSERT INTO cobertura (num_Cobertura,valor_Cobertura) VALUES ('$num_Cobertura','$valor_cobertura')";
    mysqli_query($conn, $Cobertura);
    $num_Cobertura = mysqli_insert_id($conn);
    //Talba Cobertura
    $tipo_Cober = "INSERT INTO tipo_cobertura (tipo_Cobertura,descripcion_Cobertura,num_Cobertura)
     VALUES ('$tipo_cobertura','$descripcionTipoC','$num_Cobertura')";
    mysqli_query($conn, $tipo_Cober);

    $fecha_actual = date("Y-m-d");
    $fecha_actual_obj = date_create($fecha_actual);
    date_modify($fecha_actual_obj, "+1 year");
    $fecha_actual_mas_un_anio = date_format($fecha_actual_obj, "Y-m-d");
    //tabla poliza
    $poliza = "INSERT INTO poliza ( condiciones, fecha_Inic, fecha_Fin, cant_Vehiculos, monto_Pagar, num_Empleado, Cliente_cuil, num_Cobertura)
    VALUES ('Limites','$fecha_actual','$fecha_actual_mas_un_anio','1','0','$num_Empleado','$cuil','$num_Cobertura')";
    mysqli_query($conn, $poliza);
    $num_Poliza = mysqli_insert_id($conn);

    // Calcula el monto a pagar
    $monto_Pagar = $valorVehiculo * 0.01 + $valor_cobertura;

    // Actualiza el campo monto_Pagar en la tabla poliza
    $updatePoliza = "UPDATE poliza SET monto_Pagar = '$monto_Pagar' WHERE num_Poliza = '$num_Poliza'";
    mysqli_query($conn, $updatePoliza);
    // Obtener el número de poliza recién insertado

    //tabla Vehiculo
    $Vehiculo = "INSERT INTO vehiculo (Patente, num_Motor,num_Chasis,valor_Vehiculo,num_Poliza,id_Tipo,id_Fabricante)
    VALUES ('$patente','$numMotor','$numChasis','$valorVehiculo','$num_Poliza','$id_Tipo','$id_Fabricante')";
    mysqli_query($conn, $Vehiculo);


    $generarCuota = "CALL GenerarCuotas('$num_Poliza', '$cuil')";
    mysqli_query($conn, $generarCuota);
    
}

// Paso 6: Cerrar la conexión a la base de datos
mysqli_close($conn);



?>
