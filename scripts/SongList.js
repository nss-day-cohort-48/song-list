import { getSongs, setChosenSong, addSongToPlayList } from "./database.js"


const container = document.querySelector("#container")

container.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.name === "song") {
            const songId = parseInt(changeEvent.target.value)
            setChosenSong(songId)
        }
    }
)

container.addEventListener(
    "click",
    (clickEvent) => {
        if (clickEvent.target.id === "submitButton") {
            addSongToPlayList()
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

    html += "<button id='submitButton'>Add to Playlist</button>"

    return html
}