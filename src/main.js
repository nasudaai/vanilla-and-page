import {focusBtn} from "./addEvent.js"
import {length, logLen} from './textarea.js'
import { getArr } from './getJson.js'
import { appFunc, app }  from "./app.js"


const appTest = () => console.log(app)

const appH1 = document.createElement("h1")
appH1.textContent = "app"
console.log(appH1)

const para = document.createElement("p")
para.textContent = "parapara"

const btn = document.getElementById("btn")
btn.addEventListener('click', () => {
  alert("push")
})

const btn2 = document.createElement("button")
btn2.textContent = "Button2"
btn2.addEventListener("click", () => console.log("btn2 ok"))
export {appTest, appH1, para, btn, btn2}

// Date
console.log(Date.now())

const now = new Date()
console.log(now.toISOString())

  //ima nanji?
function wNow() {
  alert(now.toISOString())
}

const nBtn = document.getElementById("nBtn")
nBtn.addEventListener("click", () => {
  wNow()
})

//Math.random
console.log(Math.random())


//setTimeout
setTimeout(() => {
  alert("5秒経ったよ")
}, 5000)


//addbtn add eventListener
const body = document.querySelector("body")
//console.log(body)
body.appendChild(focusBtn)

logLen.textContent = "0"
const len = length

console.log(len)
console.log(logLen)

//
getArr()


//
appFunc()


