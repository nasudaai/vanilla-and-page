//new EventSource('/esbuild').addEventListener('change', () => location.reload())
console.log("App!!")

const appFunc = () => {
  console.log("app.js")
}


const app = document.getElementById("app")
const header = document.createElement("h1")
header.textContent = "App header"
app.appendChild(header)


export { appFunc, app}
