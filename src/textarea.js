const txtArea = document.getElementById("textarea")


const cNum = () => {textarea.addEventListener('change', (e) => {
  const log = e.target.value
  const replaceLog = log.replace(/\n/g, '')
  const len = replaceLog.length
  console.log(log ,len)
})}

export {txtArea, cNum}
