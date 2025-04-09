new EventSource('/esbuild').addEventListener('change', () => location.reload())

import { appTest, appH1, para, btn, btn2} from "./main.js"
import {getJson} from "./getJson.js"
import {txtArea, cNum} from "./textarea.js"


alert("test-a")

const headChange = document.querySelector("h1")
headChange.style.color = "red"


appTest()
console.log(appH1)


getJson()
console.log(txtArea)


cNum()
