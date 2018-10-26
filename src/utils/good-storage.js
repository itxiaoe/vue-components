import storage from 'good-storage'
// import cookie from 'vue-cookies'

/*
* localStorage
* storage.set(key,val)
* storage.get(key, def)
* */

export function SetLocalStorage (key, val) {
  storage.set(key, val)
}

export function GetLocalStorage (key, def) {
  return storage.get(key, def)
}

export function RemoveLocalStorage (key) {
  storage.remove(key)
}

/*
* sessionStorage
* storage.session.set(key, val)
* storage.session.get(key, def)
* */
export function SetSessionStorage (key, val) {
  storage.session.set(key, val)
}
export function GetSessionStorage (key, def) {
  return storage.session.get(key, def)
}
export function RemoveSessionStorage (key) {
  storage.session.remove(key)
}
/*
* cookies
* VueCookies
* cookie.set()
* cookie.get()
* cookie.remove()
* */

