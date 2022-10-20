let studentMajor = "ENG";

let majorName;
let depOffice;

switch (studentMajor) {
    case "BIOL":
        majorName = "Biology";
        depOffice = "Science Bidg, Room 310";
        break;
    
    case "CSCI":
        majorName = "Computer Science";
        depOffice = "Shwppard Hall, Room 314";
        break;
    
    case "ENG":
        majorName = "English";
        depOffice = "Kerr Hall, Room 201";
        break;

    case "HIST":
        majorName = "History";
        depOffice = "Kerr Hall, Room 114";
        break;

    case "MKT":
        majorName = "Marketing";
        depOffice = "Westly Hall, Room 310";
        break;

    default:
        majorName = "<unknown>";
        depOffice = "<unknown>";
        break;
}

console.log("If your major code is " + studentMajor + " the name of your major is " + majorName + " and the department office location is " + depOffice + ".");