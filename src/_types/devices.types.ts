export enum DevicesConstants {
  GET_DEVICES_REQUEST = 'GET_DEVICES_REQUEST',
  GET_DEVICES_SUCCESS = 'GET_DEVICES_SUCCESS',
  GET_DEVICES_ERROR = 'GET_DEVICES_ERROR',
  GET_DEVICE_REQUEST = 'GET_DEVICE_REQUEST',
  GET_DEVICE_SUCCESS = 'GET_DEVICE_SUCCESS',
  GET_DEVICE_ERROR = 'GET_DEVICE_ERROR',
  RESET_DEVICES = 'RESET_DEVICES',
}

export interface IDevicesData {
  page: number;
  token: string | null;
}

export interface IListFormat {
  id: {id: string};
  name: string;
  type: string;
}

export interface IDevicesResponse {
  deviceList: IListFormat[];
  hasNext: boolean;
}

export interface IDevicesErrorMsg {
  error: string | null;
}

export interface IDeviceData {
  id: string;
  token: string | null;
}

export interface IDeviceResponse {
  latitude: string | null;
  longitude: string | null;
}

export interface IDevicesState {
  gettingDevices: boolean;
  devicesInfo: IDevicesResponse;
  page: number;
  devicesError: IDevicesErrorMsg;
  gettingDevice: boolean;
  coordinates: IDeviceResponse;
  deviceError: IDevicesErrorMsg;
}

interface IDevicesRequest {
  type: typeof DevicesConstants.GET_DEVICES_REQUEST;
}

interface IDevicesSuccess {
  type: typeof DevicesConstants.GET_DEVICES_SUCCESS;
  payload: IDevicesResponse;
}

interface IDevicesError {
  type: typeof DevicesConstants.GET_DEVICES_ERROR;
  payload: IDevicesErrorMsg;
}

interface IDeviceRequest {
  type: typeof DevicesConstants.GET_DEVICE_REQUEST;
}

interface IDeviceSuccess {
  type: typeof DevicesConstants.GET_DEVICE_SUCCESS;
  payload: IDeviceResponse;
}

interface IDeviceError {
  type: typeof DevicesConstants.GET_DEVICE_ERROR;
  payload: IDevicesErrorMsg;
}

interface IResetDevices {
  type: typeof DevicesConstants.RESET_DEVICES;
}

export type DevicesActionTypes = (IDevicesRequest | IDevicesSuccess | IDevicesError | IDeviceRequest | IDeviceSuccess | IDeviceError | IResetDevices)