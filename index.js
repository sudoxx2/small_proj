// timer app 
// references:
// https://www.w3schools.com/jsref/jsref_gettime.asp
// https://stackoverflow.com/questions/26584233/updating-javascript-time-every-second
// https://www.includehelp.com/code-snippets/javascript-disable-button-after-click-using-function.aspx
// https://stackoverflow.com/questions/8266726/js-how-to-clear-interval-after-using-setinterval

let initTimer = 0
let startTime
let globalTimer
let myInterval
let diffTime

function timerStart() {
  document.getElementById("timeStartBtn").disabled = true;
  if(initTimer == 0) {
    startTime = Date.now()
    initTimer = 1
    myInterval = setInterval(() => intervalCounter(startTime), 1)
  } else if(initTimer >= 1){
    initTimer = 1
    myInterval = setInterval(() => intervalCounter1(), 1)
  }
}

function intervalCounter(startTime) {
  let elapsedTime = Date.now() - startTime
  globalTimer = elapsedTime
  console.log(globalTimer)
  diffTime = elapsedTime
  if(diffTime > 3000) {
    document.getElementById("timer").innerHTML = `{(elapsedTime / 1000)}`;
  } else {
    document.getElementById("timer").innerHTML = (elapsedTime / 1000).toFixed(2);
  }
}

function intervalCounter1() {
  if(initTimer == 1) {
    initTimer = 2
    let newStart = Date.now() - diffTime
    startTime = newStart
    let elapsedTime = Date.now() - newStart
    globalTimer = elapsedTime
    diffTime = elapsedTime
    document.getElementById("timer").innerHTML = (globalTimer / 1000).toFixed(2);
  } else {
    let elapsedTime = Date.now() - startTime
    globalTimer = elapsedTime
    diffTime = elapsedTime
    if(diffTime > 60000) {
      document.getElementById("timer").innerHTML = (elapsedTime / 1000).toFixed(2);
    } else {
      document.getElementById("timer").innerHTML = (elapsedTime / 1000).toFixed(2);
    }
  }
}

function timerPause() {
  document.getElementById("timeStartBtn").disabled = false;
  clearInterval(myInterval)
}


function insertAfter(referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

