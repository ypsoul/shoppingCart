<!--  -->
<template>
  <div class="product">
      <h4>商品信息</h4>
      <table class="table table-hover table-bordered">
          <thead>
              <tr>
                  <td>id</td>
                  <td>名称</td>
                  <td>价格</td>
                  <td>操作</td>
              </tr>
          </thead>
          <tbody>
              <tr v-for='(shop,index) in shoplist' :key='index'>
                <td>{{ shop.id }}</td>
                <td>{{ shop.name }}</td>
                <td>{{ shop.price }}</td>
                <td>
                    <div class="btn btn-info" @click="addToCart(shop)">加入购物车</div>
                </td>
              </tr>
          </tbody>
      </table>
  </div>
</template>

<script>
import { mapGetters,mapActions} from 'vuex'
export default {
  name:'product',
  data () {
    return {
        // shoplist:[
        //     {
        //         id:11,
        //         name:'鱼香肉丝',
        //         price:12
        //     },
        //     {
        //         id:22,
        //         name:'宫保鸡丁',
        //         price:14
        //     },
        //     {
        //         id:33,
        //         name:'土豆丝',
        //         price:2,
        //     }
        // ]
    };
  },

//   components: {},

  computed: {
      ...mapGetters(['shoplist'])
  },

//   mounted: {},

  methods: {
      ...mapActions(['addToCart'])
  }
}

</script>
<style lang='css' scoped>
.table-shop>th{
    text-align: center
}
.item-wrapper{
    display: flex;
    background-color:#dfdfdf;
    align-items: center;
    justify-content: center 
}
.item{
    flex:1;
}
</style>