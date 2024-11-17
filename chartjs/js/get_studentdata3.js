$(document).ready(function () {
    $.ajax({
        url: "http://localhost/chartjs/include/student_data_array.php"
        , method: "GET"
        , success: function (data) {
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
                            'Category Name',
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
            var ctx = $("#mycanvas3");
            var myBarChart  = new Chart(ctx, {
                type: 'pie'
                , data: chartdata,
                options:{
                    labelColor: 'rgba(255,255,255,1)'
                }
            });
        }
        , error: function (data) {
            console.log(data);
        }
    });
});
