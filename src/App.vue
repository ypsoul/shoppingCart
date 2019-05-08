<template>
  <div id="app">
    <h3>Vuex购物车demo</h3>
    <Product></Product>
    <Cart></Cart>
    <Info></Info>  
  </div>
</template>

<script>
import Product from './components/product.vue'
import Cart from './components/cart.vue'
import Info from './components/info.vue'

export default {
  data(){
    return{

    }
  },
  name: 'app',
  components: {
    Product,
    Cart,
    Info
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
