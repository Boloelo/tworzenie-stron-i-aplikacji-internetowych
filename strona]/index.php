<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formularz</title>
    <link rel="stylesheet" href="styles.css">
    <script src="script.js" defer></script>
</head>
<body >
<?php
 $servername = "localhost";
 $username = "paszport";
 $password = "paszport2024";
 $database = "paszport";

 $conn = new mysqli($servername, $username, $password, $database);

 if ($conn) {
     echo 'Połączono z bazą danych ' . $database;
 } else {
     echo 'Połączenie z bazą danych nie powiodło się. ' . mysqli_connect_error();
 }
 ?>
    <form action="index.php" method="post" onsubmit="return Funkcja_walidacja_formularz();">
        <table>
            <tr>
                <td><label for="pesel">PESEL:</label></td>
                <td><input type="text" id="pesel" name="pesel"></td>
            </tr>
            <tr>
                <td><label for="imie">Imię:</label></td>
                <td><input type="text" id="imie" name="imie"></td>
            </tr>
            <tr>
                <td><label for="nazwisko">Nazwisko:</label></td>
                <td><input type="text" id="nazwisko" name="nazwisko"></td>
            </tr>
            <tr>
                <td colspan="2">
                    <fieldset>
                        <legend>Kolor oczu</legend>
                        <div>
                            <input type="radio" id="niebieskie" name="kolor_oczu" value="niebieskie">
                            <label for="niebieskie">Niebieskie</label>
                        </div>
                        <div>
                            <input type="radio" id="zielone" name="kolor_oczu" value="zielone">
                            <label for="zielone">Zielone</label>
                        </div>
                        <div>
                            <input type="radio" id="piwne" name="kolor_oczu" value="piwne">
                            <label for="piwne">Piwne</label>
                        </div>
                    </fieldset>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <button type="submit">Zapisz</button>
                </td>
            </tr>
        </table>
    </form>

</body>
</html>
