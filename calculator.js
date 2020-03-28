window.onload = function() {
  let calcTitle = document.getElementById("foo")

  let calcResult = document.getElementById("result")

  let result = 0;

  for(let i = 0; i < 10; i++) {
    if(i == 0) {
      let btnElem = document.createElement("button")
      btnElem.id = "calc-btn-0"
      btnElem.classList.add("btn-calc")
      btnElem.innerHTML = "0"
      btnElem.addEventListener('click', () => {
        console.log(0)
      })
      insertAfter(calcResult, btnElem)
    } else {
      let btnElem = document.createElement("button")
      btnElem.id = "calc-btn-" + i
      btnElem.classList.add("btn-calc")
      btnElem.innerHTML = i
      btnElem.myParam = i
      btnElem.addEventListener('click', (e) => {
        console.log(e.currentTarget.myParam)
        calcResult.innerHTML += e.currentTarget.myParam
      })
      document.getElementById("calc-btn" + i - 1)
      insertAfter(calcResult, btnElem)
    }
  }

  let calcQuery = document.querySelectorAll(".btn-calc") 

  for(let i = 0; i < calcQuery.length; i++) {
    if(i % 4 == 0 && i <5) {
      let x = document.createElement("br")
      let y = document.getElementById("calc-btn-" + i)
      insertAfter(y, x)
    } else if(i == 7) {
        let x = document.createElement("br")
        let y = document.getElementById("calc-btn-" + i)
        insertAfter(y, x)
      }
  }

  function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }

}