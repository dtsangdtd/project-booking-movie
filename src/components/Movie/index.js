import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class MoviePage extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div className='movieItem'>
        <img src={movie.hinhAnh} />
        <div className='movieTitle'>
          <h5>{movie.tenPhim}</h5>
        </div>
        <div className='buttonXem'>
          <Link className='btn btn-danger' to={`/detail/${movie.maPhim}`}>
            XEM
          </Link>
        </div>
      </div>
    );
  }
}
