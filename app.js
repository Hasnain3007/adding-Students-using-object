var btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  var studentName = prompt("Enter Your Name");
  var age = prompt("Enter Your Age");
  var course = prompt("Enter Your Course");
  var obj = {
    name: studentName,
    age: age,
    course: course,
  };
  console.log(obj);
//   localStorage.setItem(stdData,JSON.stringify(obj));
});