import  {combineReducers} from  'redux'
import  {movieReducer} from  '../redux/movieReducer'
import { userReducer } from '../redux/userReducer';

const  rootReducer= combineReducers({
    movie: movieReducer,
    user:userReducer
});


export default rootReducer




