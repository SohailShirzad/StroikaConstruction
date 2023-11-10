<?php


    $email = $_POST['email'];
    $phone = $_POST['tel'];
    $message = $_POST['description'];

    
    $subject ="Message form a client (Website)";

    $mailHeader = "From: ".$email. \r\n"Phone: ".$phone. \r\n"Message: ".$message.; 


    $to = "info@stroika.co.uk";
 
    

    mail($to, $subject, $mailHeader) or die ("Error!");


    echo'

    <html lang="en-GB">
    
        <head>
    
        <meta charset="UTF-8">
        <meta name="description" content="At Stroika we adhere to a strict Contractor Code of Ethics 
        that starts with a comprehensive cost breakdown and itemized estimate. Our commitment to 
        transparency continues through to the final inspection before the last payment is made. 
        We take pride in delivering projects that not only meet but exceed your expectations.
    
        We offer:
        House Extensions
        Home Renovations
        Refurbishments
        Loft conversions
        All other general construction services">
        <meta name="keywords" content="construction, building, builder, builder near me, top builders near me, 
        house builder, construction companies near me, construction companies, construction companies in the UK, 
        house repair builder, house repair, builders for extension, extend my house, plasterers near me, 
        painters near me, carpenters near me, loft conversion, loft conversion builders">
        <meta name ="author" content="Sohail Shirzad">
        <meta name ="viewport" content="width= device-width, initial-scale=1.0">
        
        <link rel="stylesheet" href="formAction.css">
        
        <title>Stroika building services</title>
    </head>
    
    <body>
    
        <div class="fromActionFeedback">
        
            <h1>Thank you, we have recieved your message, we will get back to you shortly.</h1>
    
            <p class"back"> Go back to the <a href ="index.html">homepage</a></p>
    
    
        </div>
    
    </body>
    
    </html>
    
    

    ';

?>