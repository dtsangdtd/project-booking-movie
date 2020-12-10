import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from '../../../../components/Loader';
import { actDetailPageAPI } from './modules/actions';
function DetailPage(props) {
  useEffect(() => {
    const { id } = props.match.params;
    props.getDetailMovie(id);
  }, []);
  const renderTable = () => {
    const { data } = props;
    if (data) {
      return data.lichChieu.map((item) => {
        return (
          <tr key={item.maLichChieu}>
            <td>{item.thongTinRap.tenCumRap}</td>
            <td>{item.thongTinRap.tenRap}</td>
            <td>{new Date(item.ngayChieuGioChieu).toLocaleTimeString()}</td>
            <td>{new Date(item.ngayChieuGioChieu).toLocaleDateString()}</td>
            <td>
              <button className='btn btn-primary'>Booking</button>
            </td>
          </tr>
        );
      });
    }
  };
  const { loading, data } = props;
  if (loading) return <Loader />;

  return (
    <div className='detailMovie'>
      <div className='full__background'>
        <img src={data && data.hinhAnh} alt='' style={{ height: '450px' }} />
        <div className='overlay__gradient' />
      </div>
      <div className='form__info container-fluid'>
        <div className='row'>
          <div className='movie__poster col-3'>
            <div className='poster__img'>
              <img
                style={{ width: 220, height: 300 }}
                src={data && data.hinhAnh}
                alt=''
              />
              <div
                className='play__btn'
                data-toggle='modal'
                data-target='.bd-example-modal-lg'
              >
                <i className='fa fa-play' />
              </div>
            </div>
          </div>
          <div className='movie__info col-6'>
            <div className='showtime'>
              {new Date(data && data.ngayKhoiChieu).toLocaleDateString()}
            </div>
            <span className='name'>{data && data.tenPhim}</span>
            <p className='during'>120 phút</p>
            <a href='#movieTheater'>
              <button className='bookTicket-btn'>Mua Vé</button>
            </a>
          </div>
        </div>
      </div>
      {/* {renderTable()} */}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    loading: state.DetailMovieReducer.loading,
    data: state.DetailMovieReducer.data,
  };
};
const mapDispatchToProps = (dispatch) => ({
  getDetailMovie: (id) => {
    dispatch(actDetailPageAPI(id));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);
