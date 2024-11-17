<?php
      define("servername", "localhost");
      define("username", "root");
      define("password", "");
      define("dbname", "db_playts");

      $conn = new mysqli(servername, username, password, dbname);

      // Check connection
      if ($conn->connect_error) {
          die("Connection failed: " . $conn->connect_error);
      }
?>
