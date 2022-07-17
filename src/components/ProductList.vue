<template>
  <div class="product-list">
    <h2>Products List</h2>
    <ul>
      <li v-for="product in products" :key="product.id">
        <h4>{{ product.title }}</h4>
        <p>{{ product.price | currency }}</p>
        <button :disabled="!product.inventory" @click="addProductToCart(product)">
          Add to cart
        </button>
      </li>
    </ul>

  </div>
</template>

<script>
// import { mapState, mapActions } from 'vuex'

import shop from '../api/shop'
import store from '@/store/index'

export default {
/*
  computed: mapState({
    products: state => state.products.all
  }),
  methods: mapActions('cart', [
    'addProductToCart'
  ]),
*/
  computed: {
    products () {
      return store.getters.availableProducts
    }
  },
  created () {
    // this.$store.dispatch('products/getAllProducts')
    // shop.getProducts(products => {
    //    this.products = products
    //  })
    shop.getProducts(products => {
      store.commit('setProducts', products)
    })
  }
}
</script>