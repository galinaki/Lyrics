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
    displayErrorMessage()
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
                    <span id="choise" data-artist="${song.artist.name}"
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
  try {
    const response = await fetch(`${domain}/v1/${artist}/${songTitle}`)
    const data = await response.json()
    const lyrics = data.lyrics.replace(/(\r\n|\r|\n)/g, '<br>')
    result.innerHTML = `<h4>
                        <strong>${artist}</strong> - ${songTitle}
                      </h4>
                      <p>${lyrics}</p>
                      <footer>
    <div id="likeSign">Like <img id="like"
        src="https://cdn0.iconfinder.com/data/icons/essentials-solid-glyphs-vol-1/100/Heart-Love-Like-512.png"
        alt="heart">
    </div>
  </footer>`
  } catch (error) {
    displayErrorMessage
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


//background change
document.getElementById("click").onclick = clickDefault
function clickDefault() {
  document.body.style.backgroundImage = "url(https://i.pinimg.com/originals/59/9c/f9/599cf9614e51cf87cf25818bbca3226d.png)"
}



document.getElementById("romantic").onclick = backgroundRomantic
function backgroundRomantic() {
  document.body.style.backgroundImage = "url(https://i.ytimg.com/vi/QJCYkdIMtLQ/maxresdefault.jpg)"
  let romantic = document.querySelector(".lyrics-text")
  romantic.style.backgroundColor = "rgb(238, 172, 208, 0.4)"
}

document.getElementById("sad").onclick = backgroundSad
function backgroundSad() {
  document.body.style.backgroundImage = "url(https://xenzone.com/wp-content/uploads/2020/03/AdobeStock_181640661-scaled.jpeg)"
  let sad = document.querySelector(".lyrics-text")
  sad.style.backgroundColor = "rgb(247, 229, 207, 0.4)"
  // sad.style.opacity = "0.8"
}

document.getElementById("calm").onclick = backgroundCalm
function backgroundCalm() {
  let calm = document.querySelector(".lyrics-text")
  calm.style.backgroundColor = "rgb(254, 249, 231, 0.4)"
  document.body.style.backgroundImage = "url(https://images.unsplash.com/photo-1499810631641-541e76d678a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FsbXxlbnwwfHwwfHw%3D&w=1000&q=80)"
}

document.getElementById("happy").onclick = backgroundHappy
function backgroundHappy() {
  let happy = document.querySelector(".lyrics-text")
  happy.style.backgroundColor = "rgb(253, 254, 254 , 0.4)"
  document.body.style.backgroundImage = "url(https://wallpapercave.com/wp/wp3226105.jpg)"
}

document.getElementById("inspired").onclick = backgroundInspired
function backgroundInspired() {
  let inspired = document.querySelector(".lyrics-text")
  inspired.style.backgroundColor = "rgb(212, 230, 241, 0.4)"
  document.body.style.backgroundImage = "url(https://intermountainhealthcare.org/-/media/images/modules/blog/posts/2018/05/exercise-motivation.jpg?mw=1600)"
}

document.getElementById("grumpy").onclick = backgroundGrumpy
let grumpy = document.querySelector(".lyrics-text")
grumpy.style.backgroundColor = "rgb(235, 222, 240, 0.4)"
function backgroundGrumpy() {
  document.body.style.backgroundImage = "url(https://wallpapercave.com/wp/wp4344879.jpg)"
}

///animation

let animItems = document.querySelectorAll("._anim-items")

if (animItems.length > 0) {

  window.addEventListener("scroll", animOnScroll)

  function animOnScroll() {
    for (let i = 0; i < animItems.length; i++) {
      const animItem = animItems[i];
      const animItemHeight = animItem.offsetHeight
      const animItemOffset = offset(animItem).top
      const animStart = 5;

      let animItemPoint = window.innerHeight - animItemHeight / animStart

      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart
      }

      if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
        animItem.classList.add("_active")
      } else {
        animItem.classList.remove("_active")
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect()
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
    scrollTop = window.pageYOffset || document.documentElement.scrollTo
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }
  setTimeout(() => {

  }, 300);

  animOnScroll()
}

