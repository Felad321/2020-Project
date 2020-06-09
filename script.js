
var userAccount = {}
var userArray = []


// |\|\|\|\|\|\|\\|\|\|\|\\|\|\|\|\\|\|\|\|\\|\|\|\|\\|\|\|\|\\|\|\|\|\\|\|\|\|\\|\|\|\|\\|\|\|\|\\|\|\|\|\
//\|\|\|\|\\|\|\|\|\\|\|\|\|\\|\|\|\|\\|\|\|\|\\|\|\|\|\\|\|\|\|\\|\|\|\|\\|\|\|\|\\|\|\|\|\
//\|\|\|\|\\|\|\|\|\\|\|\|\|\\|\|\|\|\\|\|\|\|\\|\|\|\|\\|\|\|\|\\|\|\|\|\\|\|\|\|\\|\|\|\|\
// NEW PROJECT


//TEST CODE FROM W3


/* This function hides the login page, and shows the target page
 Temporary variables are used to achieve this */
 /* Uses parameters to determine divs to hide and show */
 
 function hideFunc(nextPage, prevPage) {
  var next = document.getElementById(nextPage);
  var prev = document.getElementById(prevPage);
  console.log(next)
  console.log(prev)

  if (prev.style.display === "none") {
    prev.style.display = "block";
  } else {
      prev.style.display = "none";
      next.style.display = "block"; 
    }
}
/*
// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Please enter a valid athlete name.");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
*/
/*
function createAccount(){
  userAccount = {
    username: document.getElementById("unameInput").value,
    password: document.getElementById("pswInput").value
  }
  console.log(userAccount)
  userArray.push(userAccount)
  console.log(userArray)

}
*/