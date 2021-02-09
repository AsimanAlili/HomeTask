function createNewRow(e) {
  e.preventDefault();
  var name = document.getElementById("name-input").value;
  var surname = document.getElementById("surname-input").value;
  var number = document.querySelectorAll("tbody tr").length + 1;

  document.getElementById(
    "my-table-body"
  ).innerHTML += `<tr><td onclick="replaceElement(event)">
    ${number}
    </td><td onclick="replaceElement(event)">
    ${name}
    </td>
    <td onclick="replaceElement(event)">
    ${surname}
    </td></tr>`;

  document.forms[0].reset();
}

function replaceElement(e) {
  console.log("Works");
  var td = document.createElement("td");
  td.innerHTML = "<input type='text' class='form-control'/>";
  e.target.replaceWith(td);
}

// function createNewRow(e) {
//   e.preventDefault();
//   var name = document.getElementById("name-input").value;
//   var surname = document.getElementById("surname-input").value;
//   var number = document.querySelectorAll("tbody tr").length + 1;

//   var numberTD = document.createElement("td");
//   var nameTD = document.createElement("td");
//   var surnameTD = document.createElement("td");
//   nameTD.innerText = name;
//   surnameTD.innerText = surname;
//   numberTD.innerText = number;

//   var tr = document.createElement("tr");
//   tr.append(numberTD);
//   tr.append(nameTD);
//   tr.append(surnameTD);

//   var bodies = document.getElementById("my-table-body");
//   bodies.append(tr);

//   document.forms[0].reset();
// }
