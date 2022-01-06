class Cache {
  // 将数据存入缓存
  setCache(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  // 将数据从缓存取出
  getCache(key: string) {
    const value = window.localStorage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }

  // 删除缓存某一个数据
  deleteCache(key: string) {
    window.localStorage.removeItem(key)
  }

  // 删除全部缓存
  deleteAllCache() {
    window.localStorage.clear()
  }
}

export default new Cache()
