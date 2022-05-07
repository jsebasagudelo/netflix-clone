import {LOGOUT,LOGGED_IN_USER} from  '../actions/types'

const initialState = {
    userInfo: [],    
  };

  export const userReducer = (state = initialState, action) => {
      switch(action.type)
      {
        case LOGGED_IN_USER:
            return {...state,userInfo:action.payload}
        case LOGOUT:
            return  action.payload

        default:
             return state;
      }
  }

