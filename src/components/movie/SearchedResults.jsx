import { Grid } from "@material-ui/core";
import MovieCard from "./MovieCard";


const SearchedResults = ({ movies }) => {
  return (
    <Grid container style={{background:"#111",padding:"20px"}}>
      {movies.map((d, idx) => (
        <Grid
          item
          key={idx}
          xs={6}
          sm={4}
          md={3}
          lg={2}
          style={{ marginBottom: "60px" }}
        >
           <MovieCard movie={d} />
        </Grid>
      ))}
    </Grid>
  );
};

export default SearchedResults;