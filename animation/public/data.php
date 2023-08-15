<?php
$server_name = 'localhost';
$username = 'root';
$password = 'O48079scar';
$db = 'sql_mysql2';

$conn = new mysqli($server_name, $username, $password, $db);

if (!$conn) {
    echo "Connect faild";
}
