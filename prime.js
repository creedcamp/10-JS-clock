const colorTime = setInterval(() => {
  let TI = new Date()
  let seconds = TI.getSeconds()
  let minutes = TI.getMinutes()
  let hours = TI.getHours()

  function pad(i) {
    if (i < 10) {
      return "0" + i
    } else {
      return i
    }
  }
  if (hours > 12) {
    hours = hours - 12
  }
  hours = pad(hours)
  minutes = pad(minutes)
  seconds = pad(seconds)

  console.log(seconds, pad(seconds))
  // if (seconds < 10) {

  let showTime = hours + ":" + minutes + ":" + seconds
  let cTimeColor = "#" + hours + minutes + seconds
  document.body.style.backgroundColor = cTimeColor
  // let colors = "#count".color[i]
  document.querySelector("#color").innerHTML = cTimeColor
  document.querySelector("#count").innerHTML = showTime
}, 1000)
