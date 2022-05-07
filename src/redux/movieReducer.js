
import { SET_MOVIES,SEARCH_INPUT_VALUE,SET_MOVIES_FAVORITE } from "../actions/types";

const initialState = {
  list: [],
  inputvalue:"",
  listFavorites:[]
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return { ...state, list: action.payload };

      case SEARCH_INPUT_VALUE:
      return { ...state, inputvalue: action.payload };

      case SET_MOVIES_FAVORITE:
        return { ...state, 
            listFavorites: [...state.listFavorites,action.payload ] };

    default:
      return state;
  }
};



