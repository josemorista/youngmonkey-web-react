import axios from 'axios'

import {apiURL, oapiURL} from '../consts'

export const api = axios.create({
  baseURL: apiURL,
  headers: {'Authorization': localStorage.getItem('token')}
})

export const oapi = axios.create({
  baseURL: oapiURL
})
