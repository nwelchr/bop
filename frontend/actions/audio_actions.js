export const PLAY = "PLAY";
export const PLAY_SONG = "PLAY_SONG";
export const PAUSE = "PAUSE";

export const play = () => ({
    type: PLAY
});

export const playSong = (song, params) => ({
    type: PLAY_SONG,
    song,
    params
});

export const pause = () => ({
    type: PAUSE
});