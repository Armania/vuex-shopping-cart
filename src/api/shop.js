/**
 * Mocking client-server processing
 */
const _products = [
  { 'id': 1, 'title': 'Tablet', 'price': 500.01, 'inventory': 2 },
  { 'id': 2, 'title': 'Vuex T-shirt', 'price': 10.99, 'inventory': 10 },
  { 'id': 3, 'title': 'Vuex Master Class', 'price': 19.99, 'inventory': 5 }
]

export default {
  getProducts (cb) {
    setTimeout(() => cb(_products), 100)
  },

  buyProducts (products, cb, errorCb) {
    setTimeout(() => {
      // random checkout proccess simulator.
      (Math.random() > 0.5 || navigator.webdriver)
        ? cb()
        : errorCb()
    }, 100)
  }
}
