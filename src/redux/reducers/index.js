import { combineReducers } from 'redux';
import ListMovieReducer from '../../containers/HomeTemplate/HomePage/ListMoviePage/modules/reducers';
import DetailMovieReducer from '../../containers/HomeTemplate/HomePage/DetailPage/modules/reducers';
const rootReducer = combineReducers({
  ListMovieReducer,
  DetailMovieReducer,
});
export default rootReducer;
