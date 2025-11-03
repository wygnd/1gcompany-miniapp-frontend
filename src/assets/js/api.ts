import axios from 'axios'
import { BACKEND_API_URL } from '@/globals.ts'
import { retrieveRawInitData } from '@tma.js/sdk-vue'

const $API = axios.create({
  baseURL: BACKEND_API_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `tma ${retrieveRawInitData()}`,
  },
})

export { $API }
