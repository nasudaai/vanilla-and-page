new EventSource('/esbuild').addEventListener('change', () => location.reload())

import {app, appTest, appH1, para, btn, btn2} from "./main.js"
import {app2}  from "./app.js"


alert("test-a")

const headChange = document.querySelector("h1")
headChange.style.color = "red"


appTest()
console.log(appH1)
console.log (app2)

app.appendChild(appH1)
app.appendChild(para)
app.appendChild(btn2)
console.log(btn)
