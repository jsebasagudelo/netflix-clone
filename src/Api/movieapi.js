import axios from  './index'
import  {API_KEY} from  '../utils/constant'
export const getMovie = (id) => axios.get(`/movie/${id}?api_key=${API_KEY}&language=en-US`);
export const getTrendingWithgGnres = (id) => axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US&with_genres=${id}${"&sort_by=vote_average.desc&vote_count.gte=10"}`);