const domain = "https://api.lyrics.ovh/v1"

let lyrics = document.querySelector(".lyrics-text")
let songInput = document.querySelector("#song-title")

async function fetchLyrics(artist, title) {
  try {
    let url = `${domain}/${artist}/${title}`
    const res = await axios.get(url)

    const lyricsText = res.data.lyrics
    console.log(lyricsText)

    lyricsText.forEach((lyricsTextObj) => {
      showLyricsText(lyricsTextObj)
    })
  } catch (error) {
    console.log("ERROR")
  }
}

function showLyricsText(data) {
  const text = document.createElement("h5")
  text.innerText = `${lyricsText}`
  lyrics.appendChild(text)
}

//console.log(fetchLyrics("adele", "hello"))


const searchForm = document.querySelector(".search-list")
const searchInput = document.querySelector("#song-title")

searchForm.addEventListener("submit", handleSubmit)

function handleSubmit(e) {
  e.preventDefault()
  console.log(searchInput.value)
  let inputValue = searchInput.value
  searchInput.value = ""
  fetchLyrics(inputValue)
  removeText()
}

function removeText() {
  lyrics.innerText = ""
}

// function suggestions() {
//   let variant= searchInput.value()
//   if (!variant) {
//     removeText()
//     return
//   } console.log(`Search possible variant for ${variant}`)
//   $.getJSON(`${domain}/suggest/${variant}`)
// } 