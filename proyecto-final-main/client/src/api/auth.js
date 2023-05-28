import axios from 'axios'
axios.defaults.withCredentials = false

export async function onRegistration(registrationData) {
  return await axios.post(
    'http://127.0.0.1:8001/api/register',
    registrationData
  )
}

export async function onLogin(loginData) {
  return await axios.post('http://127.0.0.1:8001/api/login', loginData)
}

export async function onLogout() {
  return await axios.get('http://127.0.0.1:8001/api/logout')
}

export async function fetchProtectedInfo() {
  return await axios.get('http://127.0.0.1:8001/api/protected')
}
export async function fetchRoles(email) {
  return await axios.post('http://127.0.0.1:8001/api/prueba',email)
}

