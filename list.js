//..........................login fn...................//

function login(callback) {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username == "admin" && password == "12345")
   {
    alert("Correct username and password");
    callback();
    // window.open("home.html");
  }
   else {
    alert("Incorrect username or password");
  }
}

// .............home page...................//
function callback()
{
  window.open("home.html");
}
// ...................home page end....................
// login(admin,12345,home);

// ........................api_function.............................//
function ajax() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(this.responseText);
      var output = "";

      for (var i = 0; i < response.length; i++) {
        if (response[i].completed!= true)
          output +=
            '<ol class="fs-5 Segoe UI d-flex "><input onclick="myFunction(this);" id="chkbx" type="checkbox" checked disabled>' +
            "&nbsp&nbsp&nbsp" +
            response[i].title +
            "</ol>";
        else
          output +=
            '<ol class="text-danger fs-5 Segoe UI d-flex "><input onclick="myFunction(this);" id="chkbx" type="checkbox" >'+
            "&nbsp&nbsp&nbsp" +
            response[i].title +
            "</ol>";
      }
      // ...............................//
      document.getElementById("demo").innerHTML = output;
    }
  };
  xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
  xhttp.send();
}
// .......................................

// Alert on count 5
var checked = 0;
// chkbx=document.getElementById("chkbx1");
function myFunction(chkbx) {
  if (chkbx.checked == true) {
    checked++;
    if (checked == 5) {
      alert("Congrats!!! 5 Tasks has been Succesfully Completed.");
    }
  } else {
    checked--;
    if (checked == 5) {
      alert("Congrats!!! 5 Tasks has been Succesfully Completed.");
    }
  }
}
