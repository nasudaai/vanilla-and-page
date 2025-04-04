const focusBtn = document.createElement("button")

let text = "no focus" 
focusBtn.textContent = text

let isFocus = false

focusBtn.addEventListener("focus", (e) => {
  if (!isFocus) {
    text = "focus"
    focusBtn.textContent = text
    isFocus = true
    console.log(isFocus)
  } else {

    console.log(isFocus)
    isFocus = false
    console.log(isFocus)
  }
  
})  

export { focusBtn }

