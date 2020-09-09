function setDate() {
  let TI = new Date()
  let seconds = TI.getSeconds()
  console.log(seconds)
}
setInterval(setDate, 1000)
