//1) Window Prompt (Easy Way)
let userName;
userName = window.prompt("Enter UserName Here : ")
console.log(userName);

//2) Html Box Way

let userName;
document.getElementById("submit").onclick = function () {
    userName = document.getElementById("textBox").value;
    document.getElementById("myh1").textContent = `Welcome Mr ${userName}`
    document.getElementById("textBox").value = '';
}

/* Html file 

<!DOCTYPE html>
<html>
<body>
<h1 id="myh1">Enter your name:</h1>
<input id="textBox" placeholder="Your name">
<button id="submit">Submit</button>
<script>
let userName;
document.getElementById("submit").onclick=function(){
  userName=document.getElementById("textBox").value;
  document.getElementById("myh1").textContent=`Welcome Mr ${userName}`;
  document.getElementById("textBox").value='';
}
</script>
</body>
</html>

*/



/*
Explanation of Code:

1) Window Prompt (Easy Way)
--------------------------------
let userName;
- Declares a variable userName.

userName = window.prompt("Enter UserName Here : ");
- Opens a browser prompt dialog asking the user to enter their name.
- Stores the entered value into the variable userName.

console.log(userName);
- Prints the entered name to the browser console.

---

2) HTML Box Way
--------------------------------
let userName;
- Declares a variable userName.

document.getElementById("submit").onclick = function () {
    userName = document.getElementById("textBox").value;
    - When the element with id="submit" (likely a button) is clicked,
      it retrieves the value entered in the input field with id="textBox"
      and stores it in userName.

    document.getElementById("myh1").textContent = `Welcome Mr ${userName}`;
    - Updates the text of the element with id="myh1" to say:
      "Welcome Mr <entered_name>".

    document.getElementById("textBox").value = '';
    - Clears the input field after submission.
}
*/
