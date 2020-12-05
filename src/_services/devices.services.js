export const DevicesServices = {
  getDevices,
  getDevice,
};

async function getDevices(page, token) {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/tenant/deviceInfos?pageSize=10&page=${page}&deviceProfileId=3b00e220-2668-11eb-85ee-f936949cce2a`,
    {
      method: 'GET',
      headers: {
        'X-Authorization': `Bearer ${token}`,
      },
    }
  ).then(
    (res) => {
      if (res.status === 200) {
        return res.json()
      } else {
        return Promise.reject(res.json())
      }
    },
    (error) => Promise.reject(error)
  );

  return response;
}

async function getDevice(id, token) {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/plugins/telemetry/DEVICE/${id}/values/timeseries`, {
    method: 'GET',
    headers: {
      'X-Authorization': `Bearer ${token}`,
    },
  }).then(
    (res) => {
      if (res.status === 200) {
        return res.json();
      } else if (res.status === 404) {
        return Promise.reject(res.text());
      } else {
        return Promise.reject(res.json());
      }
    },
    (error) => Promise.reject(error)
  );

  return response;
}
