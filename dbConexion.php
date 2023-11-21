<?php
//Configuracion de la base
function conn (){
  $hostname = "localhost";
  $usuariodb = "root";
  $passwordb = "";
  $dbname = "dbposgrado";

  //Genera conexion
  $conectar = mysqli_connect($hostname,$usuariodb,$passwordb,$dbname);
  
  if (!$conectar) {
    die("Error de conexión: " . mysqli_connect_error() . " Consulte con el administrador del sistema");
  }
  
  echo "Conexión exitosa a la base de datos.";
  
  return $conectar;
}
?>
