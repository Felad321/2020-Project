
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
//NEED TO SORT ARRAY BEFORE SEARCH
// This function creates user data that will be stored in local storage.
function createAccount(){
  usernameInsertionSort()
  userAccount = {
    username: document.getElementById("unameInput").value,
    password: document.getElementById("pswInput").value
  }
  if(binarySearchUname(document.getElementById("unameInput").value) == true){
  var userArray = JSON.parse(localStorage.getItem("userArray"))
    userArray.push(userAccount)
    localStorage.setItem("userArray",JSON.stringify(userArray))
  console.log(JSON.parse(localStorage.getItem("userArray")))
  hideFunc('mainMenu','loginPage');
  } else {
    window.alert("That username is taken!")
  }
}

function loginAccount(){
  usernameInsertionSort()
  //In this case, false means that the function has found the item
  if(binarySearchUname(document.getElementById("unameLoginInput").value) == false){
    PSWInsertionSort();
    if(binarySearchPSW(document.getElementById("pswLoginInput").value) == false){
    hideFunc('mainMenu','loginPage')
  
  } else {

  }
  }

}

function binarySearchUname(searchName) {
  var retrievedUsers = JSON.parse(localStorage.getItem("userArray"));
  var usernameArray = []
  for(i=0;i < retrievedUsers.length; i++){
    usernameArray.push(retrievedUsers[i].username)
    console.log(usernameArray)
  }



  //Will jump out if the array is already empty
if(usernameArray.length == 0) {
  return false;
}
  searchFlag = true
  lower = 0;
  upper = usernameArray.length - 1;
  foundIt = false;
  requiredName = searchName; // CHANGE

  //This will iterate through the array until it has found the value it is looking for
  do {
    middle = Math.floor((upper + lower) / 2);

    //If the value is not located in the middle, it will split the remaining array into 2 halves and will repeat the same process
    if (
      requiredName.toLowerCase() == usernameArray[middle].toLowerCase()
    ) {
      foundIt = true;
      positionFound = middle + 1;
    } else if (
      requiredName.toLowerCase() < usernameArray[middle].toLowerCase()
    ) {
      upper = middle - 1;
    } else {
      lower = middle + 1;
    }
  } while (!foundIt && lower <= upper);

  //This will display its position back to the user
  if (foundIt) {
    return false;
  } else {
    return true;
  }
}

function binarySearchPSW(searchPSW,) {
  var retrievedUsers = JSON.parse(localStorage.getItem("userArray"));
  var passwordArray = []
  for(i=0;i < retrievedUsers.length; i++){
    passwordArray.push(retrievedUsers[i].password)
    console.log(passwordArray)
  }



  //Will jump out if the array is already empty
if(passwordArray.length == 0) {
  return false;
}
  searchFlag = true
  lower = 0;
  upper = passwordArray.length - 1;
  foundIt = false;
  requiredName = searchPSW; // CHANGE

  //This will iterate through the array until it has found the value it is looking for
  do {
    middle = Math.floor((upper + lower) / 2);

    //If the value is not located in the middle, it will split the remaining array into 2 halves and will repeat the same process
    if (
      requiredName.toLowerCase() == passwordArray[middle].toLowerCase()
    ) {
      foundIt = true;
      positionFound = middle + 1;
    } else if (
      requiredName.toLowerCase() < passwordArray[middle].toLowerCase()
    ) {
      upper = middle - 1;
    } else {
      lower = middle + 1;
    }
  } while (!foundIt && lower <= upper);

  //This will display its position back to the user
  if (foundIt) {
    return false;
  } else {
    return true;
  }
}

function usernameInsertionSort() {
  //The following lines display the insertion sort algorithm which sorts the array
  tempArray = JSON.parse(localStorage.getItem("userArray"));
  first = 0;
  last = tempArray.length - 1;
  positionOfNext = last - 1;
      console.log(JSON.parse(localStorage.getItem("userArray")))
  while (positionOfNext >= first) {
    next = tempArray[positionOfNext];
    current = positionOfNext;
    while (
      current < last &&
      next.username.toLowerCase() > tempArray[current + 1].username.toLowerCase()
    ) {
      current++;
      tempArray[current - 1] = tempArray[current];
    }
    tempArray[current] = next;
    positionOfNext -= 1;
  }
  localStorage.setItem("userArray",JSON.stringify(tempArray))
      console.log(JSON.parse(localStorage.getItem("userArray")))
  return;
}

function PSWInsertionSort() {
  //The following lines display the insertion sort algorithm which sorts the array
  tempArray = JSON.parse(localStorage.getItem("userArray"));
  first = 0;
  last = tempArray.length - 1;
  positionOfNext = last - 1;
      console.log(JSON.parse(localStorage.getItem("userArray")))
  while (positionOfNext >= first) {
    next = tempArray[positionOfNext];
    current = positionOfNext;
    while (
      current < last &&
      next.password.toLowerCase() > tempArray[current + 1].password.toLowerCase()
    ) {
      current++;
      tempArray[current - 1] = tempArray[current];
    }
    tempArray[current] = next;
    positionOfNext -= 1;
  }
  localStorage.setItem("userArray",JSON.stringify(tempArray))
      console.log(JSON.parse(localStorage.getItem("userArray")))
  return;
}
