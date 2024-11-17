// MARK: START - Landing Page Quiz

var codeOutput = "";

function checkIfBlank() {
  if ($("#helloWorldAns").val().trim() == "") {
    document.getElementById("btnRun").className = "btn waves-effect waves-light btn-large disabled";
    document.getElementById("btnSubmit").className = "btn waves-effect waves-light btn-large disabled";
  } else {
    document.getElementById("btnRun").className = "btn waves-effect waves-light btn-large";
    document.getElementById("btnSubmit").className = "btn waves-effect waves-light btn-large";
  }
}

function run() {
  helloWorldAns = $("#helloWorldAns").val();
  codes = JSON.stringify({
    source:helloWorldAns,
    lang:"python3"
  });
  swal({
    text: "Running for at least 5 seconds...",
    icon: "info"
  });
  //window.alert('Running for at least 5 seconds...');
  $.post("https://pythomy-staging.000webhostapp.com/_pythonapi/curl.php",codes,function(data){
    setTimeout(function(){
      $.getJSON("https://pythomy-staging.000webhostapp.com/_pythonapi/curl2.php?id=" + data.id,function(data){
        if (data.stdout){
          if (data.stderr == "") {
            $("#helloWorldRun").html(data.stdout);
            codeOutput = data.stdout;
          } else {
            $("#helloWorldRun").html(data.stdout + "\n" + data.stderr);
            codeOutput = data.stdout + "\n" + data.stderr;
          }
        } else if (data.stderr) {
          codeOutput = "";
          $("#helloWorldRun").html(data.stderr);
        } else {
          swal({
            text: "There is a problem in running code. Please try again.",
            icon: "error"
          });
        }
        
      });
    },5000);
  });
}

function runSub() {
  helloWorldAns = $("#helloWorldAns").val();
  codes = JSON.stringify({
    source:helloWorldAns,
    lang:"python3"
  });
  swal({
    text: "Running and checking for at least 5 seconds...",
    icon: "info"
  });
  //window.alert('Running and checking for at least 5 seconds...');
  $.post("https://pythomy-staging.000webhostapp.com/_pythonapi/curl.php",codes,function(data){
    setTimeout(function(){
      $.getJSON("https://pythomy-staging.000webhostapp.com/_pythonapi/curl2.php?id=" + data.id,function(data){
        if (data.stdout)
          codeOutput = data.stdout;
        else
          codeOutput = "";
        if (codeOutput == "Hello World!\n") {
          outcome = "Yay! You got it right. Do you want to register now?";
          outcomeIcon = "success";
          localStorage.setItem("result","OK");
        } else {
          outcome = "Cheer up! You may not have it correct today but do not worry, by learning from this application. Someday, you will solve this problem right. Do you want to register now?";
          outcomeIcon = "info";
        }
        displayOptionSweetAlert(outcome, outcomeIcon);
      });
    },5000);
  });
}

    
function submit() {
  document.getElementById("btnSubmit").className = "btn waves-effect waves-light btn-large disabled";
  if (!codeOutput || codeOutput == "") {
    runSub();
  } else {
    var outcome = "";
    var outcomeIcon = "";
    if (codeOutput == "Hello World!\n") {
      outcome = "Yay! You got it right. Do you want to register now?";
      outcomeIcon = "success";
      localStorage.setItem("result","OK");
    } else {
      outcome = "Cheer up! You may not have it correct today but do not worry, by learning from this application. Someday, you will solve this problem right. Do you want to register now?";
      outcomeIcon = "info";
    }
    displayOptionSweetAlert(outcome, outcomeIcon);
  }
}

function displayOptionSweetAlert(outcome, outcomeIcon) {
  swal({
    text: outcome,
    icon: outcomeIcon,
    buttons: {
      cancel: {
        text: "No",
        value: null,
        visible: true,
        className: "noButton",
        closeModal: true
      },
      confirm: {
        text: "Yes",
        value: true,
        visible: true,
        className: "yesButton",
        closeModal: true
      }
    }
  });
  $(".yesButton").click(function(){
    yes();
  });
  document.getElementById("btnSubmit").className = "btn waves-effect waves-light btn-large";
}

function yes() {
  $("#registrationForm").modal("open");
}

function no() {
  $("#ifRegister").modal("close");
  $("#lesson").modal("close");
  localStorage.removeItem("result");
}
// MARK: END - Landing Page Quiz