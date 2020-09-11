<template>
<main>
  <section class="top-item">
    <div class="top-item-wrapper">
      <h1>{{product.title}}</h1>
      <div class="top-item-desc">
        <p>{{product.description}}</p>
      </div>
      <div class="top-item-price">
        <h1>Цена:{{product.price}} руб</h1>
        <button @click="show" type="button" class="btn-show-modal btn">Заказать</button>
      </div>
    </div>
    <div class="top-item-img">
      <img :src="product.imageSrc" />
    </div>
  </section>
  <modal name="my-first-modal">
      <div class="modal-product">
        <h1>добавить в корзину</h1>
        <p>Вы уверены?:</p>
        <button type="button" class="btn-modal" @click="multiplyAction(product)">Добавить</button>
      </div>
    </modal>
</main>
</template>

<script>
export default {
  props: ["id"],
  computed: {
    product() {
      const id = this.id;
      return this.$store.getters.productById(id);
    },
  },methods: {
      addToCart(item){
          this.$store.commit('addToCart', item)
      },
    show() {
      this.$modal.show("my-first-modal");
    },
    hide() {
      this.$modal.hide("my-first-modal");
    },
    multiplyAction(item) {
      this.addToCart(item)
      this.hide()
    },
  },
  mount() {
    this.show;
  },
};
</script>

<style>
.modal-product{
    border: 1px solid #c6c6c6;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  height: 100%;
}

</style>