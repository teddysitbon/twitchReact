import axios from 'axios';

const ID = 'xbb6293q6pyz9w8fyyiks0ne07jvg3';
const API = axios.create({
    headers: {
        'Client-ID': ID
    }
});

export function getTopGames () {
    return API.get('https://api.twitch.tv/helix/games/top');
}

export function getGames () {
    return API.get('https://api.twitch.tv/helix/games/top');
}