import WECHAT from './wechat'
import HTTP from './http'
import UiConfig from './ui'
import DEFAULT from './default'
let USER_ID = 4
let USE_TYPE = 'pro'
let CONFIG = {}
if (USE_TYPE === 'dev') {
  CONFIG = {
    WECHAT: WECHAT.dev,
    HTTP: HTTP.dev,
    USER_ID: USER_ID,
    UI: UiConfig,
    DEFAULT: DEFAULT
  }
}
if (USE_TYPE === 'pro') {
  CONFIG = {
    WECHAT: WECHAT.pro,
    HTTP: HTTP.pro,
    USER_ID: USER_ID,
    UI: UiConfig,
    DEFAULT: DEFAULT
  }
}
export default CONFIG
