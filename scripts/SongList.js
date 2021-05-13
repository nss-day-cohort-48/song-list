import { getSongs } from "./database.js"


const container = document.querySelector("#container")

container.addEventListener(
    "click",
    (clickEvent) => {
        if (clickEvent.target.name === "song") {
            const songId = parseInt(clickEvent.target.value)
            addSongToPlayList(songId)
        }
    }
)

const songs = getSongs()

export const SongList = () => {
    const songRadioButtons = songs.map(
        (song) => {
            return `<div>
                <input type="radio" name="song" value="${song.id}" /> ${song.title} by ${song.artist}
            </div>
            `
        }
    )

    let html = songRadioButtons.join("")

    html += "<button>Add to Playlist</button>"

    return html
}