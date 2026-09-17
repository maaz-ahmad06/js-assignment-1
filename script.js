alert("Hello, World!");

console.log("Hello, World!");

var fullName = "Maaz Ahmad";
document.write("My name is " + fullName);  // this will write the name on the webpage

let course_name = "Javascript basics";
console.log("Course Name: " + course_name); 

const batch = "SMIT Batch 06";
console.log("Batch: " + batch);

// now lets update the variable that we declared with Let keyword
course_name = "Web Development";
console.log("Updated Course Name: " + course_name); //so we can see that the value of course_name has been updated successfully

// now lets try to update the varaible that we declared with const keyword
batch = "SMIT Batch_06";
console.log("Updated Batch: " + batch); // this will give an error because once a variable declared with keyword const it cannot be changed

