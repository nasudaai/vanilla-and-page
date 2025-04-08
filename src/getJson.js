async function getJson() {
  const res = await fetch('../hello.json')
  const data = await res.json()
  const msgElm = document.getElementById("msg")
  msgElm.innerHTML = data.msg
}

const getArr = async () => {
  const res = await fetch("../hello.json")
  const data = await res.json()
  console.log(data["word-arr"])

  console.log(data.word_arr)
}

export {getJson, getArr}
