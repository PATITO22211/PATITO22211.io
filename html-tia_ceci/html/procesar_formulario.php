<?php
$servername = "containers-us-west-193.railway.app";
$username = "root";
$password = "GtYLRGz3MfMU3oaCsi1l";
$dbname = "railway";

// Crear una conexión a la base de datos
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Recuperar los datos del formulario
$nombre = $_POST["firstname"];
$apellido = $_POST["lastname"];
$correo = $_POST["Correo"];
$contraseña = $_POST["psw"];

// Agregar los datos a la base de datos
$sql = "INSERT INTO usuarios (nombre, apellido, correo, contraseña) VALUES ('$nombre', '$apellido', '$correo', '$contraseña')";

if ($conn->query($sql) === TRUE) {
    echo "Registro exitoso";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
