new EventSource('/esbuild').addEventListener('change', () => location.reload())

import {app, appTest} from "./main.js"

console.log("test!")

alert("test-a")

const headChange = document.querySelector("h1")
headChange.style.color = "red"

console.log("appp")
const a = "aa"
console.log(a)

appTest()
