async function getJson() {
  const res = await fetch('../hello.json')
  const data = await res.json()
  const msgElm = document.getElementById("msg")
  msgElm.innerHTML = data.msg
}

export {getJson}
