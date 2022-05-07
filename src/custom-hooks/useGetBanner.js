import { useState } from "react";
import axios from "../Api";
import requests from "../Api/Requests";
const useGetBanner = () =>{
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [movieBanner, setMovieBanner] = useState({});
    const getBanner =async   () => {
        try {
          const request = await   axios.get(requests.fetchNetflixOriginals);     
           
            const random=Math.floor(Math.random()* request.data.results.length -1)
            //console.log("banner"+JSON.stringify(request.data.results[random]))
            
            setMovieBanner(request.data.results[random]); 
    
            setLoading(true);   
            return request       
          }            
         
         
         catch (error) {
          setLoading(false);
          setError(error);
        }
      };


      return { movieBanner, loading, error, getBanner};

}
export default useGetBanner;