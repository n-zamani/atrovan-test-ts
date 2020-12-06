import { useEffect, FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDeviceAction } from '../../_actions';
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { DeviceWrapper } from './style';
import CircularProgress from '@material-ui/core/CircularProgress';
import { AppState } from '../../_helpers/store';

const Main: FC<RouteComponentProps<any>> = (props) => {
  const {
    coordinates: { latitude, longitude },
    gettingDevice,
    deviceError: {error},
  } = useSelector((state: AppState) => state.devices);
  const token = useSelector((state: AppState) => state.authentication.user.token);
  const dispatch = useDispatch();
  const { id } = props.match.params;

  const Icon = new L.Icon({
    iconUrl: icon,
    iconAnchor: [10, 40],
    popupAnchor: [2, -40],
    shadowUrl: iconShadow,
  });

  useEffect(() => {
    dispatch(getDeviceAction({ id, token }));
  }, []);

  return (
    <DeviceWrapper>
      {gettingDevice ? (
        <CircularProgress color="inherit" />
      ) : !gettingDevice && error ? (
        <div>{error}</div>
      ) : latitude && longitude && !gettingDevice ? (
        <MapContainer center={[+latitude, +longitude]} zoom={20} className="map-container" scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[+latitude, +longitude]} icon={Icon}>
            <Popup>
              {latitude}, {longitude}
            </Popup>
          </Marker>
        </MapContainer>
      ) : (
        ''
      )}
    </DeviceWrapper>
  );
};

const DevicePageWithRouter = withRouter(Main);

export { DevicePageWithRouter as DevicePage };
