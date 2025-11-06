import axios from 'axios'
import { BACKEND_API_URL } from '@/globals.ts'
import { retrieveRawInitData } from '@tma.js/sdk-vue'

let initData = ''

try {
  initData = retrieveRawInitData() ?? ''
} catch (e) {
  console.log('Error get raw init data: ', e)
}

const $API = axios.create({
  baseURL: BACKEND_API_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `tma ${initData}`,
  },
})

export { $API }
