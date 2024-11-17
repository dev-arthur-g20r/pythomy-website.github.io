<?php
//setting to header to json
header('Content-Type: application/json');

//Connection
require_once 'connect.php';

      //query to get data from table
      $sql = sprintf("SELECT SUBSTRING(fldDate,1,4) as firstname, SUM(fldTotal) as total_price FROM tblrecords WHERE SUBSTRING(fldDate,1,4) = SUBSTRING(fldDate,1,4) GROUP BY SUBSTRING(fldDate,1,4) ORDER BY SUBSTRING(fldDate,1,4) DESC");
//SELECT SUM(fld_loanamt) as total FROM tbl_transaction WHERE fld_loantype = 'Personal Loan'
      //execute query
      $result = $conn->query($sql);

      //loop through the returned data
      $data = array();
      foreach ($result as $row){
          $data[] = $row;
      }

      //from memory associated with result
      $result->close();

      //close connection
      $conn->close();

//now print data
print json_encode($data);
?>
