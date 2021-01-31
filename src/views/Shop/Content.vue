<template>
  <div class="content">
    <div class="category">
      <div
        v-for="item in categories"
        :key="item.name"
        :class="['category__item', { 'category__item--active': currentTab === item.tab }]"
        @click="() => handleTabClick(item.tab)"
      >
        {{item.name}}
        </div>
    </div>
    <div class="product">
      <div
        class="product__item"
        v-for="item in list"
        :key="item._id"
      >
        <img class="product__item__img" :src="item.imgUrl">
        <div class="product__item__detail">
          <h4 class="product__item__title">
            {{item.name}}
          </h4>
          <p class="product__item__sales">月售{{item.sales}}件</p>
          <p class="product__item__prices">
            <span class="product__item__prices__yen">&yen;</span>{{item.price}}
            <span class="product__item__prices__origin">&yen;{{item.oldPrice}}</span>
          </p>
        </div>
        <div class="product__number">
          <span class="product__number__minus">-</span>
            0
          <span class="product__number__plus">+</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref, toRefs, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { get } from '../../utils/request'

const categories = [
  { name: '全部商品', tab: 'all' },
  { name: '秒杀', tab: 'seckill' },
  { name: '新鲜水果', tab: 'fruit' }
]

const useTabEffect = () => {
  const currentTab = ref(categories[0].tab)
  const handleTabClick = (tab) => {
    currentTab.value = tab
  }
  return { currentTab, handleTabClick }
}

const useCurrentListEffect = (currentTab) => {
  const route = useRoute()
  const shopId = route.params.id
  const content = reactive({ list: [] })

  const getContentData = async () => {
    const result = await get(`/shop/${shopId}/products`, {
      tab: currentTab.value
    })
    if (result?.errno === 0 && result?.data?.length) {
      content.list = result.data
    }
  }
  watchEffect(() => { getContentData() })
  const { list } = toRefs(content)
  return { list }
}

export default {
  name: 'Content',
  setup () {
    const { currentTab, handleTabClick } = useTabEffect()
    const { list } = useCurrentListEffect(currentTab)
    return { categories, currentTab, handleTabClick, list }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/variables.scss';
@import '../../style/mixins.scss';
.content {
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  top: 1.5rem;
  bottom: .5rem;
}
.category {
  overflow: scroll;
  height: 100%;
  width: .76rem;
  background: $search-bgColor;
  &__item {
    text-align: center;
    line-height: .4rem;
    font-size: 14px;
    color:#333;
    &--active {
      background: #fff;
    }
  }
}

.product {
  overflow: scroll;
  flex: 1;
  &__item {
    position: relative;
    flex: 1;
    display: flex;
    padding: .12rem;
    margin: 0 .16rem;
    border-bottom: .01rem solid #f1f1f1;
    &__img {
      width: .68rem;
      height: .68rem;
      margin-right: .16rem;
    }
    &__title {
      line-height: .2rem;
      font-size: .14rem;
      color: #333;
      margin: 0;
      @include ellipsis;
    }
    &__sales {
      margin: .06rem 0;
      font-size: .12rem;
      height: .16rem;
      color:#333;
    }
    &__prices {
      margin: 0;
      line-height: .2rem;
      font-size: .14rem;
      color:#e93b3b;
      &__yen {
        font-size: .12rem;
      }
      &__origin {
        font-size: .12rem;
        line-height: .2rem;
        margin-left: .06rem;
        color:#999;
        text-decoration: line-through;
      }
    }

  }
  &__number {
    position: absolute;
    right: .05rem;
    bottom: 0.12rem;
    &__minus, &__plus {
      display: inline-block;
      width: .2rem;
      height: .2rem;
      line-height: .16rem;
      border-radius: 50%;
      text-align: center;
      font-size: .2rem;
    }
    &__minus {
      border: .01rem solid $medium-fontColor;
      color: $medium-fontColor;
      margin-right: .05rem;
    }
    &__plus {
      background: $btn-bgColor;
      border: .01rem solid $btn-bgColor;
      color: #fff;
      margin-left: .05rem;
    }
  }
}
</style>