new EventSource('/esbuild').addEventListener('change', () => location.reload())
const app = document.getElementById("app")

const appTest = () => console.log(app)

const appH1 = document.createElement("h1")
appH1.textContent = "app"

const para = document.createElement("p")
para.textContent = "parapara"
export {app, appTest, appH1, para}
