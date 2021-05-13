import { getPlaylist, getSongs } from "./database.js"

export const Playlist = () => {
    const playlist = getPlaylist()
    const songs = getSongs()

    let html = "<h2>Playlist</h2>"

    for (const songId of playlist) {
        const song = songs.find(song => song.id === songId)

        html += `<div>${song.title} by ${song.artist}</div>`
    }

    return html
}