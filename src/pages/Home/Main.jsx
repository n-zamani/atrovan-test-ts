import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DevicesActions } from '../../_actions';
import InfiniteScroll from 'react-infinite-scroller';
import { DeviceCards } from '../../components';
import { HomeWrapper } from './style';
import CircularProgress from '@material-ui/core/CircularProgress';

const Main = () => {
  const { gettingDevices, deviceList, hasNext, devicesError, page } = useSelector((state) => state.devices);
  const token = useSelector((state) => state.authentication.token);
  const dispatch = useDispatch();

  let items = [];

  useEffect(() => {
    dispatch(DevicesActions.resetDevices());
  }, []);

  useEffect(() => {
    if (!deviceList.length) {
      dispatch(DevicesActions.getDevices(page, token));
    }
  }, [deviceList]);

  const loadMore = () => {
    if (hasNext && !gettingDevices) {
      dispatch(DevicesActions.getDevices(page, token));
    }
  };

  deviceList.map((device) => {
    items.push(<DeviceCards device={device} key={device.id.id} />);
  });

  return (
    <HomeWrapper>
      <InfiniteScroll pageStart={0} loadMore={loadMore} hasMore={hasNext && !gettingDevices}>
        <section className="devices-wrapper">{items}</section>
      </InfiniteScroll>
      {devicesError ? (
        <div>{devicesError}</div>
      ) : gettingDevices ? (
        <CircularProgress className="loader" color="inherit" />
      ) : (
        ''
      )}
    </HomeWrapper>
  );
};

export { Main as HomePage };
