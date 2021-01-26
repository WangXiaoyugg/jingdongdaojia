<template>
  <div class="docker">
    <div class="docker__item docker__item--active">
      <div class="iconfont">&#xe6f3;</div>
      <div class="docker__title">首页</div>
    </div>
    <div class="docker__item">
      <div class="iconfont">&#xe7e5;</div>
      <div class="docker__title">购物车</div>
    </div>
    <div class="docker__item">
      <div class="iconfont">&#xe61e;</div>
      <div class="docker__title">订单</div>
      </div>
    <div class="docker__item">
      <div class="iconfont">&#xe660;</div>
      <div class="docker__title">我的</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Docker'
}
</script>

<style lang="scss" scoped>
@import "../../style/variables.scss";
.docker {
  display: flex;
  position: absolute;
  box-sizing: border-box;
  padding: 0 .18rem;
  left: 0;
  bottom: 0;
  width: 100%;
  height: .49rem;
  border-top: 0.01rem solid $content-bgColor;

  &__item {
    flex: 1;
    text-align: center;
    color: $content-font-color;
    &--active {
      color: #1fa4fc;
    }
    .iconfont {
      margin: 0.07rem 0 0.02rem 0;
      font-size: .18rem;
    }
  }
  &__title {
    font-size: .2rem;
    transform: scale(0.5,0.5);
    transform-origin: center top;
  }
}

</style>
