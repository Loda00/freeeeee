class Store {

  static getData() {
    const data = localStorage.getItem('data')
    return typeof data === 'string' ? JSON.parse(data) : data
  }

  static setData(data) {
    localStorage.setItem('data', JSON.stringify(data))
  }

  static cleanData() {
    localStorage.setItem('data', JSON.stringify([]))
  }

}

export { Store }
