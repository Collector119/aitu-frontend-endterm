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
const searchInput = document.querySelector("#program-search");
const fieldSelect = document.querySelector("#field-filter");
const countText = document.querySelector("#programs-count");
const noResults = document.querySelector("#no-results");

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

// A program is kept only if its name contains the search text and its field matches the select
function filterPrograms(searchText, field) {
    const result = [];
    for (const program of programs) {
        const nameMatches = program.name.toLowerCase().includes(searchText.toLowerCase());
        const fieldMatches = field === "all" || program.field === field;
        if (nameMatches && fieldMatches) {
            result.push(program);
        }
    }
    return result;
}

function showFilteredPrograms() {
    const foundPrograms = filterPrograms(searchInput.value.trim(), fieldSelect.value);
    renderPrograms(foundPrograms);
    countText.textContent = "Showing " + foundPrograms.length + " of " + programs.length + " programs";
    if (foundPrograms.length === 0) {
        noResults.style.display = "block";
    } else {
        noResults.style.display = "none";
    }
}

searchInput.addEventListener("input", showFilteredPrograms);
fieldSelect.addEventListener("change", showFilteredPrograms);

searchInput.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        searchInput.value = "";
        showFilteredPrograms();
    }
});

showFilteredPrograms();
