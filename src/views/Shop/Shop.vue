<template>
  <div class="wrapper">
    <div class="search">
      <div class="search__back iconfont" @click="onBack">&#xe6f2;</div>
      <div class="search__content">
        <span class="search__content__icon iconfont">&#xe62d;</span>
        <input
          class="search__content__input"
          placeholder="请输入商品名称"
        />
      </div>
    </div>
    <ShopInfo :item="item" :hideBorder="true" v-show="item.imgUrl"/>
    <Content />
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ShopInfo from '../../components/ShopInfo'
import { get } from '../../utils/request'
import Content from './Content.vue'

const useShopInfoEffect = () => {
  const route = useRoute()
  const data = reactive({ item: {} })
  const getItemData = async () => {
    const result = await get(`/shop/${route.params.id}`)
    if (result?.errno === 0 && result?.data) {
      data.item = result.data
    }
  }
  const { item } = toRefs(data)
  return { item, getItemData }
}

const useBackEffect = () => {
  const router = useRouter()
  const onBack = () => {
    router.back()
  }
  return { onBack }
}

export default {
  name: 'Shop',
  components: {
    ShopInfo,
    Content
  },
  setup () {
    const { item, getItemData } = useShopInfoEffect()
    const { onBack } = useBackEffect()
    getItemData()
    return { item, onBack }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/variables.scss';
.wrapper {
  padding: 0 .18rem;
}
.search {
  margin: .14rem 0 .04rem 0;
  display: flex;
  line-height: .32rem;
  &__back {
    width: .3rem;
    font-size: .24rem;
    color: #b6b6b6;
  }
  &__content {
    display: flex;
    flex: 1;
    background: $search-bgColor;
    border-radius: .16rem;
    &__icon {
      width: .44rem;
      line-height: .32rem;
      text-align: center;
      color: $search-fontColor;
    }
    &__input {
      padding-right: .2rem;
      width: 100%;
      display: block;
      border: none;
      outline: none;
      background: none;
      color:$content-font-color;
      font-size: 0.14rem;
      &::placeholder {
        color:$content-font-color;
      }
    }
  }
}
</style>
