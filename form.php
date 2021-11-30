
<?php
 
  
    $name = $_REQUEST['name'];
    $email = $_REQUEST['email'];
    $subject = $_REQUEST['subject'];
    $message = $_REQUEST['message'];


    if(empty($name) || (empty($email) || empty($subject) || empty($message)){
        echo 'please fill the all fields'
    }
    else{
        mail('emonhowlader1997@gmail.com', 'amr message', $message, 'from : $name <$email>' );
        echo "<script type='text/javascript> ' alert('your message send successfully');
        window.history.log(-1)
        </script> ";
    }

 
?>
