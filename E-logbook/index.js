let logData = document.getElementById("logData");
let table = document.getElementById("dataTable");
let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let reasonInput = document.getElementById("reason");
let genderInputs = document.getElementsByName('gender');

const fillData = (name, email, reason, gender) => {
    let row = document.createElement('tr');

    let nameCell = document.createElement('td');
    nameCell.innerHTML = name;
    let emailCell = document.createElement('td');
    emailCell.innerHTML = email;
    let reasonCell = document.createElement('td');
    reasonCell.innerHTML = reason;
    let genderCell = document.createElement('td');
    genderCell.innerHTML = gender;

    row.appendChild(nameCell);
    row.appendChild(emailCell);
    row.appendChild(reasonCell);
    row.appendChild(genderCell);

    table.appendChild(row)
}

const submit = (event) => {
    event.preventDefault();
    
    let name = nameInput.value;
    let email = emailInput.value;
    let reason = reasonInput.value;
    let gender = undefined

    for(let i=0; i<genderInputs.length; i++) {
        if(genderInputs[i].checked) {
            gender = genderInputs[i].value;
        }
    }

    fillData(name, email, reason, gender);
    alert("Form Submitted!");
}

logData.addEventListener("submit", submit);

