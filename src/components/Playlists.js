import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  cardcontent: {
    textAlign: 'left',
    
  },
  cardlink: {
    textDecoration: 'none',
    fontSize: 18,
  }
}));

export default function Playlists() {
  const classes = useStyles();
  const [items, setItems] = useState([])
  useEffect(() => {
      let apikey = 'AIzaSyCynEimqIYhaiF1sfLaN4MteC_qYjgl3kw';
      let url = `https://www.googleapis.com/youtube/v3/playlists?part=snippet&CcontentDetails&channelId=UC_x5XG1OV2P6uZZ5FSM9Ttw&maxResults=32&key=${apikey}`;
      fetch(url)
      .then(response => response.json())
      // .then(json => console.log(json))
      .then(json => setItems(json.items))
  }, [])


  return (
    <div className={classes.root}>
    <Container maxWidth="lg">
        <br />
      <Grid container spacing={3}>

          {items.map(item => (

               <Grid item xs={3} key={item.id}>
          
               <Card className={classes.root}>
             <CardActionArea>
               <CardMedia
                 component="img"
                 alt="Contemplative Reptile"
                 height="140"
                 image={item.snippet.thumbnails.standard.url}
                 title="Contemplative Reptile"
               />
               <CardContent className={classes.cardcontent}>
                 <Typography gutterBottom variant="h5" component="h5">
                 <Link className={classes.cardlink} to={`/playlist/${item.id}`} >{item.snippet.title}</Link>
                 </Typography>
                 <Button variant="contained" color="primary">
                 <Link to={`/playlist/${item.id}`} style={{color: '#fff'}}>View Playlists</Link>
      </Button>
               </CardContent>
               
 
             </CardActionArea>
           </Card>
       
               </Grid>
          ))}
        
       
       
      </Grid>
      </Container>
    </div>
  );
}