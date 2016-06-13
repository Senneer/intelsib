<?php
  $name = $_POST['name'];
  $phone = $_POST['phone'];
  $email = $_POST['email'];

  header('Content-Type: application/json');

  function isAdmin() {
    $return['formdata'] = $_POST;
    $return['status'] = false;
    if ($_POST['email'] == 'admin@admin.ru') {
      $return['status'] = true;
    }
    echo json_encode($return);
  }
  isAdmin();
?>