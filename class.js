

// // function add() {

// //     //block of code 
// // }

// // add()

// // //============================

// // // class classname{

// // //     x = 10

// // //     y = 20

// // //     add(){


// // //     }

// // //     edit(){


// // //     }

// // //     delete(){


// // //     }
// // // }

// // class calculator {

// //     x = 10

// //     y = 20

// //     constructor(st1, st2) {

// //         console.log(st1)
// //         console.log(st2)
// //     }

// //     static add() {

// //         console.log(10 + 20)
// //     }

// //     substrct(num1, num2) {

// //         console.log(num1)
// //         console.log(num2)
// //         console.log(num1 - num2)
// //     }

// //     multiply(num1, num2) {

// //         console.log(num1)
// //         console.log(num2)
// //         console.log(num1 * num2)
// //     }

// //     devision(num1, num2) {

// //         console.log(num1)
// //         console.log(num2)
// //         console.log(num1 / num2)

// //         this.add()
// //     }


// //     printmesage() {

// //         console.log("this is a simple method")
// //     }
// // }

// // //const cal1 = new  calculator()

// // //cal1.display()

// // // cal1.add(5,3)

// // // cal1.substrct(20,14)

// // // console.log(cal1.x)

// // //const cal2 = new  calculator()

// // // total = cal2.add(2,4)

// // // console.log(total)

// // // cal2.printmesage()


// // const cal3 = new calculator("Nagarjun", "gurug")


// // cal3.substrct()
// // // cal3.add()

// // //calculator.add()

// // class employee {

// //     m1() {

// //         console.log("this is m1 mehtod - Non static ")
// //     }

// //     static m2() {

// //         console.log("this is m2 mehtod - static ")
// //     }

// //     m3() {

// //         console.log("this is m3 mehtod - Non static ")
// //     }

// //     static m4() {

// //         console.log("this is m4 mehtod - static ")
// //     }


// // }

// // employee.m2()

// // //employee.m1()

// // const emp1 = new employee()

// // //=================================================

// // //Java 

// // //JavaScript 

// // // 1. Encapsulation 
// // // 2 . Inheritance 
// // // 3. Polymorphism
// // // 4. Prototype


// // class student {

     
// //     getstudentdetails(stname, stplace, stnum){

// //         this.studentName = stname
// //         this.studentPlace = stplace
// //         this.studentNumber = stnum
// //     }

// //     displaydetails(){

// //         console.log(this.studentName, this.studentPlace, this.studentNumber)
// //     }


// // }

// // const std1 = new student()

// // std1.getstudentdetails("Lakshmikanth", "blr", "418")

// // std1.displaydetails()


// class A {

//     add(num1, num2){

//         console.log(num1+num2)
//     }

//     m1() {

//         console.log("this is m1 mehtod - from A ")
//     }

//      m2() {

//         console.log("this is m2 mehtod  ")
//     }

//     m3() {

//         console.log("this is m3 mehtod  ")
//     }

//      m4() {

//         console.log("this is m4  ")
//     }


// }


// class B extends A {

//     add(num1, num2, num3){

//         console.log(num1+num2+num3)
//     }
//     m1() {

//         console.log("this is m1 mehtod - from B ")
//     }

//      m6() {

//         console.log("this is m6 mehtod  ")
//     }

//     m7() {

//         console.log("this is m7 mehtod  ")
//     }

//      m8() {

//         console.log("this is m8 method ")
//     }


// }

// const obj2 = new A()

// obj2.m1()

// //obj2.m8()

// //Polymorphism 

// // Method Overriding 

// //Method overloading

// obj2.add(4,5,6)


//Prototype 


class A {

    stname = "Sai"
    place = "blr"

    add(num1, num2){

        console.log(num1+num2)
    }

    m1() {

        console.log("this is m1 mehtod - from A ")
    }

     m2() {

        console.log("this is m2 mehtod  ")
    }

    m3() {

        console.log("this is m3 mehtod  ")
    }

     m4() {

        console.log("this is m4  ")
    }


}

A.prototype.lastname = "venkat"


A.prototype.m5 = function (){

    console.log("xyz")
}


const obj1 = new A()

const obj2 = new A()



console.log(obj1.lastname)

console.log(obj2.lastname)

obj1.m5()

obj2.m5()

// Async await 

// {

  // block of code 

//}


// async function1

// await function2 

//promises and callback 

// Maps 

// Sets 

// regular expression 

// gitHub copilot 

// i want similar tests but 

