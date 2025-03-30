const app = document.getElementById("app")

const appTest = () => console.log(app)

const appH1 = document.createElement("h1")
appH1.textContent = "app"

const para = document.createElement("p")
para.textContent = "parapara"

const btn = document.getElementById("btn")
btn.addEventListener('click', () => {
  alert("push")
})

const btn2 = document.createElement("button")
btn2.textContent = "Button2"
btn2.addEventListener("click", () => console.log("btn2 ok"))
export {app, appTest, appH1, para, btn, btn2}

