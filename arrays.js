
// arr  = []  // Empty Array 

// //arr = {}

// arr2  = ["raju", "Sai", "guru", "mahesh", "Devaraj"]

// arr3 = [3,5,6,7,2,4,6,9]

// arr4 = ["raju", 6, true, undefined , null]


// //length means  number of elements in the array 

// console.log(arr3.length)

// console.log(arr2[arr2.length-1])

// console.log(arr2)

// // concat

// arr5 = arr2.concat(arr4)

// console.log(arr5)

// arr6 = [9,3,4,6,2]

// console.log(arr6)

// arr7 = arr2.sort()

// console.log(arr7)

//arr2  = ["raju", "Sai", "guru", "mahesh", "Devaraj"]


// arr3 = arr2.reverse()

// console.log(arr3)

// arr2.push("Lakshmi kanth")


// console.log(arr2)

// shift  -- method to remove first element

// unshift - will add an element at the beginning 

// push  - will add an element at the end 

//pop  - to remove last element 

arr2  = ["raju", "Sai", "guru", "mahesh", "Devaraj"]

// arr2.pop()

// arr2.pop()

// console.log(arr2)

// arr2.shift()

// arr2.shift()

// console.log(arr2)

//arr2.push("Anitha")

// arr2.unshift("anitha")

// console.log(arr2)

arr2[1] = "Vijay"

console.log(arr2)

// split() - converts the string to array


str = "This is JS class"

arr3 = str.split("")

console.log(arr3)

//join() - converts array to string 

str2 = arr2.join("")

console.log(str2)


// str = "Javascript"

// WAP to reverse the string 

// output = "tpircsavaJ"

str = "Thimmaraju"
revstr = str.split("").reverse().join("")

console.log(revstr)

str3 = "aaa"


//WAP to check whether string palindrome or not 

function palindrome(str){

    var revstr = str.split("").reverse().join("")

    if(str == revstr){

        console.log("Given string is palindrome")
    }
    else{

        console.log("Given string is not a palindrome")
    }
}

palindrome(str3)

// WAP to find anagrams or not 

str5 = "mary"
str6 = "raju" 

function Anagram(str1, str2){

    rev1 = str1.split("").sort().join("")  
    
    console.log(rev1)
    rev2 = str2.split("").sort().join("")


    console.log(rev2)

    if(rev1 == rev2){
        console.log("Given strings anagrams")
    }
    else{

        console.log("Given strings are not anagrams")
    }
}

Anagram(str5, str6)

// 1 to 100 


fizzbuzzcount = 0

fizzcount = 0
buzzcount =0 
for (let i = 1 ; i<=100; i++){

    if(i%3 == 0 && i%5 == 0){

        console.log("FizzBuzz")
        fizzbuzzcount++
    }
    else if(i%3==0){
        console.log("Fizz")
        fizzcount++
    }
    else if(i%5 == 0){

        console.log("Buzz")
        buzzcount++
    }
    else{

        console.log(i)
    }
}

console.log(fizzcount)
console.log(buzzcount)
console.log(fizzbuzzcount)


arr = ["eat", "sleep"]

value  = arr.indexOf("sleep")

console.log(value)

//const array2 = new Array("eat", "sleep"); // more memory 


arr7 = ["sleep", "wake up", "exersize", "eat"]

arr7.forEach(element => {

    console.log("loops starts")
    console.log(element)
    console.log("loops Ends")
});



str = "raju"

str2  = "Mahesh"

st3 =  `${str} and ${str2} are friends`

console.log(st3)

jobtitles = ["SDET IV", "FronEnD Developer", "ScrumMaster", "BA", "PO"]

if(jobtitles.includes("guru")){

   console.log(" element is present")
}
else{

    console.log(" element is not present")
}

arr8 = jobtitles.slice(2)

console.log(arr8)

// reduce()

// map()

//filter()
