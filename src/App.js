import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header'
import Playlists from './components/Playlists'
import PlaylistDetail from './components/PlaylistDetail'
import Video from './components/Video'

function App() {
  return (

    <Router>
    <div className="App">
      < Header />
      <Switch>
        <Route exact path="/" component={Playlists} />
        <Route exact path="/playlist/:id" component={PlaylistDetail} />
        <Route exact path="/video/:id" component={Video} />
      </Switch>
    </div>
    </Router>
    
  );
}

export default App;
