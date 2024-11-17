$(document).ready(function(){
	$.ajax({
		url: "http://localhost/_finance/chartjs/include/monthly_sales.php",
		method: "GET",
		success: function(data) {
			console.log(data);
			var firstname = [];
			var total_price = [];

			console.log(data);
            var firstname = [];
            var total_price = [];
            for (var i in data) {
                firstname.push(data[i].firstname);
                total_price.push(data[i].total_price);
            }
            var chartdata = {
                labels: firstname
                , datasets: [
                    {
                        label: [
                            'Monthly Sales(₱)',
                        ],
                        backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
                        borderWidth: 2,
                        data: total_price
                    }
                ]
            };
            var ctx = $("#monthly-bar-chart");
            var myBarChart  = new Chart(ctx, {
                responsive: true,
                type: 'bar'

                , data: chartdata,
                options:{
/*                    animation: false,*/
                    labelColor: 'rgba(255,255,255,1)'
                        
                      // Edit: correction typo: from 'animated' to 'animation'
                }
            });
        },
/*		error: function(data) {
			console.log(data);
		}*/

	});
    $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrainWidth: false, // Does not change width of dropdown to that of the activator
      hover: false, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: false, // Displays dropdown below the button
      alignment: 'right', // Displays dropdown with edge aligned to the left of button
      stopPropagation: false // Stops event propagation
    });

    $(".button-collapse").sideNav();




});