//Global Variables are below
var userAccount = {}
var userArray = []
var flagResultsOpened = false
var totalDeductions = []
var currentUser
const expertScores = [32.81,19.6,33.6,30,26.8,26]

/* This function hides a page, and showes another using parameters,
 Temporary variables are used to achieve this */
 /* Uses parameters to determine divs to hide and show */
 
 function hideFunc(nextPage, prevPage) {
  var next = document.getElementById(nextPage);
  var prev = document.getElementById(prevPage);

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

// This function creates user data that will be stored in local storage, and checks whether a username is taken.
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
      if(userArray == null){
        userArray = []
      }
    userArray.push(userAccount)
    localStorage.setItem("userArray",JSON.stringify(userArray))
  currentuser = document.getElementById("unameInput").value
  hideFunc('judgeTestMenu','loginPage');
  } else {
    window.alert("That username is taken!")
  }
}

// Checks to see if the input login details are valid
function loginAccount(){
  usernameInsertionSort()
  currentUser = ""
  //In this case, false means that the function has found the item
  if(binarySearchUname(document.getElementById("unameLoginInput").value) == false){
    PSWInsertionSort();
    if(binarySearchPSW(document.getElementById("pswLoginInput").value) == false){
      currentUser = document.getElementById("unameLoginInput").value
    hideFunc('judgeTestMenu','loginPage')
   }
  } else
  var test = [
    helpUser = {
      arraytest: ["yeah", "yeah2"]
    } 
  ] 
alert("The login is invalid.")
}

// This functions will search for any matching usernames
function binarySearchUname(searchName) {
  var retrievedUsers = JSON.parse(localStorage.getItem("userArray"));
  if(retrievedUsers == null){
    return true
  } else
  var usernameArray = []
  for(i=0;i < retrievedUsers.length; i++){
    usernameArray.push(retrievedUsers[i].username)
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

  //This will return whether the uname has been found
  if (foundIt) {
    return false;
  } else {
    return true;
  }
}

// This function searches for any matching judge names
function binarySearchJudge(searchName) {
  var retrievedUsers = JSON.parse(localStorage.getItem("userArray"));
  if(retrievedUsers == null){
    return true
  } else
  var usernameArray = []
  for(i=0;i < retrievedUsers.length; i++){
    usernameArray.push(retrievedUsers[i].username)
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
      positionFound = middle;
    } else if (
      requiredName.toLowerCase() < usernameArray[middle].toLowerCase()
    ) {
      upper = middle - 1;
    } else {
      lower = middle + 1;
    }
  } while (!foundIt && lower <= upper);

  //This will return the index the name was found at
  if (foundIt) {
    return positionFound
  } else {
    return
  }
}

// This functions will search for any matching passwords
function binarySearchPSW(searchPSW,) {
  var retrievedUsers = JSON.parse(localStorage.getItem("userArray"));
  var passwordArray = []
  for(i=0;i < retrievedUsers.length; i++){
    passwordArray.push(retrievedUsers[i].password)
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

  //This will return whether the uname has been found
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
  if(tempArray == null){
    return
  } else
  first = 0;
  last = tempArray.length - 1;
  positionOfNext = last - 1;
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
  return;
}

// This function sorts the passwords, so it can be searched for the binary search
function PSWInsertionSort() {
  //The following lines display the insertion sort algorithm which sorts the array
  tempArray = JSON.parse(localStorage.getItem("userArray"));
  first = 0;
  last = tempArray.length - 1;
  positionOfNext = last - 1;
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
  return;
}

// This function creates the HTML elements that represent the judge results page.
function createJudgeResults(){
  // Checks to see if the results have already been opened to prevent duplication
  if(flagResultsOpened == true){
    return
  } else
  flagResultsOpened = true
 
  var judgeList = JSON.parse(localStorage.getItem("userArray"));
  for(i=0;i < judgeList.length;i++){

    // Creating a div element
    var divElement = document.createElement("Div");
    divElement.id = "divID";

    // Creating paragraph to show judge names
    var judgeDivElement = document.createElement("Div")
    judgeDivElement.id = "judgeList"
    var newPara = document.createElement("p");
    var judgeNode = document.createTextNode(judgeList[i].username);
    judgeDivElement.style.textAlign = "center"
    judgeDivElement.style.fontWeight = "bold"
    judgeDivElement.style.fontSize = "large"
    newPara.appendChild(judgeNode);
    judgeDivElement.appendChild(newPara)
    divElement.appendChild(judgeDivElement);

    // Styling it
    divElement.style.textAlign = "left";
    divElement.style.fontSize = "smaller";
    divElement.style.paddingTop = "15px";
    divElement.style.overflow = "auto";
    divElement.style.border = "2.5px solid #000"
    divElement.style.height = "200px"

    // Adding the results
    for(x=0;x<judgeList[i].judgeScores.length;x++){
     var paragraph = document.createElement("P");
     var comparedScore = 0
     // If compared score is -ve, judge score was greater than expert score vice versa
     // Checks to see which video the score relates to
     switch(judgeList[i].judgeScores[x][0]){
        case 1:
          comparedScore = Number(expertScores[0] - judgeList[i].judgeScores[x][1]).toFixed(2)
          break;
        case 2:
          comparedScore = Number(expertScores[1] - judgeList[i].judgeScores[x][1]).toFixed(2)
          break;
        case 3:
          comparedScore = Number(expertScores[2] - judgeList[i].judgeScores[x][1]).toFixed(2)
          break;
        case 4:
          comparedScore = Number(expertScores[3] - judgeList[i].judgeScores[x][1]).toFixed(2)
         break;
       case 5:
         comparedScore = Number(expertScores[4] - judgeList[i].judgeScores[x][1]).toFixed(2)
         break;
       case 6:
         comparedScore = Number(expertScores[5] - judgeList[i].judgeScores[x][1]).toFixed(2)
         break;
       default:
         alert("Well, it broke, sorry bud.");
         return;
    }
    // Adds the text to display the score difference
    var text = document.createTextNode("The difference between the judge and expert score was: " + comparedScore);
    paragraph.appendChild(text);
    divElement.appendChild(paragraph)
    if(comparedScore > 5 || comparedScore < -5){
      judgeList[i].needsAssessment = true
    } else {
      judgeList[i].needsAssessment = false
    }
    
    }
    paragraph = document.createElement("P")

    if(judgeList[i].judgeScores.length > 0){
      if(judgeList[i].needsAssessment == true){
       text = document.createTextNode("This judge needs assesment")
       paragraph.appendChild(text)
       divElement.appendChild(paragraph)
     } else {
        text = document.createTextNode("This judge does not need assesment")
        paragraph.appendChild(text)
        divElement.appendChild(paragraph)
      }
    } else {
      text = document.createTextNode("This judge has not scored anything yet")
      paragraph.appendChild(text)
      divElement.appendChild(paragraph)
    }
    // Appending the div element to body
    document.getElementById("judgeResults").appendChild(divElement);
  }
}

// Create a new list item when clicking on the "Add" button, and adds to the total deduction value array
function displayDeduction1() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("DedScoreInput1").value;
  if(inputValue > 6) {
    alert("Please enter a valid deduction.")
    return
  }
  totalDeductions.push(inputValue);
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Please enter a valid deduction.");
  } else {
    document.getElementById("deductionUL1").appendChild(li);
  }
  }

  // This function calculates the final total scores, and saves them to local storage with the user attatched. String manipulation is also present here.
  function judgeSubmit1() {
    //Calculate & display the run score 
      //Total the deductions
      var finalDeduct = 0
      for(i=0;i<totalDeductions.length;i++){
        finalDeduct = finalDeduct + Number(totalDeductions[i])
      }
      //Calculate the final run score
      var runScore = document.getElementById("RBScoreInput1").value
      if(runScore > 20 || runScore < 0){
        alert("Your run score is invalid.")
        return
      }

      var finalRunScore = runScore - finalDeduct
        if(finalRunScore < 0){
         finalRunScore = 0
        }
    document.getElementById("TRScore1").innerHTML = "Total Run score is " + finalRunScore;

     //Calculate & display the air score
     var airScore1 = document.getElementById("A1ScoreInput1").value * document.getElementById("1airOptionBox1").value
     var airScore2 = document.getElementById("A2ScoreInput1").value * document.getElementById("1airOptionBox2").value
     var finalAirScore = airScore1 + airScore2
     document.getElementById("TAScore1").innerHTML = "Total Air score is " + finalAirScore;

     //Calculate & display the total score
     var totalScore = Number((finalRunScore + finalAirScore).toFixed(2))
     document.getElementById("FScore1").innerHTML = "Final score is " + totalScore;

     //Update the judge's scores
     usernameInsertionSort()
     var judgeUpdate = JSON.parse(localStorage.getItem("userArray"))
     var judgeIndex = binarySearchJudge(currentUser)
     judgeUpdate[judgeIndex].judgeScores.push([1,totalScore])
     localStorage.setItem("userArray",JSON.stringify(judgeUpdate))


  }

// Create a new list item when clicking on the "Add" button, and adds to the total deduction value array
function displayDeduction2() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("DedScoreInput2").value;
  if(inputValue > 6) {
    alert("Please enter a valid deduction.")
    return
  }
  totalDeductions.push(inputValue);
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Please enter a valid deduction.");
  } else {
    document.getElementById("deductionUL2").appendChild(li);
  }
  }

  // This function calculates the final total scores, and saves them to local storage with the user attatched. String manipulation is also present here.
  function judgeSubmit2() {
    //Calculate & display the run score 
      //Total the deductions
      var finalDeduct = 0
      for(i=0;i<totalDeductions.length;i++){
        finalDeduct = finalDeduct + Number(totalDeductions[i])
      }
      //Calculate the final run score
      var runScore = document.getElementById("RBScoreInput2").value
      if(runScore > 20 || runScore < 0){
        alert("Your run score is invalid.")
        return
      }

      var finalRunScore = runScore - finalDeduct
        if(finalRunScore < 0){
         finalRunScore = 0
        }
    document.getElementById("TRScore2").innerHTML = "Total Run score is " + finalRunScore;

     //Calculate & display the air score
     var airScore1 = document.getElementById("A1ScoreInput2").value * document.getElementById("2airOptionBox1").value
     var airScore2 = document.getElementById("A2ScoreInput2").value * document.getElementById("2airOptionBox2").value
     var finalAirScore = airScore1 + airScore2
     document.getElementById("TAScore2").innerHTML = "Total Air score is " + finalAirScore;

     //Calculate & display the total score
     var totalScore = Number((finalRunScore + finalAirScore).toFixed(2))
     document.getElementById("FScore2").innerHTML = "Final score is " + totalScore;

     //Update the judge's scores
     usernameInsertionSort()
     var judgeUpdate = JSON.parse(localStorage.getItem("userArray"))
     var judgeIndex = binarySearchJudge(currentUser)
     judgeUpdate[judgeIndex].judgeScores.push([2,totalScore])
     localStorage.setItem("userArray",JSON.stringify(judgeUpdate))


  }



// Create a new list item when clicking on the "Add" button, and adds to the total deduction value array
function displayDeduction3() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("DedScoreInput3").value;
  if(inputValue > 6) {
    alert("Please enter a valid deduction.")
    return
  }
  totalDeductions.push(inputValue);
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Please enter a valid deduction.");
  } else {
    document.getElementById("deductionUL3").appendChild(li);
  }
  }

  // This function calculates the final total scores, and saves them to local storage with the user attatched. String manipulation is also present here.
  function judgeSubmit3() {
    //Calculate & display the run score 
      //Total the deductions
      var finalDeduct = 0
      for(i=0;i<totalDeductions.length;i++){
        finalDeduct = finalDeduct + Number(totalDeductions[i])
      }
      //Calculate the final run score
      var runScore = document.getElementById("RBScoreInput3").value
      if(runScore > 20 || runScore < 0){
        alert("Your run score is invalid.")
        return
      }

      var finalRunScore = runScore - finalDeduct
        if(finalRunScore < 0){
         finalRunScore = 0
        }
    document.getElementById("TRScore3").innerHTML = "Total Run score is " + finalRunScore;

     //Calculate & display the air score
     var airScore1 = document.getElementById("A1ScoreInput3").value * document.getElementById("3airOptionBox1").value
     var airScore2 = document.getElementById("A2ScoreInput3").value * document.getElementById("3airOptionBox2").value
     var finalAirScore = airScore1 + airScore2
     document.getElementById("TAScore3").innerHTML = "Total Air score is " + finalAirScore;

     //Calculate & display the total score
     var totalScore = Number((finalRunScore + finalAirScore).toFixed(2))
     document.getElementById("FScore3").innerHTML = "Final score is " + totalScore;

     //Update the judge's scores
     usernameInsertionSort()
     var judgeUpdate = JSON.parse(localStorage.getItem("userArray"))
     var judgeIndex = binarySearchJudge(currentUser)
     judgeUpdate[judgeIndex].judgeScores.push([3,totalScore])
     localStorage.setItem("userArray",JSON.stringify(judgeUpdate))


  }

// Create a new list item when clicking on the "Add" button, and adds to the total deduction value array
function displayDeduction4() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("DedScoreInput4").value;
  if(inputValue > 6) {
    alert("Please enter a valid deduction.")
    return
  }
  totalDeductions.push(inputValue);
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Please enter a valid deduction.");
  } else {
    document.getElementById("deductionUL4").appendChild(li);
  }
  }

  // This function calculates the final total scores, and saves them to local storage with the user attatched. String manipulation is also present here.
  function judgeSubmit4() {
    //Calculate & display the run score 
      //Total the deductions
      var finalDeduct = 0
      for(i=0;i<totalDeductions.length;i++){
        finalDeduct = finalDeduct + Number(totalDeductions[i])
      }
      //Calculate the final run score
      var runScore = document.getElementById("RBScoreInput4").value
      if(runScore > 20 || runScore < 0){
        alert("Your run score is invalid.")
        return
      }

      var finalRunScore = runScore - finalDeduct
        if(finalRunScore < 0){
         finalRunScore = 0
        }
    document.getElementById("TRScore4").innerHTML = "Total Run score is " + finalRunScore;

     //Calculate & display the air score
     var airScore1 = document.getElementById("A1ScoreInput4").value * document.getElementById("4airOptionBox1").value
     var airScore2 = document.getElementById("A2ScoreInput4").value * document.getElementById("4airOptionBox2").value
     var finalAirScore = airScore1 + airScore2
     document.getElementById("TAScore4").innerHTML = "Total Air score is " + finalAirScore;

     //Calculate & display the total score
     var totalScore = Number((finalRunScore + finalAirScore).toFixed(2))
     document.getElementById("FScore4").innerHTML = "Final score is " + totalScore;

     //Update the judge's scores
     usernameInsertionSort()
     var judgeUpdate = JSON.parse(localStorage.getItem("userArray"))
     var judgeIndex = binarySearchJudge(currentUser)
     judgeUpdate[judgeIndex].judgeScores.push([4,totalScore])
     localStorage.setItem("userArray",JSON.stringify(judgeUpdate))


  }

// Create a new list item when clicking on the "Add" button, and adds to the total deduction value array
function displayDeduction5() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("DedScoreInput1").value;
  if(inputValue > 6) {
    alert("Please enter a valid deduction.")
    return
  }
  totalDeductions.push(inputValue);
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Please enter a valid deduction.");
  } else {
    document.getElementById("deductionUL1").appendChild(li);
  }
  }

  // This function calculates the final total scores, and saves them to local storage with the user attatched. String manipulation is also present here.
  function judgeSubmit5() {
    //Calculate & display the run score 
      //Total the deductions
      var finalDeduct = 0
      for(i=0;i<totalDeductions.length;i++){
        finalDeduct = finalDeduct + Number(totalDeductions[i])
      }
      //Calculate the final run score
      var runScore = document.getElementById("RBScoreInput5").value
      if(runScore > 20 || runScore < 0){
        alert("Your run score is invalid.")
        return
      }

      var finalRunScore = runScore - finalDeduct
        if(finalRunScore < 0){
         finalRunScore = 0
        }
    document.getElementById("TRScore5").innerHTML = "Total Run score is " + finalRunScore;

     //Calculate & display the air score
     var airScore1 = document.getElementById("A1ScoreInput5").value * document.getElementById("5airOptionBox1").value
     var airScore2 = document.getElementById("A2ScoreInput5").value * document.getElementById("5airOptionBox2").value
     var finalAirScore = airScore1 + airScore2
     document.getElementById("TAScore5").innerHTML = "Total Air score is " + finalAirScore;

     //Calculate & display the total score
     var totalScore = Number((finalRunScore + finalAirScore).toFixed(2))
     document.getElementById("FScore5").innerHTML = "Final score is " + totalScore;

     //Update the judge's scores
     usernameInsertionSort()
     var judgeUpdate = JSON.parse(localStorage.getItem("userArray"))
     var judgeIndex = binarySearchJudge(currentUser)
     judgeUpdate[judgeIndex].judgeScores.push([5,totalScore])
     localStorage.setItem("userArray",JSON.stringify(judgeUpdate))


  }

// Create a new list item when clicking on the "Add" button, and adds to the total deduction value array
function displayDeduction6() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("DedScoreInput6").value;
  if(inputValue > 6) {
    alert("Please enter a valid deduction.")
    return
  }
  totalDeductions.push(inputValue);
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Please enter a valid deduction.");
  } else {
    document.getElementById("deductionUL6").appendChild(li);
  }
  }

  // This function calculates the final total scores, and saves them to local storage with the user attatched. String manipulation is also present here.
  function judgeSubmit6() {
    //Calculate & display the run score 
      //Total the deductions
      var finalDeduct = 0
      for(i=0;i<totalDeductions.length;i++){
        finalDeduct = finalDeduct + Number(totalDeductions[i])
      }
      //Calculate the final run score
      var runScore = document.getElementById("RBScoreInput6").value
      if(runScore > 20 || runScore < 0){
        alert("Your run score is invalid.")
        return
      }

      var finalRunScore = runScore - finalDeduct
        if(finalRunScore < 0){
         finalRunScore = 0
        }
    document.getElementById("TRScore6").innerHTML = "Total Run score is " + finalRunScore;

     //Calculate & display the air score
     var airScore1 = document.getElementById("A1ScoreInput6").value * document.getElementById("6airOptionBox1").value
     var airScore2 = document.getElementById("A2ScoreInput6").value * document.getElementById("6airOptionBox2").value
     var finalAirScore = airScore1 + airScore2
     document.getElementById("TAScore6").innerHTML = "Total Air score is " + finalAirScore;

     //Calculate & display the total score
     var totalScore = Number((finalRunScore + finalAirScore).toFixed(2))
     document.getElementById("FScore6").innerHTML = "Final score is " + totalScore;

     //Update the judge's scores
     usernameInsertionSort()
     var judgeUpdate = JSON.parse(localStorage.getItem("userArray"))
     var judgeIndex = binarySearchJudge(currentUser)
     judgeUpdate[judgeIndex].judgeScores.push([6,totalScore])
     localStorage.setItem("userArray",JSON.stringify(judgeUpdate))


  }

/*NOTES:
- Time how long it takes for coaches to score?
- HAVE A MODAL POP UP TO DISPLAY ANY DEDUCTION INFO FROM A BUTTON?

*/