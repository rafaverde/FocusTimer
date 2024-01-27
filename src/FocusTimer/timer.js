import state from "./state.js"
import * as elem from "./elements.js"
import { reset } from "./actions.js"
import * as sounds from "./sounds.js"

export function countdown() {
  clearTimeout(state.countdownId)

  if (!state.isRunning) {
    return
  }

  let minutes = Number(elem.minutes.textContent)
  let seconds = Number(elem.seconds.textContent)

  seconds--

  if (seconds < 0) {
    seconds = 59
    minutes--
  }

  if (minutes < 0) {
    sounds.kitchenTimer.play()
    sounds.bgAudio.pause()
    reset()
    return
  }

  updateDisplay(minutes, seconds)

  state.countdownId = setTimeout(() => countdown(), 1000)
}

export function updateDisplay(minutes, seconds) {
  minutes = minutes ?? state.minutes
  seconds = seconds ?? state.seconds

  elem.minutes.textContent = String(minutes).padStart(2, "0")
  elem.seconds.textContent = String(seconds).padStart(2, "0")
}
