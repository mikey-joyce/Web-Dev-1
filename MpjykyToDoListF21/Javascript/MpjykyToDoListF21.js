/* References:
        1. https://www.geeksforgeeks.org/how-to-switch-between-multiple-css-stylesheets-using-javascript/
*/

let tasks = 0;

//Start of code used from reference 1
function toggleTheme(){
    var currentTheme = document.getElementsByTagName('link')[1];
    if(currentTheme.getAttribute('href') == '../Styles/MpjykyToDoListF21.css'){
        currentTheme.setAttribute('href', '../Styles/MpjykyToDoListF21-light.css');
        document.getElementById('myTable').className = 'table table-striped';
    }
    else{
        currentTheme.setAttribute('href', '../Styles/MpjykyToDoListF21.css');
        document.getElementById('myTable').className = 'table table-striped table-dark';
    }
}
//end of code used from reference 1

function modifyHeader(){
    let myHeader = window.prompt("Enter new title: ");
    if(myHeader === null){
        return;
    }
    if(myHeader.trim() === ""){
        window.alert("Enter a valid title");
        return;
    }
    $("#mj-header").html(myHeader);
}

function addElements(){
    let submit = document.getElementById('mj-submitButton');
    let table = document.getElementById('myTable');
    
    let titleInput = document.getElementById('mj-title');
    let typeInput = document.getElementById('mj-select');
    let priorityInput = document.getElementById('mj-range');
    let dateInput = document.getElementById('mj-date');
    
    let title = titleInput.value;
    let type = typeInput.value;
    let priority = priorityInput.value;
    let date = dateInput.value;
    
    if(title.trim() === "" || type === "0" || date === ""){
        window.alert("Not all form elements filled out!");
        return;
    }
    
    let myDate = new Date(date);
    if(myDate < new Date()){
        window.alert("Select a current or future date!");
    }
    
    let stars = "";
    
    for(let i = 0; i < priority; i++){
        stars = stars + `<i class="fa fa-star checked"></i>`; 
    }
    
    let template = `<tr>
                          <td scope="row">${title}</td>
                          <td>${type}</td>
                          <td>${myDate}</td>
                          <td>${stars}</td>
                          <td><i class="fa fa-check-circle"></i></td>
                    </tr>`;
    
    table.innerHTML += template;
}

function clearForm(){
    document.getElementById("myForm").reset();
}