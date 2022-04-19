import { useState } from "react";
import axios from "../Api";

const useGetMovies = (fetchUrl) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    try {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  return { movies, loading, error, getMovies };
};

export default useGetMovies;
