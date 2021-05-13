const database = {
    playlist: [3, 4, 5],
    songs: [
        {
            id: 1,
            title: "Don't Threaten Me With A Good Time",
            artist: "Panic! At The Disco"
        },
        {
            id: 2,
            title: "Crazy In Love",
            artist: "Beyonce"
        },
        {
            id: 3,
            title: "No Rain",
            artist: "Blind Melon"
        },
        {
            id: 4,
            title: "Supa Dupa Fly",
            artist: "Missy Elliot"
        },
        {
            id: 5,
            title: "Sorry You're Not A Winner",
            artist: "Enter Shikari"
        }
    ],
    chosenSong: 0
}

export const setChosenSong = (id) => {
    database.chosenSong = id
}

export const addSongToPlayList = () => {
    database.playlist.push(database.chosenSong)
}

export const getSongs = () => {
    return [...database.songs]
}

export const getPlaylist = () => {
    return [...database.playlist]
}
