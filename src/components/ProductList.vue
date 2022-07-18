<template>
  <div class="product-list">
    <h2>Products List</h2>
    <div v-if="loading">
      <img src="https://i.imgur.com/JfPpwOA.gif" />
      <p>Loading products list...</p>
    </div>
    <ul v-else>
      <li v-for="product in products" :key="product.id">
        <h4>{{ product.title }}</h4>
        <p><span v-if="product.inventory">In-stock({{ product.inventory}})</span><span v-else>Out of stock.</span></p>
        <p>Price: {{ product.price | currency }}</p>
        <button
          :disabled="!productIsInStock(product)"
          @click="addProductToCart(product)"
        >
          Add to cart
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      loading: false,
      productIndex: 1
    }
  },

  computed: {
    ...mapState('products', {
      products: state => state.products.items
    }),
    ...mapGetters('products', {
      productIsInStock: 'productIsInStock'
    })
  },
  methods: {
    ...mapActions({
      fetchProducts: 'products/fetchProducts',
      addProductToCart: 'cart/addProductToCart'
    })
  },
  created () {
    this.loading = true
    this.fetchProducts()
      .then(() => {
        this.loading = false
      })
  }
}
</script>

<style scoped>

</style>