document.forms[0].onsubmit = function (e) {
  e.preventDefault();
  var surname = document.getElementsByName("surname")[0].value;
  var name = document.getElementsByName("name")[0].value;
  document.forms[0][0].value = "";
  document.forms[0][1].value = "";
  var tr = document.createElement("tr");
  //   var tdname = document.createElement("td");
  //   tdname.innerText = name;
  //   var tdsurname = document.createElement("td");
  //   tdsurname.innerText = surname;
  //   var number = document.createElement("td");
  //   number.innerText = document.querySelectorAll("table tbody tr").length + 1;
  //   tr.append(number);
  //   tr.append(tdname);
  //   tr.append(tdsurname);
  var number = document.querySelectorAll("table tbody tr").length + 1;
  tr.innerHTML = `<td onclick="clickFunc(event)">${number}</td><td onclick="clickFunc(event)">${name}</td><td onclick="clickFunc(event)">${surname}</td>`;
  var tbody = document.querySelector("table tbody");
  tbody.append(tr);
};

function clickFunc(e) {
  console.log(e);
  console.log("Salam");
}

var tds = document.getElementsByTagName("td");
for (let i = 0; i < tds.length; i++) {
  tds[i].addEventListener("click", function () {
    console.log("Hello");
  });
}
