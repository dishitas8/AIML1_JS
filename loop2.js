// var count=0;
// document.write("Starting Loop");
// while (count<10) {
//     document.write("Current Count")
// }
// var age=20;
// if (age>=18) {
//     console.log("You are eligible to cast the vote.");
// }
// else {
//     console.log("You are minor.")
// }
var grade ='A';
document.write("Entering switch statement" + "<br/>");
switch (grade) {
    case 'A':document.write("Excellent!");
    break;
    case 'B':document.write("Good!");
    break;
    case 'C':document.write("Fair!");
    break;          
    case 'D':document.write("Poor!");
    break;
    default:document.write("Invalid grade!");
}
document.write("<br/>Exiting switch statement");
