export const AuthenticationServices = {
  login
}

async function login(username, password) {

  const data = {
    username,
    password
  };

  const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(res => {
    if (res.status === 200) {
      return res.json()
    } else {
      return Promise.reject(res.json())
    }
  }, error => Promise.reject(error));

  return response;
  
}