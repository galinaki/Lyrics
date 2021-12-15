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


/// background change
document.getElementById("romantic").onclick = backgroundRomantic
function backgroundRomantic() {
  document.body.style.backgroundImage = "url(https://static.vecteezy.com/system/resources/thumbnails/003/627/000/small_2x/red-heart-seamless-background-free-vector.jpg)"
}

document.getElementById("sad").onclick = backgroundSad
function backgroundSad() {
  document.body.style.backgroundImage = "url(https://thumbs.dreamstime.com/b/depression-boy-doodles-heartbreak-doodle-sad-boy-sad-depressed-boy-sitting-depression-boy-doodle-heartbreak-sad-doodle-man-160858233.jpg)"
  let sad = document.querySelector(".lyrics-text")
  sad.style.backgroundColor = "rgb(247, 229, 207)"
  sad.style.opacity = "0.8"
}

document.getElementById("calm").onclick = backgroundCalm
function backgroundCalm() {
  document.body.style.backgroundImage = "url(https://previews.123rf.com/images/talanaart/talanaart1903/talanaart190300022/124173538-seamless-cute-colorful-pattern-with-light-birds-feathers-the-design-creates-calm-light-mood-the-desi.jpg)"
}

document.getElementById("happy").onclick = backgroundHappy
function backgroundHappy() {
  document.body.style.backgroundImage = "url(https://img.freepik.com/free-vector/cute-funny-bee-flowers-cartoon-kids-seamless-pattern-vector-hand-drawn-cartoon-kawaii-character-illustration-icon-cute-bee-honey-flower-cartoon-kawaii-child-seamless-pattern-concept_92289-3280.jpg?size=626&ext=jpg)"
}

document.getElementById("inspired").onclick = backgroundInspired
function backgroundInspired() {
  document.body.style.backgroundImage = "url(https://st2.depositphotos.com/4155807/11835/v/950/depositphotos_118353114-stock-illustration-funny-childish-vector-seamless-texture.jpg)"
}

document.getElementById("grumpy").onclick = backgroundGrumpy
function backgroundGrumpy() {
  document.body.style.backgroundImage = "url(https://thumbs.dreamstime.com/b/funny-vector-set-grumpy-cat-funny-vector-set-grumpy-cat-165375919.jpg)"
}