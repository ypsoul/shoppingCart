<!--  -->
<template>
  <div>
      <div class="item-wrapper">
          <div class="item">总数: 
              <strong>{{ totalNum }}</strong>
          </div>
          <div class="item">总价：
              <strong>{{ totalPrice }}</strong>
          </div>
          <div class="item btn btn-danger" @click='clearAll'>清空购物车</div>
      </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
        // totalNum:13,
        // totalPrice:342
    };
  },

//   components: {},

  computed: {
      ...mapGetters(['totalPrice','totalNum'])
  },

//   mounted: {},

  methods: {
      ...mapActions(['clearAll'])
  }
}

</script>
<style lang='css' scoped>
.item-wrapper{
    display: flex;
    background-color: #dfdfdf;
    justify-content: center;
    align-items: center
}
.item{
    flex: 1
}
</style>