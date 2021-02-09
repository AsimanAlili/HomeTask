document.forms[0].onsubmit = function (e) {
  var errorBody = document.getElementById("error-span");
  errorBody.innerText = "";
  e.preventDefault();
  var text = document.getElementsByClassName("form-control")[0].value;
  if (text.length == 0) {
    var errorBody = document.getElementById("error-span");
    errorBody.innerText = "Error!Please insert the name";
  }
  var list = document.createElement("li");
  var ul = document.getElementById("myList");
  var lists = document.querySelectorAll("#myList li");
  if (text.length != 0) {
    list.innerText = text;
    ul.appendChild(list);
  }

  document.forms[0].reset();
};
document.forms[0].onkeydown = function () {
  var text = document.getElementsByClassName("form-control")[0].value;
  var errorBody = document.getElementById("error-span");

  if (text.length >= 0) {
    errorBody.innerText = "";
  } else {
    var errorBody = document.getElementById("error-span");
  }
};
