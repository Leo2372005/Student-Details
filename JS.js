function subm() {
  var Name = document.getElementById("name").value.trim();
  var Std = document.getElementById("Std").value.trim();
  var Course = document.getElementById("Co").value.trim();
  var Em = document.getElementById("email").value.trim();
  var Mo = document.getElementById("Mobile").value.trim();

  var Row = document.createElement("tr");
  var Col_1 = document.createElement("td");
  var Col_2 = document.createElement("td");
  var Col_3 = document.createElement("td");
  var Col_4 = document.createElement("td");
  var Col_5 = document.createElement("td");
  var Col_6 = document.createElement("button");

  Col_1.textContent = Name;
  Col_2.textContent = Std;
  Col_3.textContent = Course;
  Col_4.textContent = Em;
  Col_5.textContent = Mo;
  Col_6.innerHTML = "<button id='Del' onclick='del(event)'>Delete</button>";

  Row.appendChild(Col_1);
  Row.appendChild(Col_2);
  Row.appendChild(Col_3);
  Row.appendChild(Col_4);
  Row.appendChild(Col_5);
  Row.appendChild(Col_6);

  var Table = document.getElementById("table_2");
  if (Name === "" && Std === "" && Course === "" && Em === "" && Mo === "") {
    alert("Please Enter the Data");
  }
  if (Name !== "" && Std !== "" && Course !== "" && Em !== "" && Mo !== "") {
    Table.appendChild(Row);
    var Name = (document.getElementById("name").value = "");
    var Std = (document.getElementById("Std").value = "");
    var Course = (document.getElementById("Co").value = "");
    var Em = (document.getElementById("email").value = "");
    var Mo = (document.getElementById("Mobile").value = "");
  }
}
function del(event) {
  var row = event.target.closest("tr");
  row.remove();
}
