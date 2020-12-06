import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import {
  DevicesActionTypes,
  DevicesConstants,
  IDeviceData,
  IDeviceResponse,
  IDevicesData,
  IDevicesErrorMsg,
  IDevicesResponse,
  IDevicesState,
  IListFormat,
} from '../_types';
import { DevicesServices } from '../_services';

type DevicesThunk<ReturnType = void> = ThunkAction<ReturnType, IDevicesState, null, DevicesActionTypes>;

export function getDevicesAction(data: IDevicesData): DevicesThunk {
  return (dispatch: Dispatch) => {
    dispatch(request());

    DevicesServices.getDevices(data).then(
      (response) => {
        dispatch(
          success({
            deviceList: response.data.map((d: IListFormat) => {
              return { id: d.id.id, name: d.name, type: d.type };
            }),
            hasNext: response.hasNext,
          })
        );
      },
      async (error) => {
        const e = await error;
        dispatch(fail(e.message ? { error: e.message } : { error: e }));
      }
    );
  };

  function request(): DevicesActionTypes {
    return {
      type: DevicesConstants.GET_DEVICES_REQUEST,
    };
  }

  function success(payload: IDevicesResponse): DevicesActionTypes {
    return {
      type: DevicesConstants.GET_DEVICES_SUCCESS,
      payload,
    };
  }

  function fail(payload: IDevicesErrorMsg): DevicesActionTypes {
    return {
      type: DevicesConstants.GET_DEVICES_ERROR,
      payload,
    };
  }
}

export function getDeviceAction(data: IDeviceData): DevicesThunk {
  return (dispatch: Dispatch) => {
    dispatch(request());

    DevicesServices.getDevice(data).then(
      (response) => {
        dispatch(success({ latitude: response.latitude[0].value, longitude: response.longitude[0].value }));
      },
      async (error) => {
        const e = await error;
        dispatch(fail(e.message ? { error: e.message } : { error: e }));
      }
    );
  };

  function request(): DevicesActionTypes {
    return {
      type: DevicesConstants.GET_DEVICE_REQUEST,
    };
  }

  function success(payload: IDeviceResponse): DevicesActionTypes {
    return {
      type: DevicesConstants.GET_DEVICE_SUCCESS,
      payload,
    };
  }

  function fail(payload: IDevicesErrorMsg): DevicesActionTypes {
    return {
      type: DevicesConstants.GET_DEVICE_ERROR,
      payload,
    };
  }
}

export function resetDevices(): DevicesThunk {
  return (dispatch: Dispatch) => {
    dispatch(reset());
  };

  function reset(): DevicesActionTypes {
    return {
      type: DevicesConstants.RESET_DEVICES,
    };
  }
}
