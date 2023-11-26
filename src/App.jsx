// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import MovieDetails from './components/MovieDetails';
import Cast from './components/Cast';
import Reviews from './components/Reviews';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movies" exact component={Movies} />
        <Route path="/movies/:movieId" exact component={MovieDetails} />
        <Route path="/movies/:movieId/cast" exact component={Cast} />
        <Route path="/movies/:movieId/reviews" exact component={Reviews} />
      </Switch>
    </Router>
  );
};

export default App;
