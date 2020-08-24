import React, {useState, useEffect} from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';


import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext'
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
      width: '80%',
    },
    content: {
      textAlign:"left",
      marginTop: -10
    },
    cover: {
       width: '20%',
      height: 150
    },
    mcard: {
        display: 'flex',
      flexDirection: 'row',

    },

    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
      },
      playIcon: {
        height: 38,
        width: 38,
      },
      videocontent: {
          textAlign:'left'
      }
  }));
  

function PlaylistDetail(props) {
  const classes = useStyles();
  const theme = useTheme();

  const [video, setVideo] = useState([])

    

    useEffect(() => {
        let itemid = props.match.params.id;

        let apikey = 'AIzaSyCynEimqIYhaiF1sfLaN4MteC_qYjgl3kw';
        let url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${itemid}&key=${apikey}`;
        
        fetch(url)
        .then(response => response.json())
        //.then(json => console.log(json.items))
        .then(json => setVideo(json.items))
    }, [])

   
  return (

    <div>
        <br />
    <Container maxWidth="md">
        <Grid container spacing={3}>
        
        {video.map((data, index) => (

        <Grid item xs={12}>
        <div>
            <iframe src={`https://www.youtube.com/embed/${data.id}`} 
            style={{width: '100%', height: '450px'}}></iframe>

            <div className={classes.videocontent}>
            <Typography variant="h4" component="h4">
            {data.snippet.title}
            </Typography>

            Comment : {data.statistics.commentCount}
        like : {data.statistics.likeCount}
        dislike : {data.statistics.dislikeCount}
        View : {data.statistics.viewCount}
        Favourite : {data.statistics.favoriteCount}


        <p>{data.snippet.description}</p>
            </div>




          </div>
        </Grid>
        ))}
      </Grid>
        </Container>
    </div>
    
  );
}

export default PlaylistDetail;
