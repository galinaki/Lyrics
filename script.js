const domain = "https://api.lyrics.ovh/v1"

let lyrics = document.querySelector(".lyrics-text")
let songInput = document.querySelector("#song-title")

async function fetchLyrics(artist, title) {
  try {
    let url = `${domain}/${artist}/${title}`
    const res = await axios.get(url)

    const lyricsText = res.data.lyrics
    console.log(res.data)

    // lyricsText.forEach((lyricsText) => {
    showLyricsText(lyricsText)
    // })
  } catch (error) {
    displayErrorMessage()
  }
}

function showLyricsText(data) {
  console.log(data)
  const text = document.createElement("h5")
  text.innerText = `${data}`
  lyrics.appendChild(text)
}

//console.log(fetchLyrics("adele", "hello"))


const searchForm = document.querySelector(".search-list")
const searchInput = document.querySelector("#song-artist")
const searchTitle = document.querySelector("#song-title")

searchForm.addEventListener("submit", handleSubmit)

function handleSubmit(e) {
  e.preventDefault()
  console.log(searchInput.value)
  let inputValue = searchInput.value
  searchInput.value = ""
  let searchValue = searchTitle.value
  searchTitle.value = ""

  fetchLyrics(inputValue, searchValue)
  removeText()
}

function removeText() {
  lyrics.innerText = ""
}

function displayErrorMessage() {
  const errorMessage = document.createElement("h4")
  errorMessage.innerText = `Check your typing and try again`
  lyrics.appendChild(errorMessage)
  const errorGif = document.createElement("img")
  errorGif.src = "https://cdn.dribbble.com/users/1175431/screenshots/6188233/404-error-dribbble-800x600.gif"
  errorGif.alt = "404 error"
  errorGif.style.display = "block"
  errorGif.style.margin = "0 auto"
  lyrics.appendChild(errorGif)

}
