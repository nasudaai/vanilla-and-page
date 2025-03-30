new EventSource('/esbuild').addEventListener('change', () => location.reload())

import {app, appTest, appH1} from "./main.js"
import {app2}  from "./app.js"

console.log("test!!")

alert("test-a")

const headChange = document.querySelector("h1")
headChange.style.color = "red"

console.log("appp")
const a = "aa"
console.log(a)

appTest()
console.log(appH1)
console.log (app2)

app.appendChild(appH1)
