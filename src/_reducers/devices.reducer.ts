import { DevicesActionTypes, DevicesConstants, IDevicesState } from '../_types';

const initialState: IDevicesState = {
  gettingDevices: false,
  devicesInfo: { deviceList: [], hasNext: false },
  page: 0,
  devicesError: { error: null },
  gettingDevice: false,
  coordinates: { latitude: null, longitude: null },
  deviceError: { error: null },
};

export function devices(state = initialState, action: DevicesActionTypes): IDevicesState {
  switch (action.type) {
    case DevicesConstants.GET_DEVICES_REQUEST:
      return {
        ...state,
        gettingDevices: true,
        devicesError: { error: null },
      };

    case DevicesConstants.GET_DEVICES_SUCCESS:
      return {
        ...state,
        gettingDevices: false,
        devicesInfo: { deviceList: [...state.devicesInfo.deviceList, ...action.payload.deviceList], hasNext: action.payload.hasNext },
        page: state.page + 1,
      };

    case DevicesConstants.GET_DEVICES_ERROR:
      return {
        ...state,
        gettingDevices: false,
        devicesError: action.payload,
        devicesInfo: {...state.devicesInfo, hasNext: false}
      };

    case DevicesConstants.GET_DEVICE_REQUEST:
      return {
        ...state,
        gettingDevice: true,
        deviceError: {error: null},
      };

    case DevicesConstants.GET_DEVICE_SUCCESS:
      return {
        ...state,
        gettingDevice: false,
        coordinates: action.payload
      };

    case DevicesConstants.GET_DEVICE_ERROR:
      return {
        ...state,
        gettingDevice: false,
        deviceError: action.payload,
      };

    case DevicesConstants.RESET_DEVICES:
      return {
        ...state,
        gettingDevices: false,
        devicesInfo: {deviceList: [], hasNext: false},
        page: 0,
        devicesError: {error: null},
      };

    default:
      return state;
  }
}
