import {httpGet, httpPost} from '../utils/httpHelp'
export function getUserInfo (data) {
  return httpGet('/user/getUserInfo', data)
}
export function getSmsCode (data) {
  return httpPost('/user/getSmsCode', 'application/json; charset=utf-8', 'json', data)
}
