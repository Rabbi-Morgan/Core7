<?php

    $client_email = $_POST['email'];
    $message = $_POST['message'];

    $email_from = 'iluobeja92@gmail.com';
    $email_subject = 'New form from client submission';
    $email_body = "Client Email: $client_email.\n".
                    "Client Message: $message.\n";

    $to = "francismobolaji1990@gmailcom";
    $headers="From: $email_from \r\n";
    $headers .= "Reply-To: $visitor_email \r\n";

    mail($to,$email_subject,$email_body,$headers);

    header('Location: index.html');


    ?>
