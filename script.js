const sheetId = "1xSPdXqqipdbDJ9Seri0dKnhMPA8wT5B7U3Ev91Ea5Lc";
const sheetName = encodeURIComponent("2025-05-05");
const sheetURL = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&sheet=${sheetName}`;
const test = $('#test')

$.ajax({
  type: "GET",
  url: sheetURL,
  dataType: "text",
  success: function (response) {
    console.log(response);
    // 'data' is an Array of Objects
    // ADD YOUR CODE HERE
    for(let x = 0; x < response.length; x++){
      test.append("<p>new</p>");
    }
  },
});
