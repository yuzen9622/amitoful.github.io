<!DOCTYPE html>
<html lang="en">

<head>
    <link rel="stylesheet" href="log.css" />
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>login</title>
</head>

<body>
    <div class="sign">
        <h2>Login</h2>
        <form action="index.php" method="post">
            <div class="user">
                <input type="text" name="name" id="username" value="">
                <label for="">username</label>
            </div>
            <div class="user">
                <input type="password" name="password" id="password">
                <label for="">password</label>
            </div>
            <button type="submit">LOGIN
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <p class="error"><?php if (empty($_GET['error'])) {
                                    echo "";
                                } else {
                                    echo $_GET['error'];
                                } ?></p>
        </form>

    </div>
</body>

</html>