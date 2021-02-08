<template>
  <div class="wrapper">
    <StaticPart />
    <Nearby />
  </div>
  <Docker :currentInddex="0"/>
</template>

<script>
import StaticPart from './StaticPart'
import Nearby from './Nearby'
import Docker from '../../components/Docker'
export default {
  name: 'Home',
  components: {
    StaticPart,
    Nearby,
    Docker
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: .5rem;
  padding: 0 .18rem .1rem .18rem;
  overflow-y: auto;
}

</style>
