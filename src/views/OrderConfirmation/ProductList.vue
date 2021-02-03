<template>
    <div class="products">
      <div class="products__title">
        {{shopName}}
      </div>
      <div class="products__wrapper">
         <div class="products__list">
          <template
            v-for="item in productList"
            :key="item._id">
            <div
              class="products__item"
              v-if="item.count > 0"
            >
              <img class="products__item__img" :src="item.imgUrl" />
              <div class="products__item__detail">
                <h4 class="products__item__title">{{item.name}}</h4>
                <p class="products__item__price">
                  <span>
                    <span class="products__item__yen">&yen; </span>
                    {{item.price}} x {{item.count}}
                  </span>
                  <span class="products__item__total">
                    <span class="products__item__yen">&yen; </span>
                    {{(item.price * item.count).toFixed(2)}}
                  </span>
                </p>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { useCommonCartEffect } from '../../effects/cartEffects'
export default {
  name: 'Order',
  setup () {
    const route = useRoute()
    const shopId = route.params.id
    const { shopName, productList, calculations } = useCommonCartEffect(shopId)
    return { shopName, productList, calculations }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/variables.scss';
@import '../../style/mixins.scss';
.top {
  position: relative;
  height: 1.96rem;
  background-size: 100% 1.59rem;
  background-image: linear-gradient(0deg, rgba(0,145,255,0.00) 4%, #0091FF 50%);
  background-repeat: no-repeat;
  &__header {
    position: relative;
    padding-top: .26rem;
    line-height: .24rem;
    color: $bgColor;
    text-align: center;
    font-size: .16rem;
    &__back {
      position: absolute;
      left: .18rem;
      font-size: .22rem;
    }
  }
  &__receiver {
    position: absolute;
    left: .18rem;
    right: .18rem;
    bottom: 0;
    height: 1.11rem;
    background: $bgColor;
    border-radius: .04rem;
    &__title {
      line-height: .22rem;
      padding: .16rem 0 .14rem .16rem;
      font-size: .16rem;
      color: $content-font-color;
    }
    &__address {
      line-height: .2rem;
      padding: 0 .4rem 0 .16rem;
      font-size: .14rem;
      color: $content-font-color;
    }
    &__info {
      padding: .06rem 0 0 .16rem;
      &__name {
        margin-right: .06rem;
        line-height: .18rem;
        font-size: .12rem;
        color: $medium-fontColor;
      }
    }
    &__icon {
      transform: rotate(180deg);
      position: absolute;
      right: .16rem;
      top: .5rem;
      color: $medium-fontColor;
      font-size: .2rem;
    }
  }
}
.products {
  margin: .16rem .18rem .1rem .18rem;
  background: $bgColor;
  &__title {
    padding: .16rem;
    font-size: .16rem;
    color: $content-font-color;
  }
  &__wrapper {
    overflow-y: scroll;
    margin: 0 .18rem;
    position: absolute;
    left: 0;
    right: 0;
    bottom: .6rem;
    top: 2.6rem;
  }
  &__list {
    background: $bgColor;
  }
  &__item {
    position: relative;
    display: flex;
    padding: 0 .16rem 0.16rem .16rem;
    &__img {
      width: .46rem;
      height: .46rem;
      margin-right: .16rem;
    }
    &__detail {
      flex: 1;
    }
    &__title {
      margin: 0;
      line-height: .2rem;
      font-size: .14rem;
      color: $content-font-color;
      @include ellipsis;
    }
    &__price {
      display: flex;
      margin: .06rem 0 0 0;
      line-height: .2rem;
      font-size: .14rem;
      color: $hightlight-fontColor;
    }
    &__total {
      flex: 1;
      text-align: right;
      color: $dark-color;
    }
    &__yen {
      font-size: .12rem;
    }
  }
}
.order {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  height: .49rem;
  line-height: .49rem;
  background: #FFF;
  &__price {
    flex: 1;
    text-indent: .24rem;
    font-size: .14rem;
    color: #333;
  }
  &__btn {
    width: .98rem;
    background: #4FB0F9;
    color: #fff;
    text-align: center;
    font-size: .14rem;
  }
}
</style>
