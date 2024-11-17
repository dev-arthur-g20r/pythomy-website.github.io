var baseURL = "https://pythomy-staging.000webhostapp.com";

function runCode(code, querySelector) {

	swal({
		text: "Running for at least 5 seconds.",
		icon: "info"
	});
	let networkService = new XMLHttpRequest();
	let runURL = baseURL + "/_pythonapi/curl.php";

	let sourceCode = JSON.stringify({
		source: code,
		lang: "python3"
	});

	networkService.responseType = "json";

	networkService.onreadystatechange = function(){
		if (this.readyState == 4) {
			let parentResponse = this.response;
			let codeResponseKey = parentResponse.id;
			setTimeout(function(){
				let otherNetworkService = new XMLHttpRequest();
				let submitURL = baseURL + "/_pythonapi/curl2.php?id=" + codeResponseKey;

				otherNetworkService.responseType = "json";
				otherNetworkService.onreadystatechange = function(){
					if (this.readyState == 4) {
						let childResponse = this.response;
						let output = childResponse.stdout;
						let error = childResponse.stderr;
						let result = "";

						if (output) {
							if (error) {
								result = output + "\n" + error;
							} else {
								result = output;
							}
						} else if (error) {
							result = error;
						} else {
							swal({
								text: "There is a problem in running code. Please try again.",
								icon: "error"
							});
						}

						document.querySelector(querySelector).value = result;
					}
				};

				otherNetworkService.open("GET", submitURL, true);
				otherNetworkService.send();
			}, 5000);
		}
	};

	networkService.open("POST", runURL, true);
	networkService.send(sourceCode);
}