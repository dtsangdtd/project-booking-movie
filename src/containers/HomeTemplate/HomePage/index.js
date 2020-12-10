import React, { Component } from 'react';
import Loader from '../../../components/Loader';
import ListMoviePage from './ListMoviePage';
import MovieCarousel from './MovieCarousel/MovieCarousel';
import Slider from './Slider';

export default class HomePage extends Component {
  render() {
    return (
      <div>
        {/* <Loader /> */}
        <Slider />
        <MovieCarousel />
      </div>
    );
  }
}
