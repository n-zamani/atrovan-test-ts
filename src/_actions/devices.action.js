import { DevicesConstants } from '../_constants';
import { DevicesServices } from '../_services';

export const DevicesActions = {
  getDevices,
  getDevice,
  resetDevices,
  resetDevice
};

function getDevices(page, token) {
  return (dispatch) => {
    dispatch(request());

    DevicesServices.getDevices(page, token).then(
      (response) => {
        dispatch(success(response.data, response.hasNext));
      },
      async (error) => {
        const e = await error;
        dispatch(fail(e.message ? e.message : e));
      }
    );
  };

  function request() {
    return {
      type: DevicesConstants.GET_DEVICES_REQUEST,
    };
  }

  function success(list, hasNext) {
    return {
      type: DevicesConstants.GET_DEVICES_SUCCESS,
      list,
      hasNext,
    };
  }

  function fail(error) {
    return {
      type: DevicesConstants.GET_DEVICES_ERROR,
      error,
    };
  }
}

function getDevice(id, token) {
  return (dispatch) => {
    dispatch(request());

    DevicesServices.getDevice(id, token).then(
      (response) => {
        dispatch(success(response.latitude[0].value, response.longitude[0].value));
      },
      async (error) => {
        const e = await error;
        dispatch(fail(e.message ? e.message : e));
      }
    );
  };

  function request() {
    return {
      type: DevicesConstants.GET_DEVICE_REQUEST,
    };
  }

  function success(latitude, longitude) {
    return {
      type: DevicesConstants.GET_DEVICE_SUCCESS,
      latitude,
      longitude,
    };
  }

  function fail(error) {
    return {
      type: DevicesConstants.GET_DEVICE_ERROR,
      error,
    };
  }
}

function resetDevices() {
  return dispatch => {
    dispatch(reset())
  }

  function reset() {
    return {
      type: DevicesConstants.RESET_DEVICES
    }
  }
}

function resetDevice() {
  return (dispatch) => {
    dispatch(reset());
  };

  function reset() {
    return {
      type: DevicesConstants.RESET_DEVICE,
    };
  }
}