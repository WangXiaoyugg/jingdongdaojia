import { createStore } from 'vuex'

export default createStore({
  state: {
    cartList: {
      // 第一层是商铺的ShopId
      // 第二层商品的productId
    }
  },
  mutations: {
    changeCartItemInfo (state, payload) {
      const { shopId, productId, productInfo, num } = payload
      let shopInfo = state.cartList[shopId]
      if (!shopInfo) shopInfo = {}
      let product = shopInfo[productId]
      if (!product) {
        product = productInfo
        product.count = 0
      }
      product.count += num
      if (product.count < 0) product.count = 0
      shopInfo[productId] = product
      state.cartList[shopId] = shopInfo
    }
  },
  actions: {
  },
  modules: {
  }
})
