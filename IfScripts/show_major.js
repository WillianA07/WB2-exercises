var studentName = "Betty";

var studentMajor = "BIOL";

if (studentMajor == "BIOL") {
    majorName = "Biology";
    depOffice = "Science Bidg, Room 310";
}

else {
    if (studentMajor == "CSCI") {
        majorName = "Computer Science";
        depOffice = "Shppard Hall, Room 314";
    }

    else {
        if (studentMajor == "ENG") {
            majorName = "English";
            depOffice = "Kerr Hall, Room 201";
        }

        else {
            if (studentMajor == "HIST") {
                majorName = "History";
                depOffice = "Kerr Hall, Room 114";
            }

            else {
                if (studentMajor == "MKT") {
                    majorName = "Marketing";
                    depOffice = "Westly Hall, Room 310";
                }
            }
        }
    }
}

console.log("Student: " + studentName);
console.log("Major: " + majorName);
console.log("Advising Location: " + depOffice);