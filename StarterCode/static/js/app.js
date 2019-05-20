// from data.js
var alien_data = data;
// console.log(data, 'data')
// YOUR CODE HERE!
var tbody = d3.select("tbody");

var submit = $("#filter-btn");

submit.on("click", function(event) {
    event.preventDefault();

    var inputValue = $("#datetime").val().trim();
    
    // console.log(inputValue);
    // console.log(alien_data);
    
    var filteredData = alien_data.filter(x => x.datetime === inputValue);
    
    renderTable(filteredData);
    

});
function renderTable (data){
    // tbody = ""
    // tbody = d3.select("tbody");
    tbody.html("")
    data.forEach(function (alien_data) {

        var row = tbody.append("tr");
        
        Object.entries(alien_data).forEach(function ([key, value]) {
            // console.log(key, value);
            var cell = tbody.append("td");
            cell.text(value);
        });
    
    });

};
renderTable(alien_data);
