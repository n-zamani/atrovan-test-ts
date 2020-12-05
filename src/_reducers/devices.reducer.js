import { DevicesConstants } from '../_constants';

const initialState = {
  gettingDevices: false,
  deviceList: [],
  hasNext: false,
  page: 0,
  devicesError: null,
  gettingDevice: false,
  latitude: null,
  longitude: null,
  deviceError: null
};

export function devices(state = initialState, action) {
  switch (action.type) {
    case DevicesConstants.GET_DEVICES_REQUEST:
      return {
        ...state,
        gettingDevices: true,
        devicesError: null,
      };

    case DevicesConstants.GET_DEVICES_SUCCESS:
      return {
        ...state,
        gettingDevices: false,
        deviceList: [...state.deviceList, ...action.list],
        hasNext: action.hasNext,
        page: state.page + 1,
      };

    case DevicesConstants.GET_DEVICES_ERROR:
      return {
        ...state,
        gettingDevices: false,
        devicesError: action.error,
        hasNext: false,
      };

    case DevicesConstants.GET_DEVICE_REQUEST:
      return {
        ...state,
        gettingDevice: true,
        deviceError: null,
      };

    case DevicesConstants.GET_DEVICE_SUCCESS:
      return {
        ...state,
        gettingDevice: false,
        latitude: action.latitude,
        longitude: action.longitude,
      };

    case DevicesConstants.GET_DEVICE_ERROR:
      return {
        ...state,
        gettingDevice: false,
        deviceError: action.error,
      };

    case DevicesConstants.RESET_DEVICES:
      return {
        ...state,
        gettingDevices: false,
        deviceList: [],
        hasNext: false,
        page: 0,
        devicesError: null,
      };

    default:
      return state;
  }
}
