
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "../Api/index";
import requests from "../Api/Requests";
import SearchedResults from "../components/movie/SearchedResults";
import Layout from "../containers/Layout";
import useStylesSearch from "../styles/components/StyleSearch";
const Search = () => {

  const { movie } = useSelector((state) => ({ ...state }));
  const searchinputvalue = movie.inputvalue;
  const [movies, setMovies] = useState([]);
  const classes = useStylesSearch();
  useEffect(() => {
    const fetchDataAxios = async () => {
      if (searchinputvalue.length > 0) {
        const request = await axios.get(
          `${requests.fetchSearchMovies}${"&query="}${searchinputvalue}`
        );
        setMovies(request.data.results);
        return request;
      }
    };
    fetchDataAxios();
  }, [searchinputvalue]);

  return (
    <Layout>
     
      <div className={classes.root}>
        <div className={classes.espacio}></div>
        {movies.length > 0 ? (
          <>
            <SearchedResults movies={movies} />
           
          </>
        ) : (
         ""
        )}
      </div>
      
     
    </Layout>
  );
};



export default Search;
