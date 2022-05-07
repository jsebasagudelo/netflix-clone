import { SET_MOVIES ,SEARCH_INPUT_VALUE,SET_MOVIES_FAVORITE,LOGOUT, LOGGED_IN_USER} from "./types";

export const setMovies = (payload) => ({
    type: SET_MOVIES,
    payload,
});
export const setSearchInputValue = (payload) => ({
    type: SEARCH_INPUT_VALUE,
    payload,
});
export const setMoviesFavorites = (payload) => ({
    type: SET_MOVIES_FAVORITE,
    payload,
});

export const setUserInfo = (payload) => ({
    type: LOGGED_IN_USER,
    payload,
});






