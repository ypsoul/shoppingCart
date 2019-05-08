<!--  -->
<template>
  <div>
      <h4>已选商品</h4>
      <table class="table table-hover table-bordered">
          <thead>
              <tr>
                  <td>id</td>
                  <td>名称</td>
                  <td>价格</td>
                  <td>数量</td>
                  <td>操作</td>
              </tr>
          </thead>
          <tbody>
              <tr v-for='(shop,index) in cartProducts' :key="index">
                  <td>{{ shop.id }}</td>
                  <td>{{ shop.name }}</td>
                  <td>{{ shop.price }}</td>
                  <td><button class="btn btn-info" @click="sub(shop)">-</button><span class="cart_num">{{ shop.num}}</span><button class="btn btn-info" @click="plus(shop)">+</button></td>
                  <td>
                      <div @click="delProduct(shop)" class="btn btn-danger btn-sm">删除</div>
                  </td>
              </tr>
              <tr v-if ='!cartProducts.length'> 
                  <td colspan="5" class="text-center">您的购物车空空如也。。。</td>
              </tr>
          </tbody>
      </table>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {
  data () {
    return {
        // cartProducts:[]
    };
  },

//   components: {},

  computed: {
      ...mapGetters(['cartProducts'])
  },

//   mounted: {},

  methods: {
      ...mapActions(['delProduct','sub','plus'])
  }
}

</script>
<style lang='css' scoped>
.cart_num{
    margin-left: 5px;
    margin-right:  5px;
}
</style>