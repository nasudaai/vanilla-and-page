const txtArea = document.getElementById("textarea")


const cNum = () => {textarea.addEventListener('change', (e) => {
  const log = e.target.value
  const replaceLog = log.replace(/\n/g, '')
  const len = replaceLog.length
  console.log(log ,len)
  return len
})}

const length = cNum()
const logLen = document.getElementById("log")

console.log(logLen)
txtArea.addEventListener("change", (e) => {

 const length = e.target.value 
 logLen.textContent = length

})
export {txtArea, cNum, length, logLen}
