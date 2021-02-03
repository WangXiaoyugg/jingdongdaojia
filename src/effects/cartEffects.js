import { computed } from 'vue'
import { useStore } from 'vuex'

export const useCommonCartEffect = (shopId) => {
  const store = useStore()
  const cartList = store.state.cartList
  const changeCartItemInfo = (shopId, productId, productInfo, num) => {
    store.commit('changeCartItemInfo', {
      shopId, productId, productInfo, num
    })
  }
  const productList = computed(() => {
    const productList = cartList[shopId]?.productList || []
    return productList
  })

  const shopName = computed(() => {
    const shopName = cartList[shopId]?.shopName || ''
    return shopName
  })
  return { cartList, productList, shopName, changeCartItemInfo }
}
