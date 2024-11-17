<!DOCTYPE html>
<html lang="en">
<?php
session_start();
if (!isset($_SESSION['user']))
{
	header("Location: ../cuslogin.php");
	exit;
}
?>
<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Home</title>

    <!-- Bootstrap Core CSS -->
    <link href="../startbts/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <!-- MetisMenu CSS -->
    <link href="../startbts/vendor/metisMenu/metisMenu.min.css" rel="stylesheet">

    <!-- DataTables CSS -->
    <link href="../startbts/vendor/datatables-plugins/dataTables.bootstrap.css" rel="stylesheet">

    <!-- DataTables Responsive CSS -->
    <link href="../startbts/vendor/datatables-responsive/dataTables.responsive.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="../startbts/dist/css/sb-admin-2.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="../startbts/vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">

     <!-- Morris Charts CSS -->
    <link href="../startbts/vendor/morrisjs/morris.css" rel="stylesheet">
 

  <style type="text/css">
    a.d{ 
  color: white!important;
  text-decoration: none;
   margin-top: 26px;
}
.sidebar ul li a.active {
    background-color: #5cb85c;
  color: #ffffff !important;
}   

    a.a{ 
  color: white!important;
  text-decoration: none;
    font-size: 40px;
        margin-top: 22px;
        font-family: Calibri;

}
.navbar-static-top {
      background-color: #27ae60;
}

.pagination>.active>a, .pagination>.active>a:focus, .pagination>.active>a:hover, .pagination>.active>span, .pagination>.active>span:focus, .pagination>.active>span:hover {
    z-index: 3;
    color: #3c763d;
    cursor: default;
    background-color: #fbfbfb;
    border-color: #3c763d;
}
.btn{
    color: #fff !important; 
}
body{
    font-size: 16px;
        color: #000;
}
.navbar {
    border-radius: 0;
    border-top-left-radius: 99px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 99px;
}
.sidebar {

    margin-top: 100px;
}
@media print {
  #printPageButton {
    display: none;
  }
}
</style>
</head>



<body>
    <div id="wrapper">
  
        <!-- Navigation -->
        <nav class="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0">
            <div class="navbar-header" >            
         <img  class="navbar-header" src="../bootstrap/img/logo.svg" style="width:100px;height:100px;" >
  
                 <a class="navbar-header a" href="adminhome.php"> &nbsp Olongapo Multi-Purpose Cooperative</a>
             
            </div>
            <!-- /.navbar-header -->

            <ul class="nav navbar-top-links navbar-right">
                        <!-- /.dropdown -->
                 <li><a class="d" href="../adminlogout.php"><i class="fa fa-sign-out fa-fw d"></i> LOGOUT</a></li>
               
                <!-- /.dropdown -->
            </ul>
            <!-- /.navbar-top-links -->

            <div class="navbar-default sidebar" role="navigation">
                <div class="sidebar-nav navbar-collapse">
                    <ul class="nav" id="side-menu">
                          <li>    
                            <a href="../adminhome.php"><i class="fa fa-user fa-fw"></i> Evaluate Applicant</a>
                        </li>
                        <li>
                            <a href="../appointmentcheck.php"><i class="fa fa-calendar   fa-fw"></i> Appointments</a>
                        </li>
                           <li>    
                            <a href="../searchloanid.php"><i class="fa fa-money fa-fw"></i> Payment</a>
                        </li>
                        <li>
                            <a href="../selectclients.php"><i class="fa fa-table  fa-fw"></i> Clients </a>
                        </li>
                        <li>
                            <a href="../selecttransactions.php"><i class="fa fa-tasks fa-fw"></i> Transactions</a>
                        </li>
                            <li>
                            <a href="../selectloanaccts.php"><i class="fa fa-navicon fa-fw"></i> Loan Accounts</a>
                        </li>
                            <li>
                            <a href="../report.php"><i class="fa fa-edit   fa-fw"></i> Reports</a>
                        </li>
                              <li>
                            <a href="../tblreceipts.php"><i class="fa  fa-file-text-o   fa-fw"></i> Receipts</a>
                        </li>
                          <li> 
                            <a href="../exportform.php"><i class="fa fa-save   fa-fw"></i> System Backup</a>
                        </li>
                       </ul>
                </div>
                <!-- /.sidebar-collapse -->
            </div>
            <!-- /.navbar-static-side -->
        </nav> 
  
    <div id="page-wrapper">
	<BR>
		  <div class="widget-body">

	  <center>
            <div class="container-fluid">
			 <div class="row-fluid">
                  <div class="span4">
                                  <center>
                                  <h4><img src="../bootstrap/img/logo.jpg" height= "150" width= "150"></h4>
                                  <h6>#32-20th Place, West Bajac-Bajac, Olongapo City </h6>
                                  <h5>DATA ANALYTICS</h5>
								</center>
                                <br></br>
                         
                                 </div>
                                               
                                       <br>
       <canvas id="mycanvas4" width="100" height="50"></canvas>
    <br><br><br>                                      
<table>
<tr>
	<th>Loan Type</th>
	<th>Number of Applicants</th>
</tr>
<?php
include "../config.php";
$psql = "SELECT COUNT(*) FROM tbl_transaction WHERE fld_loantype = 'Personal Loan'";
$pres = mysqli_query($conn,$psql);
while ($prow = mysqli_fetch_array($pres))
	{$papp = $prow[0];}

echo "<tr>";
echo "<td>Personal Loan</td>";
echo "<td>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp".$papp."</td>";
echo "</tr>";
$hsql = "SELECT COUNT(*) FROM tbl_transaction WHERE fld_loantype = 'House Loan'";
$hres = mysqli_query($conn,$hsql);
while ($hrow = mysqli_fetch_array($hres))
	{$happ = $hrow[0];}
echo "<tr>";
echo "<td>House Loan</td>";
echo "<td>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp".$happ."</td>";
echo "</tr>";
$csql = "SELECT COUNT(*) FROM tbl_transaction WHERE fld_loantype = 'Car Loan'";
$cres = mysqli_query($conn,$csql);
while ($crow = mysqli_fetch_array($cres))
	{$capp = $crow[0];}

echo "<tr>";
echo "<td>Car Loan</td>";
echo "<td>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp".$capp."</td>";
echo "</tr>";
$bsql = "SELECT COUNT(*) FROM tbl_transaction WHERE fld_loantype = 'Business Loan'";
$bres = mysqli_query($conn,$bsql);
while ($brow = mysqli_fetch_array($bres))
	{$bapp = $brow[0];}

echo "<tr>";
echo "<td>Business Loan</td>";
echo "<td>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp".$bapp."</td>";
echo "</tr>";

?>
</table>
                  <br><br><br>
                 <center> <button class="btn blue"><a onclick="javascript:window.print();" id="printPageButton">PRINT <i class="icon-print icon-big"></i></a></button></center>
            </div><!-- End of container -->
		</div>
            <!-- Credits -->
     
                </div></div></div>  
            </div>
      </main>

      <!-- JS External -->
      <script type="text/javascript" src="lib/materialize/js/jquery.min.js"></script>
      <script type="text/javascript" src="lib/materialize/js/materialize.min.js"></script>
      <script type="text/javascript" src="lib/chartjs/Chart.min.js"></script>
      <script type="text/javascript" src="js/get_studentdata.js"></script>
      <script type="text/javascript" src="js/get_studentdata2.js"></script>
      <script type="text/javascript" src="js/get_studentdata3.js"></script>
      <script type="text/javascript" src="js/get_studentdata4.js"></script>
      <script type="text/javascript" src="js/get_studentdata5.js"></script>
      <script type="text/javascript" src="js/get_studentdata6.js"></script>
      <script type="text/javascript" src="js/get_studentdata7.js"></script>
      <script type="text/javascript" src="js/initialize.js"></script>
        <script src="../startbts/vendor/jquery/jquery.min.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="../startbts/vendor/bootstrap/js/bootstrap.min.js"></script>

    <!-- Metis Menu Plugin JavaScript -->
    <script src="../startbts/vendor/metisMenu/metisMenu.min.js"></script>

    <!-- DataTables JavaScript -->
    <script src="../startbts/vendor/datatables/js/jquery.dataTables.min.js"></script>
    <script src="../startbts/vendor/datatables-plugins/dataTables.bootstrap.min.js"></script>
    <script src="../startbts/vendor/datatables-responsive/dataTables.responsive.js"></script>
  
    <!-- Custom Theme JavaScript -->
    <script src="../startbts/dist/js/sb-admin-2.js"></script>

    <!-- Page-Level Demo Scripts - Tables - Use for reference -->
    <script>
    $(document).ready(function() {
        $('#dataTables-example').DataTable({
            responsive: true
        });
    });
    </script>
</body>
</html>
