import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from '../../../../components/Loader';
import MoviePage from '../../../../components/Movie/index';
import { actListMovieAPI } from './modules/actions';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
class ListMoviePage extends Component {
  componentDidMount() {
    this.props.listMovieAPI();
  }
  renderHTML = () => {
    const { ListMovie } = this.props;
    if (ListMovie && ListMovie.length > 0) {
      return ListMovie.map((movie, index) => {
        return <MoviePage key={movie.maPhim} movie={movie} />;
      });
    }
  };
  render() {
    const { loading } = this.props;
    if (loading) {
      return <Loader />;
    }
    return (
      <div class='container' id='lichchieu'>
        <div class='row'>
          <OwlCarousel
            className='owl-theme'
            dots={false}
            loop
            margin={5}
            nav
            items={4}
          >
            {this.renderHTML()}
          </OwlCarousel>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  loading: state.ListMovieReducer.loading,
  ListMovie: state.ListMovieReducer.data,
});
const mapDispatchToProps = (dispatch) => {
  return {
    listMovieAPI: () => {
      dispatch(actListMovieAPI());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListMoviePage);
