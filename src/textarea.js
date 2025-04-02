const txtArea = document.getElementById("textarea")


const cNum = () => {textarea.addEventListener('change', (e) => {
  const log = e.target.value
  const len = e.target.value.length
  console.log(log ,len)
})}

export {txtArea, cNum}
