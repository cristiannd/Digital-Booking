export const UserLocalStorage = {
  get() {
    const user = window.localStorage.getItem('userDigitalBooking')
    return JSON.parse(user)
  },
  set(user) {
    window.localStorage.setItem('userDigitalBooking', JSON.stringify(user))
  },
  remove() {
    window.localStorage.removeItem('userDigitalBooking')
  },
}
