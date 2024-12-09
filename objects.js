

// Objectname = {

//     propertyname : propertyvalue
// }


 const student = {

    rollnum : 418,
    firstname : "Raju",
    lastname : "G",
    gender : "M"
 }

console.log(typeof(student))

console.log(typeof(student.rollnum))

console.log(student.firstname)

console.log(student['firstname'])

//console.log(student.place)

// add property 

student['place'] = "Bangalore"

console.log(student.place)

// // edit property value 

// student['lastname'] = "Govindappa"

// console.log(student.lastname)

// //delete 

// delete student.rollnum

// console.log(student.rollnum)

menuitems = {

   menu1 : "Admin",
   menu2 : "PIM", 
   menu3 : "Leave",
   menu4 : "Time",
   menu5 : "Recruitment",
   menu6 : "My Info"
}

//from es6 for in

for(let item in menuitems){

//   console.log("Loop starts here")
//   console.log(menuitems[item])
//   console.log("Loop Ends here")

  console.log(item+ " : "+ menuitems[item])

}

// cy.conatins("Admin").should("be.visible")