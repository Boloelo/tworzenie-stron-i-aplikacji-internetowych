

<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Konfigurator wyposażenia</title>
    <link rel="stylesheet" href="style.css">
    
</head>
<body>
   
    <header>
        <img src="baner.jpg" alt="baner">
    </header>
    <hr>

    <div id="db-connection-test">
        <?php
        
        $servername = "localhost";
        $username = "salon";
        $password = "salon";
        $dbname = "salon";

        
        $conn = new mysqli($servername, $username, $password, $dbname);

        
        if ($conn->connect_error) {
            die("Błąd połączenia: " . $conn->connect_error);
        } 
        
        ?>
    </div>
    
    <main>
       
        <section class="lewy">
            <hr>
            <h2>Kolor</h2>
            <form id="kolorForm">
                <select id="kolor">
                    <option value="szary" selected>Szary</option>
                    <option value="czerwony">Czerwony</option>
                    <option value="niebieski">Niebieski</option>
                    <option value="zielony">Zielony</option>
                    <option value="zolty">Żółty</option>
                </select>
                <br>
            </form>
            <h2>Model</h2>
            <form id="modelForm" method="POST" action="">
                <select name="model">
                   
                </select>
            </form>
            <hr>
        </section>

        
        <section class="prawy">
            <h1>Twój samochód</h1>
            <img id="samochod" src="samochodszary.png" alt="foto">
            <hr>
            <h1>Model</h1>
            
            <h1>Wyposażenie dodatkowe</h1>
            
        </section>
    </main>

    <footer>
        <p>Autor strony: <em>Oskar Wlodarski</em></p>
    </footer>

   
</body>
</html>
