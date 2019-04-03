
var tampilData = () => {
  var a = 1;
  var buatTabel = "";
  planets.forEach(data =>{
    buatTabel += "<tr>"
      +"<th scope='row'>"+ a++ +"</th>"//no
      +"<td>"+ data.name +"</td>"//nama
      +"<td>"+ data.rotation_period +"</td>"//periode rotasi
      +"<td>"+ data.gravity +"</td>"//gravitasi
      +"<td>"+ data.terrain +"</td>"//medan
      +"<td>"+ data.population +"</td>"//populasi
      +"<td>"+ data.climate +"</td>"//iklim
      +"</tr>";
  });
document.getElementById('datarow').innerHTML += buatTabel;
}
tampilData();

function filterFunction() {
  var input, filter, table, tr, td, i, textValue;
  input = document.getElementById("search");
  filter = input.value.toUpperCase();
  table = document.getElementById("datatable");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];

    if (td) {
      textValue = td.textContent || td.innerText;
      if (textValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
