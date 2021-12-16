const domain = "https://api.lyrics.ovh"

// let lyrics = document.querySelector(".lyrics-text")
// let songInput = document.querySelector("#song-title")

// async function fetchLyrics(artist, title) {
//   try {
//     let url = `${domain}/${artist}/${title}`
//     const res = await axios.get(url)

//     const lyricsText = res.data.lyrics
//     console.log(res.data)

//     // lyricsText.forEach((lyricsText) => {
//     showLyricsText(lyricsText)
//     // })
//   } catch (error) {
//     displayErrorMessage()
//   }
// }

// function showLyricsText(data) {
//   console.log(data)
//   const text = document.createElement("h5")
//   text.innerText = `${data}`
//   lyrics.appendChild(text)
// }

// //console.log(fetchLyrics("adele", "hello"))


// const searchForm = document.querySelector(".search-list")
// const searchInput = document.querySelector("#song-artist")
// const searchTitle = document.querySelector("#song-title")

// searchForm.addEventListener("submit", handleSubmit)

// function handleSubmit(e) {
//   e.preventDefault()
//   console.log(searchInput.value)
//   let inputValue = searchInput.value
//   searchInput.value = ""
//   let searchValue = searchTitle.value
//   searchTitle.value = ""

//   fetchLyrics(inputValue, searchValue)
//   removeText()
// }

const searchForm = document.querySelector(".search-list")
const searchInput = document.querySelector("#input")
const result = document.querySelector(".lyrics-text")

searchForm.addEventListener("submit", e => {
  e.preventDefault()
  let searchValue = searchInput.value.trim()
  if (!searchValue) {
    alert("Nothing to search. Please input below")
  } else {
    beginToSearch(searchValue)
  }
})
///search function
async function beginToSearch(searchValue) {
  let searchResult = await fetch(`${domain}/suggest/${searchValue}`)
  const data = await searchResult.json()
  console.log(data)
  displayData(data)
}
//display search result
function displayData(data) {
  result.innerHTML = `
  <ul class = "songs">
    ${data.data
      .map(song => ` <li>
                    <div>
                    <strong>${song.artist.name}</strong> - ${song.title}
                    </div>
                    <span data-artist="${song.artist.name}"
                    data-songtitle="${song.title}">Get Lyrics</span>
                  </li>`
      )
      .join("")
    }
  </ul>
  `;
}
//get lyrics text
result.addEventListener("click", e => {
  const clickedElement = e.target
  if (clickedElement.tagName === 'SPAN') {
    const artist = clickedElement.getAttribute("data-artist")
    const songTitle = clickedElement.getAttribute("data-songtitle")

    showLyrics(artist, songTitle)
  }
})

async function showLyrics(artist, songTitle) {
  const response = await fetch(`${domain}/v1/${artist}/${songTitle}`)
  const data = await response.json()
  const lyrics = data.lyrics.replace(/(\r\n|\r|\n)/g, '<br>')
  result.innerHTML = `<h4>
                        <strong>${artist}</strong> - ${songTitle}
                      </h4>
                      <p>${lyrics}</p>`

}
// The RegEx is used with the replace() method to replace all the line breaks in string with <br>.
// The pattern /(\r\n|\r|\n)/ checks for line breaks.
// The pattern /g checks across all the string occurrences.






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
  let romantic = document.querySelector(".lyrics-text")
  romantic.style.backgroundColor = "rgb(238, 172, 208, 0.5)"

}

document.getElementById("sad").onclick = backgroundSad
function backgroundSad() {
  document.body.style.backgroundImage = "url(https://thumbs.dreamstime.com/b/depression-boy-doodles-heartbreak-doodle-sad-boy-sad-depressed-boy-sitting-depression-boy-doodle-heartbreak-sad-doodle-man-160858233.jpg)"
  let sad = document.querySelector(".lyrics-text")
  sad.style.backgroundColor = "rgb(247, 229, 207, 0.5)"
  // sad.style.opacity = "0.8"
}

document.getElementById("calm").onclick = backgroundCalm
function backgroundCalm() {
  let calm = document.querySelector(".lyrics-text")
  calm.style.backgroundColor = "rgb(254, 249, 231, 0.7)"
  document.body.style.backgroundImage = "url(https://previews.123rf.com/images/talanaart/talanaart1903/talanaart190300022/124173538-seamless-cute-colorful-pattern-with-light-birds-feathers-the-design-creates-calm-light-mood-the-desi.jpg)"
}

document.getElementById("happy").onclick = backgroundHappy
function backgroundHappy() {
  let happy = document.querySelector(".lyrics-text")
  happy.style.backgroundColor = "rgb(253, 254, 254 , 0.9)"
  document.body.style.backgroundImage = "url(https://img.freepik.com/free-vector/cute-funny-bee-flowers-cartoon-kids-seamless-pattern-vector-hand-drawn-cartoon-kawaii-character-illustration-icon-cute-bee-honey-flower-cartoon-kawaii-child-seamless-pattern-concept_92289-3280.jpg?size=626&ext=jpg)"
}

document.getElementById("inspired").onclick = backgroundInspired
function backgroundInspired() {
  let inspired = document.querySelector(".lyrics-text")
  inspired.style.backgroundColor = "rgb(212, 230, 241, 0.6)"
  document.body.style.backgroundImage = "url(https://st2.depositphotos.com/4155807/11835/v/950/depositphotos_118353114-stock-illustration-funny-childish-vector-seamless-texture.jpg)"
}

document.getElementById("grumpy").onclick = backgroundGrumpy
let grumpy = document.querySelector(".lyrics-text")
grumpy.style.backgroundColor = "rgb(235, 222, 240, 0.6)"
function backgroundGrumpy() {
  document.body.style.backgroundImage = "url(https://thumbs.dreamstime.com/b/funny-vector-set-grumpy-cat-funny-vector-set-grumpy-cat-165375919.jpg)"
}

document.getElementById("likeSign").onclick = like
function like() {
  let imageID = document.getElementById("like")
  imageID.value = "Liked"
  if (imageID.src.match("https://cdn0.iconfinder.com/data/icons/essentials-solid-glyphs-vol-1/100/Heart-Love-Like-512.png")) {
    imageID.src = "https://cdn4.iconfinder.com/data/icons/set-1/32/__1-256.png";

  } else {
    imageID.src = "https://cdn0.iconfinder.com/data/icons/essentials-solid-glyphs-vol-1/100/Heart-Love-Like-512.png"
  }

} 