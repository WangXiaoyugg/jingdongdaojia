<template>
  <div class="nearby">
    <div class="nearby__title">附近店铺</div>
    <div class="nearby__item"
      v-for="(item, index) in nearbyList"
      :key="index"
    >
      <img class="nearby__item__img"
          :src="item.imgUrl"
          alt=""/>
      <div class="nearby__content">
        <div class="nearby__content__title">{{item.title}}</div>
        <div class="nearby__content__tags">
          <span v-for="(innerItem, innerIndex) in item.tags"
            :key="innerIndex"
            class="nearby__content__tag"
            >{{innerItem}}</span>
        </div>
        <div class="nearby__content__highlight">{{item.highlight}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nearby',
  setup () {
    const nearbyList = [
      {
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
        title: '沃尔玛',
        tags: ['月售1万+', '起送5元', '支持花呗'],
        highlight: 'VIP尊享满89元减4元运费券（每月3张）'
      },
      {
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
        title: '海底捞',
        tags: ['日售1万+', '起送20元', '满100减50'],
        highlight: 'VIP尊享满89元减4元运费券（每月3张）'
      }
    ]
    return { nearbyList }
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/variables.scss";
.nearby {
  &__title {
    margin: .16rem 0 .02rem 0;
    font-size: .18rem;
    font-weight: normal;
    color: $content-font-color;
  }
  &__item {
    display: flex;
    padding-top: .12rem;
    &__img {
      margin-right: .16rem;
      width: .56rem;
      height: .56rem;
    }
  }
  &__content {
    flex: 1;
    padding-bottom: .12rem;
    border-bottom: .01rem solid $content-bgColor;
    &__title {
      line-height: .22rem;
      font-size: .16rem;
      color: $content-font-color;
    }
    &__tags {
      margin-top: .08rem;
      line-height: .18rem;
      font-size: .13rem;
      color: $content-font-color;
    }
    &__tag {
      margin-right: .16rem;
    }
    &__highlight {
      margin: .08rem 0 0 0;
      line-height: .18rem;
      font-size: .13rem;
      color: #E93B3B;
    }
  }
}

</style>
