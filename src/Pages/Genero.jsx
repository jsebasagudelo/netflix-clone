import {  Typography,  makeStyles,  MenuItem,  InputLabel,} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import axios from "../Api";
import requests from "../Api/Requests";
import MovieList from "../components/movieList";
import useGetBanner from "../custom-hooks/useGetBanner";
import BannerBase from "../components/base/BannerBase";
import  {genero_accion} from  '../utils/constant'
import Banner from "../components/Banner";
import Row from "../components/Row";
import ComponentRender from "../components/render";
const Genero = () => {
  const classes = useStyles();
  const [generlist, setGenerlist] = useState([]);
  const [value, setValue] = useState(0);
  const [titile, setTitle] = useState("");
  const [movie, setMovie] = useState({});
  const { movieBanner, loading, error, getBanner } = useGetBanner();
  useEffect(() => {
    const fetchGenres = async () => {
      const request = await axios.get(requests.fetchGenders);
      setGenerlist(request.data.genres);
    };
    fetchGenres();
    
   // fetchGenre(genero_accion)
   
  }, [value]);


  useEffect ( ()=>{
 getBanner();
  },[])



  const handleChange = (event) => {
    let id=event.target.value 
    console.log(event)  
    if (event.target.value == 0) {
      id=genero_accion;   
     
    }
    setValue(id)

    //fetchGenre(id)
    //console.log(value);
  };

  const fetchGenre = async (id) => {
    console.log(id)
    const request = await axios.get(
      `${
        requests.fetchGender
      }${"&with_genres="}${id}${"&sort_by=vote_average.desc&vote_count.gte=10"}`
    );
    //const request=await axios.get("discover/movie?api_key=a3f405c037b3877af91a264045307fa3&language=en-US&with_genres=37&sort_by=vote_average.desc&vote_count.gte=10")
   // console.log("ID"+value);
   // console.log("respuesta:" + JSON.stringify(request.data.results));
    setMovie(request.data.results);
   // console.log("data: "+request.data.results)
    return request;
  };

  return (
    <>
     
       <BannerBase>
       <div className={classes.genero}>
          <Typography variant="h4" color="inherit">
            Peliculas  
          </Typography>

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
            {/* <MenuItem value="1"> Foo 1</MenuItem>*/}
            <MenuItem value="0">Generos</MenuItem>
          </Select>
          <FormControl className={classes.formControl}></FormControl>
        </div>
       </BannerBase>
      <div className={classes.root}>
        

      
      { /* movie.length > 0 ? <MovieList key={value} data={movie} /> : ""*/}
    
       <Row
       id="1"
       titleMovie=""
       fetchUrl={requests.fetchActionMovies}
       with_genres={value}
     />
     
     

    
        

 
      </div>

    </>
  );
};
const useStyles = makeStyles((theme) => ({
  root: {
    color: "#fff",
    marginLeft: theme.spacing(4),
  },
  select: {
    "&:before": {
      borderColor: "#fff",
    },
    "&:after": {
      borderColor: "#fff",
    },
    "&:not(.Mui-disabled):hover::before": {
      borderColor: "white",
    },
  },
  icon: {
    fill: "#fff",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    color: "#fff",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
    backgroundColor: "#b3b3b3",
  },
  colorBlanco: {
    color: "#fff",
  },
  genero:{
    
    display:"flex" ,
    gap: 30 /* distancia*/,
  }
}));

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


