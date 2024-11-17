<?php
//setting to header to json
header('Allow-Access-Control-Origin: *');
header('Content-Type: application/json');

//Connection
require_once 'connect.php';
date_default_timezone_set('Asia/Kuala_Lumpur');
$timezone = date_default_timezone_get();
$year = date('Y',time());
      //query to get data from table
      $sql = "SELECT tblcalendar.fldMonthNo AS firstname,
       IFNULL(SUM(tblrecords.fldTotal),0) AS total_price, MONTHNAME(STR_TO_DATE(tblcalendar.fldMonthNo, '%m')) AS monthname
FROM tblrecords RIGHT JOIN tblcalendar ON (MONTH(tblrecords.fldDate) = tblcalendar.fldMonthNo)
WHERE (tblcalendar.fldMonthNo BETWEEN (SELECT MIN(fldMonthNo) FROM tblcalendar) AND (SELECT MAX(fldMonthNo) FROM tblcalendar))
GROUP BY firstname";
//SELECT SUM(fld_loanamt) as total FROM tbl_transaction WHERE fld_loantype = 'Personal Loan'

      /*SELECT tblcalendar.fldMonthNo AS firstname,
       IFNULL(SUM(tblrecords.fldTotal),0) AS total_price
FROM tblrecords RIGHT JOIN tblcalendar ON (MONTH(tblrecords.fldDate) = tblcalendar.fldMonthNo)
WHERE (tblcalendar.fldMonthNo BETWEEN (SELECT MIN(fldMonthNo) FROM tblcalendar) AND (SELECT MAX(fldMonthNo) FROM tblcalendar))
GROUP BY firstname*/

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
