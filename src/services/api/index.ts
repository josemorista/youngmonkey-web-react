import axios from 'axios'

import {apiURL} from '../consts'

export const api = axios.create({
  baseURL: apiURL + '/api',
})

export const oapi = axios.create({
  baseURL: apiURL + '/oapi'
})
