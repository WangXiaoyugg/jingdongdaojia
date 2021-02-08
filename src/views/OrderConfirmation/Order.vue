<template>
  <div class="order">
    <div class="order__price">实付金额 <b>¥{{calculations.price}}</b></div>
    <div class="order__btn" @click="() => handleMaskChange(true)">提交订单</div>
  </div>
  <div class="mask" v-show="showMask" @click="() => handleMaskChange(false)">
    <div class="mask__content" @click.stop>
      <h3 class="mask__content__title">确认要离开收银台？</h3>
      <p class="mask__content__desc">请尽快完成支付，否则将被取消</p>
      <div class="mask__content__btns">
        <div
          class="mask__content__btn mask__content__btn--first"
          @click="() => handleConfirmOrder(false)"
        >取消订单</div>
        <div
          class="mask__content__btn mask__content__btn--last"
          @click="() => handleConfirmOrder(true)"
        >确认支付</div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
import { useCommonCartEffect } from '../../effects/cartEffects'
import { post } from '../../utils/request.js'

const useConfirmOrderEffect = () => {
  const router = useRouter()
  const route = useRoute()
  const store = useStore()
  const shopId = parseInt(route.params.id, 10)
  const { calculations, shopName, productList } = useCommonCartEffect(shopId)
  const handleConfirmOrder = async (isCanceled) => {
    const products = []
    for (const i in productList.value) {
      const product = productList.value[i]
      products.push({ id: parseInt(product._id, 10), num: product.count })
    }
    try {
      const result = await post('/order', {
        addressId: 1,
        shopId,
        shopName: shopName.value,
        isCanceled,
        products
      })
      if (result.errno === 0) {
        store.commit('clearCartData', { shopId })
        router.push({ name: 'Home' })
      } else {
        // 下单失败的业务逻辑错误
      }
    } catch (e) {
      // 下单失败
      console.log(e)
    }
  }
  return { handleConfirmOrder, calculations }
}
const useShowMaskEffect = () => {
  const showMask = ref(false)
  const handleMaskChange = (status) => {
    showMask.value = status
  }
  return { showMask, handleMaskChange }
}
export default {
  name: 'Order',
  setup () {
    const { calculations, handleConfirmOrder } = useConfirmOrderEffect()
    const { showMask, handleMaskChange } = useShowMaskEffect()
    return { calculations, handleConfirmOrder, handleMaskChange, showMask }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/variables.scss';

.order {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  height: .49rem;
  line-height: .49rem;
  background: $bgColor;
  &__price {
    flex: 1;
    text-indent: .24rem;
    font-size: .14rem;
    color: $content-font-color;
  }
  &__btn {
    width: .98rem;
    background: $mask-btn-color;
    color: $bgColor;
    text-align: center;
    font-size: .14rem;
  }
}
.mask {
  z-index: 1;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: rgba(0,0,0,0.50);
  &__content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 3rem;
    height: 1.56rem;
    background: #FFF;
    text-align: center;
    border-radius: .04rem;
    &__title {
      margin: .24rem 0 0 0;
      line-height: .26rem;
      font-size: .18rem;
      color: $content-font-color;
    }
    &__desc {
      margin: .08rem 0 0 0;
      font-size: .14rem;
      color: $medium-fontColor;
    }
    &__btns {
      display: flex;
      margin: .24rem .58rem;
    }
    &__btn {
      flex: 1;
      width: .8rem;
      line-height: .32rem;
      border-radius: .16rem;
      font-size: .14rem;
      &--first {
        margin-right: .12rem;
        border: .01rem solid $mask-btn-color;
        color: $mask-btn-color;
      }
      &--last {
        margin-left: .12rem;
        background: $mask-btn-color;
        color: $bgColor;
      }
    }
  }
}
</style>
