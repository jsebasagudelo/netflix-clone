import {
  Dialog,
  DialogActions,
  DialogContent,
  Button,
  Grid,
  Typography,
  Container,
 
  makeStyles,

} from "@material-ui/core";
import { PlayArrow, Add, Check } from "@material-ui/icons";
import CloseIcon from "@material-ui/icons/Close";
import { base_url_Img as base_url } from "../../utils/constant";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import {  useDispatch } from "react-redux";
import {setMoviesFavorites} from  "../../actions/index"
import  {truncate} from  '../../utils/Utilidades'
const ModalInfo = ({ show, onClose, movie }) => {
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const classes = useStyles();
  const dispatch = useDispatch();

  const {
    backdrop_path,
    title,
    name,
    overview,
    id,
    vote_average,
    first_air_date,
    media_type,
    poster_path,
  } = movie;


  const addMyList = () =>{
     
      dispatch(setMoviesFavorites(movie))
  }



  return (
    <div>
      <Dialog
        fullScreen={matchesXS}
        open={show}
        onClose={onClose}
        PaperProps={{
          style: {
            padding: 0,
            backgroundColor: "#000",
            height: matchesXS ? "100vh" : "75vh",
            border: matchesXS ? "none" : "1px solid #fff",
          },
        }}
        fullWidth
        maxWidth="md"
        scroll={matchesXS ? "body" : "paper"}
      >
       
        <DialogContent>
          <DialogActions
            style={{
              zIndex: 20,
              position: "absolute",
              right: "10px",
              paddingTop:"0px"
            }}
          >
            <CloseIcon className={classes.btn} onClick={onClose} />
          </DialogActions>
          <div
            className={classes.root}
            style={{
              backgroundImage: backdrop_path
                ? `url(${base_url}${backdrop_path})`
                : `url(${base_url}${poster_path})`,
            }}
          >
            <div className={classes.inner} />
          </div>
          <Container maxWidth="xl" className={classes.content}>
            <Grid
              container
              direction="column"
              justifyContent="flex-end"
              
              spacing={2}
              style={{ height: "100%", marginTop: matchesXS && "300px" }}
            >
              <Grid item>
                <Typography variant="h1" className={classes.title}>{title ? title : name}</Typography>
              </Grid>
              <Grid item container spacing={2}>
                <Grid item>
                  <Button
                    className={classes.play__btn}
                    startIcon={<PlayArrow color="primary" />}
                  >
                    Play
                  </Button>
                </Grid>
                <Grid item>
                  <Button className={classes.add__btn} startIcon={<Add />}
                  onClick={addMyList}>
                    My List
                  </Button>
                  
                </Grid>
              </Grid>
              <Grid item container spacing={2}>
                <Grid item>
                  <Typography variant="body2" className={classes.rate}>
                    Rating: {vote_average * 10}%
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" className={classes.date}>
                    {first_air_date?.substr(0, 4)}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="body2" color="inherit" className={classes.overview} >
                   {truncate(overview)} 
                  </Typography>
              </Grid>
            </Grid>
          </Container>
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "400px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  inner: {
    backgroundImage:
      "linear-gradient(to top,rgba(0,0,0) 0,rgba(0,0,0,0) 40%,rgb(0 0 0 / 20%) 100%)",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "400px",
  },
  content: {
    height: "100%",
    position: "relative",
    zIndex: "10",
    paddingBottom: "15px",
    [theme.breakpoints.down("sm")]: {
      height: "90%",
    },
  },
  rate: {
    color: "#33eb91",
  },
  date: {
    color: "#a3a3a3",
  },
  play__btn: {
    background: "#fff",
    height: " 40px",
    "& .MuiButton-label": {
      color: "#111 !important",
    },
    "&.MuiButton-root:hover": {
      backgroundColor: `rgb(255 255 255 / 90%) !important`,
    },
  },
  add__btn: {
    color: "#fff",
    height: " 40px",
    background: "rgb(133 133 133 / 60%)",
    "&.MuiButton-root:hover": {
      backgroundColor: `rgb(133 133 133 / 80%) !important`,
    },
  },
  already_add__btn: {
    height: " 40px",
    background: "#26ff2fd4",
    "&.MuiButton-root:hover": {
      background: "#26ff2f80 !important",
    },
  },
  btn: {
    color: "#fff",
    cursor: "pointer",
    "&:hover": {
      color: "red",
    },
  },
  overview:{
      color: "#fff"
  },
  title:{
    color: "#fff",
    fontSize: 30,
  }
}));

export default ModalInfo;
