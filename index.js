let pick = "tea"
switch (pick){
    case "tea":
        console.log("I like" + pick)
        break;
    case "coffee":
        console.log("I like" + pick)
        break;
    case "juse":
        console.log("I like" + pick)
        break;
}
let day = "Friday"
switch (day){
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        console.log("work")
        break;
    case "Saturday":
    case "Sunday":
        console.log("rest")
}
let num = 1
switch (num){
    case 1:
        console.log("winter")
        break;
    case 2:
        console.log("spring")
        break;
    case 3:
        console.log("summer")
        break;
    case 4:
        console.log("Autumn")
        break;
}
let color = "red"
switch (color){
    case "red":
        console.log("stop")
        break;
    case "yellow":
        console.log("ready")
        break;
    case "green":
        console.log("go")
        break;
}
let num1 = 10
let num2 = 20
let operation = "/"
switch (operation){
    case "+":
        console.log(num1 + num2)
        break;
    case "-":
        console.log(num1 - num2)
        break;
    case "*":
        console.log(num1 * num2)
        break;
    case "/":
        if (!(num2 === 0)) {
            console.log(num1 / num2)
        }else {
            console.log("can't divide by zero")
        }
        break;
}