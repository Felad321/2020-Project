//Global Variables are below
var userAccount = {}
var userArray = []
var flagDeductsOpened = false
var totalDeductions = []
var currentUser

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

// This function creates user data that will be stored in local storage.
function createAccount(){
  usernameInsertionSort()
  currentUser = ""
  userAccount = {
    username: document.getElementById("unameInput").value,
    password: document.getElementById("pswInput").value,
    judgeScores: [],
    needsAssessment: false
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
  currentUser = ""
  //In this case, false means that the function has found the item
  if(binarySearchUname(document.getElementById("unameLoginInput").value) == false){
    PSWInsertionSort();
    if(binarySearchPSW(document.getElementById("pswLoginInput").value) == false){
      currentUser = document.getElementById("unameLoginInput").value
      console.log(currentUser)
    hideFunc('mainMenu','loginPage')
  
  } else {

  }
  }
  var test = [
    helpUser = {
      arraytest: ["yeah", "yeah2"]
    } 
  ] 
console.log(test[0].arraytest[0])
}

// This functions will search for any matching usernames
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

// This functions will search for any matching passwords
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

// This function sorts the usernames, so it can be searched for the binary search
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

// This function sorts the passwords, so it can be searched for the binary search
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

// Create a new list item when clicking on the "Add" button, and adds to the total deduction value array
function displayDeduction() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("DedScoreInput").value;
  if(inputValue > 6) {
    alert("Please enter a valid deduction.")
    return
  }
  totalDeductions.push(inputValue);
  console.log(totalDeductions);
   /* 
   switch(inputValue) {
      case "Fall1":
        inputValue = inputValue + " - 5"
        totalDeductions.push(5)
        console.log(totalDeductions)
        break;
      case "Cross2":
        inputValue = inputValue + " - 10"
        totalDeductions.push(10)
        console.log(totalDeductions)
    }
    */
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Please enter a valid deduction.");
  } else {
    document.getElementById("deductionUL").appendChild(li);
  }
  //document.getElementById("deductionOptionBox").value = "";
  }

  // This function calculates the final total scores, and saves them to local storage with the user attatched
  function judgeSubmit() {
    //Calculate & display the run score
      //Total the deductions
      var finalDeduct = 0
      for(i=0;i<totalDeductions.length;i++){
        finalDeduct = finalDeduct + Number(totalDeductions[i])
        console.log(finalDeduct)
      }
    var finalRunScore = document.getElementById("RBScoreInput").value - finalDeduct
      if(finalRunScore < 0){
        finalRunScore = 0
     }
    console.log(finalRunScore)
    document.getElementById("TRScore").innerHTML = "Total Run score is " + finalRunScore;

     //Calculate & display the air score
     var finalAirScore = Number(document.getElementById("airOptionBox1").value) + Number(document.getElementById("airOptionBox1").value)
     document.getElementById("TAScore").innerHTML = "Total Air score is " + finalAirScore;

     //Calculate & display the total score
     var totalScore = finalRunScore + finalAirScore
     document.getElementById("FScore").innerHTML = "Final score is " + totalScore;


  }

/* This function creates the list of deductions within the deduction box, also checking whether the box
   has already been opened to prevent duplicated data [ACTUALLY ONLY NEEDED FOR EDITABLE DEDUCTIONS]
   function setDeductions() {
    selectbox = document.getElementById("optionBoxes")
    var deductionsArray = ["test1","test2","test3"] 
    //var retrievedArraySelect = localStorage.getItem("userArray")
    //var retrievedArraySelectProper = JSON.parse(retrievedArraySelect)
    
    if(flagDeductsOpened === false){
     for(i=0;i<deductionsArray.length;i++){
    
        //select.option.remove[i]
        var option = document.createElement("option");
        option.value = i
        option.text = deductionsArray[i]
        selectbox.add(option)
     } } else {
     }
    flagSelectUserOpened = true
  }
*/

/*NOTES:
- Time how long it takes for coaches to score?
- HAVE A MODAL POP UP TO DISPLAY ANY DEDUCTION INFO FROM A BUTTON?
- Make the airs a listr of tricks
*/