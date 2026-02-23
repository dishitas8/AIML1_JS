// var count;

// document.write("Starting Loop" + "<br>");

// for (count = 0; count < 10; count++) {
//     document.write("Current Count: " + count);
//     document.write("<br/>");
// }

// document.write("Loop stopped!");
const person = {
    name: "Sanjeev Soni",
    age: 22,
    city: "Indore"
};

for (let key in person) {
    console.log(key + ": " + person[key]);
}
