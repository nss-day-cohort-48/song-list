import { Playlist } from "./Playlist.js"
import { SongList } from "./SongList.js"

const container = document.querySelector("#container")

const renderHTML = () => {
    container.innerHTML = `
        <h1>Playlist Maker</h1>

        <article>
            ${ SongList() }
        </article>

        <article>
            ${ Playlist() }
        </article>
    `
}

renderHTML()