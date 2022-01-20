/* References:
        1. https://www.geeksforgeeks.org/how-to-create-a-form-dynamically-with-the-javascript/
*/

var menu = ['Name', 'Hamming Number', 'Password Simulation', 'List Creator', 'Cylinder Surface Area'];

function loadForm(selectObject){
    let location = document.getElementById("dynamicForm");

    //if there is a previous form already present, then delete said form
    if(!(location.innerHTML === "")){
        $("#dynamicForm").empty();
    }

    //Start of code from reference 1
    var myForm = document.createElement("form");
    myForm.id = "mj-jsForm";
    //End of code from reference 1

    if(selectObject === menu[0]){
        myForm.setAttribute("method", "get");
        myForm.setAttribute("action", "name.php");

        var fName = document.createElement("input");
        fName.setAttribute("type", "text");
        fName.setAttribute("placeholder", "First Name");
        fName.className = "form-control mj-select mj-textBox";
        fName.setAttribute("name", "fName");

        var lName = document.createElement("input");
        lName.setAttribute("type", "text");
        lName.setAttribute("placeholder", "Last Name");
        lName.className = "form-control mj-select mj-textBox";
        lName.setAttribute("name", "lName");

        var clear = clearButton();
        var submit = submitButton();

        myForm.append(fName);
        myForm.append(lName);
        myForm.append(clear);
        myForm.append(submit);

        location.appendChild(myForm);
    }
    else if(selectObject === menu[1]){
        myForm.setAttribute("method", "get");
        myForm.setAttribute("action", "hamNum.php");

        var ham = document.createElement("input");
        ham.setAttribute("type", "text");
        ham.setAttribute("placeholder", "Enter a Number");
        ham.className = "form-control mj-select mj-textBox";
        ham.setAttribute("name", "ham");

        var clear = clearButton();
        var submit = submitButton();

        myForm.append(ham);
        myForm.append(clear);
        myForm.append(submit);

        location.appendChild(myForm);
    }
    else if(selectObject === menu[2]){
        myForm.setAttribute("method", "post");
        myForm.setAttribute("action", "login.php");

        var username = document.createElement("input");
        username.setAttribute("type", "text");
        username.setAttribute("placeholder", "Username");
        username.className = "form-control mj-select mj-textBox";
        username.setAttribute("name", "username");

        var password = document.createElement("input");
        password.setAttribute("type", "password");
        password.setAttribute("placeholder", "Password");
        password.className = "form-control mj-select mj-textBox";
        password.setAttribute("name", "password");

        var clear = clearButton();
        var submit = submitButton();

        myForm.append(username);
        myForm.append(password);
        myForm.append(clear);
        myForm.append(submit);

        location.appendChild(myForm);
    }
    else if(selectObject === menu[3]){
        myForm.setAttribute("method", "get");
        myForm.setAttribute("action", "list.php");

        var first = document.createElement("input");
        first.setAttribute("type", "text");
        first.setAttribute("placeholder", "First singular value");
        first.className = "form-control mj-select mj-textBox";
        first.setAttribute("name", "first");

        var second = document.createElement("input");
        second.setAttribute("type", "text");
        second.setAttribute("placeholder", "Second singular value");
        second.className = "form-control mj-select mj-textBox";
        second.setAttribute("name", "second");

        var clear = clearButton();
        var submit = submitButton();

        myForm.append(first);
        myForm.append(second);
        myForm.append(clear);
        myForm.append(submit);

        location.appendChild(myForm);
    }
    else{
        myForm.setAttribute("method", "post");
        myForm.setAttribute("action", "cylinder.php");

        var radius = document.createElement("input");
        radius.setAttribute("type", "text");
        radius.setAttribute("placeholder", "Enter radius");
        radius.className = "form-control mj-select mj-textBox";
        radius.setAttribute("name", "radius");

        var height = document.createElement("input");
        height.setAttribute("type", "text");
        height.setAttribute("placeholder", "Enter height");
        height.className = "form-control mj-select mj-textBox";
        height.setAttribute("name", "height");

        var clear = clearButton();
        var submit = submitButton();

        myForm.append(radius);
        myForm.append(height);
        myForm.append(clear);
        myForm.append(submit);

        location.appendChild(myForm);
    }
}

function clearButton(){
    var clear = document.createElement("input");
    clear.setAttribute("type", "button");
    clear.setAttribute("value", "Clear Form");
    clear.className = "form-control mx-auto mj-buttonHover mj-select";
    clear.onclick = function(){ document.getElementById("mj-jsForm").reset(); };

    return clear;
}

function submitButton(){
    var submit = document.createElement("input");
    submit.setAttribute("type", "submit");
    submit.setAttribute("value", "Submit");
    submit.className = "form-control mx-auto mj-buttonHover mj-select";
    submit.id = "mj-JSSumbit";
    submit.setAttribute("name", "submit");

    return submit;
}