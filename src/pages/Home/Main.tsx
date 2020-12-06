import { useEffect, FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDevicesAction, resetDevices } from '../../_actions';
import InfiniteScroll from 'react-infinite-scroller';
import { DeviceCards } from '../../components';
import { HomeWrapper } from './style';
import CircularProgress from '@material-ui/core/CircularProgress';
import { AppState } from '../../_helpers/store';

const Main: FC = () => {
  const { gettingDevices, devicesInfo: {deviceList, hasNext}, devicesError: {error}, page } = useSelector((state: AppState) => state.devices);
  const token = useSelector((state: AppState) => state.authentication.user.token);
  const dispatch = useDispatch();

  let items: React.ReactNode[] = [];

  useEffect(() => {
    dispatch(resetDevices());
    return () => {
      dispatch(resetDevices());
    }
  }, [])

  useEffect(() => {
    if (!deviceList.length) {
      dispatch(getDevicesAction({page, token}));
    }
  }, [deviceList]);

  const loadMore = () => {
    if (hasNext && !gettingDevices) {
      dispatch(getDevicesAction({page, token}));
    }
  };

  deviceList.forEach((device) => {
    items.push(<DeviceCards device={device} key={device.id.id} />);
  });

  return (
    <HomeWrapper>
      <InfiniteScroll pageStart={0} loadMore={loadMore} hasMore={hasNext && !gettingDevices}>
        <section className="devices-wrapper">{items}</section>
      </InfiniteScroll>
      {error ? (
        <div>{error}</div>
      ) : gettingDevices ? (
        <CircularProgress className="loader" color="inherit" />
      ) : (
        ''
      )}
    </HomeWrapper>
  );
};

export { Main as HomePage };
