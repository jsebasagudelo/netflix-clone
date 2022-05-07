import { Typography, MenuItem } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Select from "@material-ui/core/Select";
import axios from "../Api";
import requests from "../Api/Requests";
import useGetBanner from "../custom-hooks/useGetBanner";
import BannerBase from "../components/base/BannerBase";
import { genero_accion } from "../utils/constant";
import Row from "../components/Row";
import Layout from "../containers/Layout";
import useStyleGenero from "../styles/components/StyleGenero";
const Genero = () => {
  const classes = useStyleGenero();
  const [generlist, setGenerlist] = useState([]);
  const [value, setValue] = useState(0);

  const [movie, setMovie] = useState({});
  const { getBanner } = useGetBanner();
  useEffect(() => {
    const fetchGenres = async () => {
      const request = await axios.get(requests.fetchGenders);
      setGenerlist(request.data.genres);
    };
    fetchGenres();
  }, [value]);

  useEffect(() => {
    getBanner();
  }, []);

  const handleChange = (event) => {
    let id = event.target.value;
    console.log(event);
    if (event.target.value == 0) {
      id = genero_accion;
    }
    setValue(id);
  };

  const fetchGenre = async (id) => {
    console.log(id);
    const request = await axios.get(
      `${
        requests.fetchGender
      }${"&with_genres="}${id}${"&sort_by=vote_average.desc&vote_count.gte=10"}`
    );

    setMovie(request.data.results);

    return request;
  };

  return (
    <>
      <Layout>
        <div className={classes.contenedor}>
          <BannerBase></BannerBase>

          <div className={classes.root}>
            {/* movie.length > 0 ? <MovieList key={value} data={movie} /> : ""*/}
            <Select
                MenuProps={MenuProps}
                className={classes.select}
                inputProps={{
                  classes: {
                    icon: classes.icon,
                    root: classes.root,
                  },
                }}
                value={value}
                onChange={handleChange}
              >
                {generlist.map((genero) => (
                  <MenuItem key={genero.id} value={genero.id}>
                    {genero.name}
                  </MenuItem>
                ))}
             
                <MenuItem value="0">Generos</MenuItem>
              </Select>
            
            <Row
              id="1"
              titleMovie=""
              fetchUrl={requests.fetchActionMovies}
              with_genres={value}
            />
          </div>
        </div>
      </Layout>
    </>
  );
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default Genero;
Genero.displayName = "Row Movie Generos";
