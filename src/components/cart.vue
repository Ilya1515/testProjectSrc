<template>
  <main>
    <section class="cart-section">
      <div v-for="(product, i) in cartProducts" :key="i">
        <div class="cart-item">
          <p class="cart-item-delete" @click="deleteCartItem(product)">Удалить</p>
          <p>{{product.title}}</p>
          <p>{{product.price}}Р</p>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  computed: {
    cartProducts() {
      return this.$store.getters.cartProducts;
    },
  },methods : {
      deleteCartItem(item) {
          return this.$store.commit('deleteCartItem', item)
      }
  }

};
</script>

<style>
.cart-item-delete{
    color: red;
    font-size: 20px;
    cursor: pointer;
}
.cart-section {
  width: 1050px;
  margin: 0, auto;
  min-height: 380px;
}
.cart-item {
  width: 550px;
  height: 50px;
  border: 2px solid black;
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>