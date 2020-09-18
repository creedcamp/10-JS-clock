const colorTime = setInterval(() => {
  let TI = new Date()
  let seconds = TI.getSeconds()
  let minutes = TI.getMinutes()
  let hours = TI.getHours()
  if (hours > 12) {
    hours = hours() - 12
  } else {
    hours = hours
  }
  ;(hours) => (hours = 0 ? "0" + hours : hours)
  ;(minutes) => (minutes = 0 ? minutes : "0" + minutes)
  ;(seconds) => (seconds = 0 ? seconds : "0" + seconds)
  let showTime = hours + ":" + minutes + ":" + seconds
  // let colors = "#count".color[i]
  document.querySelector("#count").innerHTML = showTime
}, 1000)

const change = setTimeout(() => {
  if (colorTime) {
  }
  // let colors = "#count".color
}, 2000)
