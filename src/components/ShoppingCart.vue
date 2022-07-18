<template>
  <div class="Shopping-cart">
    <h2>Your Shopping Cart</h2>

    <p v-if="!products.length">
      <i>Shopping Cart is empty.</i>
    </p>
    <ul v-else>
      <li v-for="product in products" :key="product.id">
        {{ product.title }} - {{ product.price | currency }} x {{ product.quantity }}
      </li>
    </ul>

    <p>Total Price: {{ total | currency }}</p>
    <p>
      <button
        :disabled="!products.length"
        @click="checkout"
      >
        Checkout
      </button>
    </p>
    <p v-if="checkoutStatus">Checkout {{ checkoutStatus }}</p>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters('cart', {
      products: 'cartProducts',
      total: 'cartTotal'
    }),
    ...mapState('cart', {
      checkoutStatus: state => state.checkoutStatus
    })
  },
  methods: {
    ...mapActions('cart', ['checkout'])

  }
}
</script>

<style scoped>

</style>