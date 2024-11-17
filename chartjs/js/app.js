$( document ).ready(function(){
    $(".button-collapse").sideNav();    
    $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrainWidth: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: false, // Displays dropdown below the button
      alignment: 'right', // Displays dropdown with edge aligned to the left of button
      stopPropagation: false // Stops event propagation
    });
  $('select').material_select();


  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15, // Creates a dropdown of 15 years to control year,
    today: 'Today',
    clear: 'Clear',
    close: 'Ok',
    closeOnSelect: false // Close upon selecting a date,
  });
})




$(document).ready(function(){
	$.ajax({
		url: "http://localhost/ohmars/chartjs/include/student_data_array.php",
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
                            'Daily Sales(₱)',
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
            var ctx = $("#bar-chart");
            var myBarChart  = new Chart(ctx, {
                type: 'bar'
                , data: chartdata,
                options:{
                    labelColor: 'rgba(255,255,255,1)'
                }
            });
        },
		error: function(data) {
			console.log(data);
		}
	});
});