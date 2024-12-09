

var x = "raju"
var x = 'raju'
var x = `raju`

x = "raju"
y = "mahesh"

z = `${x} and ${y} are friends`


str2 = "raju\nmahesh"

console.log(str2)

//const str3 = new String("eat");

// a === "A"

// Coersion 

num1 = 10 

num2 = "20" 

total = num1 + num2 // 1020

str4 = "javascript"

console.log(str4.length)

console.log(str4[2])

console.log(str4.charAt(2))

//split() - convert string to array 

// join() - array to string 

str5 = "    javascript     language   "

console.log(str5.length)

str6 = str5.trim()


console.log(str6.length)

//strings are immutable 

arr = ["raju", "sai", "guru", "kalpana"]

// arr[2] ="Nagarjun"

// st1 = "Raju"

// st1[3] = "x"

// console.log(st1)


st2 = "NagARJun"

st3 = st2.toLowerCase()

console.log(st3)

st4 = st2.toUpperCase()


console.log(st4)

st5 = "This is JS class"

if(st5.includes("Cheenai")){

    console.log("String present")
}
else{

    console.log("String not present")

}

st6 = "javascript"

st7 = st6.substr(0,4)

console.log(st7)

//Math

str6 = Number("30")

str7 = String(30)


console.log(typeof(str6))

console.log(typeof(str7))


str8 = "$300"

str9 = "$400"

total = "$700"

price1 = Number("₹69,999".replace("₹", "").replace(",", ""))

price2 = Number("₹34,999".replace("₹", "").replace(",", ""))

console.log(price1+price2)

str = "gurug".replaceAll("g", "G")

console.log(str)