minutesToHours(prompt("please enter amount of minutes for converting into days and hours"))

function minutesToHours(minutes) {
    let parsedArray = parser(minutes);
    if(parsedArray) {
        alert(`${minutes} minutes is ${parsedArray[0]} days, ${parsedArray[1]} hours and ${parsedArray[2]} minutes`)
    }
    
}
function isValidExpression(minutes) {
    if(!+minutes) {
        alert("nothing but numbers can be accepted, please enter a number");
        return false;
    }
    if(minutes / 60 > 100) {
        alert("number is too large, please enter a smaller number");
        return false;
    }
    return true;
}
function parser(amount) {
    if(!isValidExpression(amount)) {
        return false;
    }
    let days = 0;
    let hours = Math.floor(amount / 60);
    let minutes = Math.round(amount % 60);
    console.log(minutes);
    if(hours > 24) {
        days = Math.floor(hours / 24);
        hours %= 24;
    }
    return [days, hours, minutes];
}
