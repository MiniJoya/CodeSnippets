<?php

$user = "";
$password = "";
$server = "";
$database = "";

$conexion = mysqli_connect($server, $user, $password, $database);

if(!$conexion){
    echo "Error: No se pudo conecta a la base de datos :(" . PHP_EOL;
    echo "errno de depuración: " . mysqli_connect_errno() . PHP_EOL;
    echo "error de depuración: " . mysqli_connect_error() . PHP_EOL;
    exit;
}

echo "Éxito: Se realizó una conexión apropiada a MySQL! " . PHP_EOL;
echo "La base de datos es: " . $database . PHP_EOL; 
echo "Información del host: " . mysqli_get_host_info($conexion) . PHP_EOL;

mysqli_close($conexion);

?>
