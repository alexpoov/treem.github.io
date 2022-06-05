---
title: treem
layout: template
filename: index.md
--- 
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <title>treem Service</title>
        <meta name="description" content="Save trees, recive gifts!">
        <link rel="stylesheet" href="styles.css">
        <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.0/css/bootstrap.min.css" integrity="sha256-/ykJw/wDxMa0AQhHDYfuMEwVb4JHMx9h4jD4XvHqVzU=" crossorigin="anonymous" /> -->
        
        <link rel="apple-touch-icon" sizes="180x180" href="favicons/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="favicons/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="favicons/favicon-16x16.png">
        <link rel="manifest" href="favicons/site.webmanifest">
        <link rel="mask-icon" href="favicons/safari-pinned-tab.svg" color="#5bbad5">
        <link rel="shortcut icon" href="favicons/favicon.ico">
        <meta name="msapplication-TileColor" content="#da532c">
        <meta name="msapplication-config" content="favicons/browserconfig.xml">
        <meta name="theme-color" content="#ffffff">
    </head>

    <body>
        <main>
            <section class="welcome">
                <div>
                    <img class="icon_img" src="img/icon.png" alt="treem icon">
                </div>
                <div class="catchphrase">
                    <h2>Заботиться о природе. Просто.</h2>
                </div>
                <form id="loggining" method="POST" action="http://localhost:8000/get_session_token/">
                    <fieldset>
                        <div>
                            <input class = "treemlogin field" type="text" id="trlogin" placeholder="Логин" required><br>
                        </div>
                        <div>
                            <input class = "treempassword field" type="password" id="trpassword" placeholder="Пароль" required><br>   
                        </div>
                        <div class="bline1">
                            <a href="https://alexpoov.github.io/treem_pages/registration.html" class="button btn btn-succes" type="submit" id="sign_up">Регистрация</a> 
                            <input class="button btn btn-succes" type="submit" id="log_in" value="Вход">
                        </div>
                        <div class="bline2">    
                            <input class="button btn btn-secondary" type="submit" id="get_info" name="get_info" value="Узнать больше о сервисе">
                        </div>
                    </fieldset>
                </form>
            </section>
        </main>

        <footer class="footer">
            <p><u>Language: русский</u></p>
            <p>Egor&Sasha production &hearts;</p>
        </footer>

        <script async src="../static/js/main.js"></script>
        
    </body>
</html>