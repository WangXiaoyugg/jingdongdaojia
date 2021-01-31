<template>
  <div class="nearby">
    <div class="nearby__title">附近店铺</div>
    <router-link
      v-for="item in nearbyList"
      :key="item._id"
      :to="`/shop/${item._id}`"
    >
      <ShopInfo :item="item"/>
    </router-link>
  </div>
</template>

<script>
import { ref } from 'vue'
import ShopInfo from '../../components/ShopInfo'
import { get } from '../../utils/request'
const useNearbyListEffect = () => {
  const nearbyList = ref([])
  const getNearbyList = async () => {
    const result = await get('/shop/hot-list')
    if (result?.errno === 0 && result?.data?.length) {
      nearbyList.value = result.data
    }
  }
  return { nearbyList, getNearbyList }
}
export default {
  name: 'Nearby',
  components: {
    ShopInfo
  },
  setup () {
    const { nearbyList, getNearbyList } = useNearbyListEffect()
    getNearbyList()
    return { nearbyList, getNearbyList }
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/variables.scss";
.nearby {
  a {
    text-decoration: none;
  }
  &__title {
    margin: .16rem 0 .02rem 0;
    font-size: .18rem;
    font-weight: normal;
    color: $content-font-color;
  }
}

</style>
