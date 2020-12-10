import {
  LIST_MOVIE_REQUEST,
  LIST_MOVIE_SUCCESS,
  LIST_MOVIE_FAILED,
} from './constants';
let initialState = {
  loading: false,
  data: null,
  err: null,
};
const ListMovieReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case LIST_MOVIE_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };
    case LIST_MOVIE_SUCCESS:
      state.loading = false;
      state.data = actions.payload;
      state.err = null;
      return { ...state };

    case LIST_MOVIE_FAILED:
      state.loading = false;
      state.data = null;
      state.err = actions.payload;
      return { ...state };

    default:
      return { ...state };
  }
};
export default ListMovieReducer;
