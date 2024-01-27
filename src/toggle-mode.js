let darkMode = true

const buttonToggle = document.getElementById("toggle_mode")

buttonToggle.addEventListener("click", (event) => {
  document.documentElement.classList.toggle("light")

  const mode = darkMode ? "light" : "dark"

  event.currentTarget.querySelector(
    "span"
  ).textContent = `O ${mode} mode está ativado!`

  darkMode = !darkMode
})
