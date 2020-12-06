import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DevicesActions } from '../../_actions';
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { withRouter } from 'react-router-dom';
import { DeviceWrapper } from './style';
import CircularProgress from '@material-ui/core/CircularProgress';

const Main = (props) => {
  const { latitude, longitude, gettingDevice, deviceError } = useSelector((state) => state.devices);
  const token = useSelector((state) => state.authentication.token);
  const dispatch = useDispatch();
  const { id } = props.match.params;

  const Icon = new L.Icon({
    iconUrl: icon,
    iconAnchor: [10, 40],
    popupAnchor: [2, -40],
    shadowUrl: iconShadow,
  });

  useEffect(() => {
    dispatch(DevicesActions.getDevice(id, token));
  }, []);

  return (
    <DeviceWrapper>
      {gettingDevice ? (
        <CircularProgress color="inherit" />
      ) : !gettingDevice && deviceError ? (
        <div>{deviceError}</div>
      ) : latitude && longitude && !gettingDevice ? (
        <MapContainer center={[latitude, longitude]} zoom={20} className="map-container" scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[latitude, longitude]} icon={Icon}>
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
