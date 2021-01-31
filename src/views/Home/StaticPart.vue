<template>
  <div class="position">
      <span class="iconfont position__icon">&#xe619;</span>
      北京理工大学国防科技园2号楼10层
      <span class="iconfont position__notice">&#xe60b;</span>
    </div>
    <div class="search">
      <span class="iconfont">&#xe62d;</span>
      <span class="search__text">山姆会员商店优惠商品</span>
    </div>
    <div class="banner">
      <img class="banner__img" src="http://www.dell-lee.com/imgs/vue3/banner.jpg" alt="">
    </div>
    <div class="icons">
        <div class="icons__item"
          v-for="(item, index) in iconList"
          :key="index"
        >
          <img
            class="icons__item__img"
            :src="`http://www.dell-lee.com/imgs/vue3/${item.imgName}.png`"
          />
          <p class="icons__item__desc">{{item.text}}</p>
        </div>
    </div>
    <div class="gap"></div>
</template>

<script>
export default {
  name: 'StaticPart',
  setup () {
    const iconList = [
      { imgName: '超市', text: '超市便利' },
      { imgName: '菜市场', text: '菜市场' },
      { imgName: '水果店', text: '水果店' },
      { imgName: '鲜花', text: '鲜花绿植' },
      { imgName: '医药健康', text: '医药健康' },
      { imgName: '家居', text: '家居时尚' },
      { imgName: '蛋糕', text: '烘培蛋糕' },
      { imgName: '签到', text: '签到' },
      { imgName: '大牌免运', text: '大牌免运' },
      { imgName: '红包', text: '红包套餐' }
    ]
    return { iconList }
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/variables.scss";
@import '../../style/mixins.scss';
.position {
  position: relative;
  padding: .16rem .24rem .16rem 0;
  line-height: .22rem;
  font-size: .16rem;
  color: $content-font-color;
  @include ellipsis;
  .position__icon {
    position: relative;
    top: .015rem;
    font-size: .2rem;
  }
  .position__notice {
    position: absolute;
    right: 0;
    top: 0.17rem;
  }
}
.search {
  margin-bottom: .12rem;
  line-height: .32rem;
  background: $search-bgColor;
  color: $search-fontColor;
  border-radius: .16rem;
  .iconfont {
    display: inline-block;
    padding: 0 .08rem 0 .16rem;
    font-size: .16rem;
  }
  &__text {
    display: inline-block;
    font-size: .14rem;
  }
}
.banner {
  height: 0;
  overflow: hidden;
  padding-bottom: 25.4%;
  &__img {
    width: 100%;
  }
}

.icons {
  display: flex;
  flex-wrap: wrap;
  margin-top: .16rem;
  &__item  {
    width: 20%;
    &__img {
      display: block;
      width: .4rem;
      height: .4rem;
      margin: 0 auto;
    }
    &__desc {
      margin: 0.06rem 0 .16rem 0;
      text-align: center;
      color: $content-font-color;
    }
  }
}
.gap {
  margin: 0 -0.18rem;
  height: .1rem;
  background: $content-bgColor;
}
</style>
