

## Project Name

Lyric Mood 

## Project Description

Find lyric of your favorite song by song title, artist name. Choose a background.

## API and Data Sample

{
    "lyrics": "Remember those walls I built\r\nWell baby they're tumbling down\r\nAnd they didn't even put up a fight\r\nThey didn't even make a sound\r\nI found a way to let you in\n\nBut I never really had a doubt\n\nStanding in the light of your halo\n\nI've got my angel now\n\n\n\nIt's like I've been awakened\n\nEvery rule I had you breakin'\n\nIt's the risk that I'm takin'\n\nI ain't never gonna shut you out\n\n\n\nEverywhere I'm looking now\n\nI'm surrounded by your embrace\n\nBaby I can see your halo\n\nYou know you're my saving grace\n\nYou're everything I need and more\n\nIt's written all over you face\n\nBaby I can feel your halo\n\nPray it won't fade away\n\n\n\n(I can feel your halo... halo...) halo\n\n(I can see your) halo... (halo...) halo-o\n\n(I can feel your) halo... (halo...) halo-o-o\n\n(I can see your) halo... (halo...) halo... uhoo\n\n\n\nHit me like a ray of sun\n\nBurning through my darkest nights\n\nYou're the only one that I want\n\nThink I'm addicted to your light\n\n\n\nI swore I'd never fall again\n\nBut this don't even feel like fallin'\n\nGravity can't forget\n\nTo pull me back to the ground again\n\n\n\nIt's like I've been awakened\n\nEvery rule I had you breakin'\n\nIt's the risk that I'm takin'\n\nI ain't never gonna shut you out\n\n\n\nEverywhere I'm looking now\n\nI'm surrounded by your embrace\n\nBaby I can see you halo\n\nYou know you're my saving grace\n\nYou're everything I need and more\n\nIt's written all over you face\n\nBaby I can feel your halo\n\nPray it won't fade away (#)\n\n\n\n(I can feel your halo... halo...) halo\n\n(I can see your) halo... (halo...) halo-o\n\n(I can feel your) halo... (halo...) halo-o-o\n\n(I can see your) halo... (halo...) halo\n\n\n\n(I can feel your halo [uhoo] halo...) halo\n\n(I can see your) halo... (halo...) halo-o\n\n(I can feel your) halo... (halo...) halo-o-o\n\n(I can see your) halo... (halo...) halo... uhoo\n\n\n\nHalo uhooo\n\nhalo uhooo uhooo uhoo-oo-oo-oo-oo-oo\n\nuhoo-oo-oo-oo-oo-oo-oo oo oo\n\n\n\nEverywhere I'm looking now\n\nI'm surrounded by your embrace\n\nBaby I can see you halo\n\nYou know you're my saving grace\n\nYou're everything I need and more\n\nIt's written all over you face\n\nBaby I can feel your halo\n\nPray it won't fade away\n\n\n\n(I can feel your halo... halo...) halo\n\n(I can see your) halo... (halo...) halo-o\n\n(I can feel your) halo... (halo...) halo-o-o\n\n(I can see your) halo... (halo...) halo\n\n\n\n(I can feel your halo [uhoo] halo...) halo\n\n(I can see your) halo... (halo...) halo-o\n\n(I can feel your) halo... (halo...) halo-o-o\n\n(I can see your) halo... (halo...) halo... uhoo..."
}

## Wireframes

Click [here](https://whimsical.com/5UiBri3qYTqynVforAL6Wb) to go to my Wireframe profile. 

### MVP/PostMVP

#### MVP 

- Find and use external api 
- Let user to search lyric by input song title
- Render data on page 
- Set up different backgrounds images for each emoji


#### PostMVP  

- Allow user to choose background by clicking on emoji
- Add second API with random backgrounds

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Dec 10-12| Prompt / Wireframes / Priority Matrix / Timeframes | Completed
|Dec 13| Project Approval | Completed
|Dec 13| Core Application Structure (HTML, CSS, etc.) | Completed
|Dec 14| Pseudocode / actual code | Incomplete
|Dec 15| Initial Clickable Model  | Incomplete
|Dec 16| MVP | Incomplete
|Dec 17| Presentations | Incomplete

## Priority Matrix

Click [here](https://whimsical.com/PpLRSTCxDjrs46hFrFoGJK)

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form, API searching | L | 3hrs| 5.5hrs | 4.5hrs |
| HTML,CSS page setup| M | 3.5hrs |3hrs | 3hrs|
| Working with API | H | 3hrs|  3hrs |  3hrs |
| DOM manipulations | M | 2.5hrs | 2.5hrs | 2hrs |
| Header and search/user input | M |2.5hrs | 3.5hrs  |  3.5hrs |
| JS setting up | H | 4hrs |  5.5hrs | 5hours |
| Set up background choice | M | 4.5hrs|  4.5hrs | 4hrs  |
| Debugging | H | 3.5hrs | 3.5hrs  | 3.5hrs  |
| polishing design, CSS adjastement| M | 3hrs |  4hrs | 4hrs  |
| Total | H | 29.5hr | 35hrs  | 33.5hrs  |

## Code Snippet

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

## Change Log
 
 A lot of changes were made during stylisation to improve functionality, about 50% of JS codes. So it follow restyling in general.
