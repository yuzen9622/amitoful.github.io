<?php
include "data.php";
if ((isset($_POST['name'])) && isset($_POST['password'])) {
    function validata($data)
    {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }
    $name = validata($_POST['name']);
    $password = validata($_POST['password']);


    if (empty($name)) {
        header(("Location:login.php?error=Enter Username"));
        exit();
    } else if (empty($password)) {
        header(("Location:login.php?error=Enter Password"));
        exit();
    } else {
        $sql = "select * from account where user_name = '$name' and password = '$password'";
        $result = mysqli_query($conn, $sql);
        if (mysqli_num_rows($result) === 1) {
            $row = mysqli_fetch_assoc($result);
            if ($row['user_name'] === $name && $row['password'] === $password);
            echo "";
        } else {
            header("Location: login.php?error=Icorect User name or password");
        }
    }
} else {
    header("Location: login.php?error");
    exit();
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <!---->
    <meta charset="UTF-8">
    <link rel="stylesheet" href="index.css">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Animation</title>

</head>

<body>
    <div class="box">
        <div class="ring"></div>
        <div class="ring"></div>
        <div class="ring"></div>
        <p>Welcome</p>
    </div>
    <div class="ul">
        <ul>
            <div class="name">
                <li>
                    <p>HI,<?php $user = $_POST['name'];
                            echo $user; ?></p>
                </li>
            </div>
            <li>
                <a href="../念佛堂/main/main.html">念佛堂</a>
            </li>
            <li>
                <a href="../傳說對決/main/main.html">傳說對決</a>
            </li>

            <div class="logout">
                <li>
                    <a href="../public/login.php">登出</a>
                </li>
            </div>
        </ul>
    </div>

</body>

</html>