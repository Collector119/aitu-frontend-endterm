const programs = [
    { name: "Software Engineering", field: "Computer science", duration: "3 years", language: "English" },
    { name: "Computer Science", field: "Computer science", duration: "3 years", language: "English" },
    { name: "Cybersecurity", field: "Information security", duration: "3 years", language: "English" },
    { name: "Big Data Analysis", field: "Data science", duration: "3 years", language: "English" },
    { name: "Media Technologies", field: "Digital media", duration: "3 years", language: "English" },
    { name: "IT Management", field: "Management", duration: "3 years", language: "English" },
    { name: "Digital Journalism", field: "Digital media", duration: "3 years", language: "English" },
    { name: "Industrial Automation", field: "Engineering", duration: "3 years", language: "English" }
];

const tableBody = document.querySelector("#programs-body");

function createCell(text) {
    const cell = document.createElement("td");
    cell.textContent = text;
    return cell;
}

function createProgramRow(program) {
    const row = document.createElement("tr");
    row.appendChild(createCell(program.name));
    row.appendChild(createCell(program.field));
    row.appendChild(createCell(program.duration));
    row.appendChild(createCell(program.language));
    return row;
}

// The table is cleared first, so the same function can show any list of programs
function renderPrograms(list) {
    tableBody.innerHTML = "";
    list.forEach(function (program) {
        tableBody.appendChild(createProgramRow(program));
    });
}

renderPrograms(programs);
