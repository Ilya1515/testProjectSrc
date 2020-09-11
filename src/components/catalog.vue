<template>
  <main>
    <section class="intro-catalog">
      <div class="intro-info">
        <h2>Новые поступления</h2>
        <h2 class="intro-info__sale">Распродажа</h2>
        <p>Бесплатная доставка по России</p>
      </div>
      <h1 class="intro__title--catalog">Каталог товаров</h1>
    </section>
    <section class="main-catalog">
      <div v-for="(product, i) in products" :key="i">
        <div class="catalog__item">
          <router-link :to="'/product/' + product.id">
            <img :src="product.imageSrc" width="317px" height="370px" />
          </router-link>

          <div class="catalog__desc">
            <h1 class="item__name">{{product.title}}</h1>
            <p class="item__desc">{{product.description}}</p>
          </div>
          <div class="catalog__price">
            <h2 class="item_price">{{product.price}} руб.</h2>
            <div class="btn-cart">
              <img @click="show" src="@/assets/cart.svg">
            </div>
          </div>
        </div>
      </div>
    </section>
    <modal name="my-first-modal">
      <div class="modal">
        <h1>добавить в корзину</h1>
        <p>Выберите размер:</p>
        <div class="modal-wrapper">
          <div class="modal-size">S</div>
          <div class="modal-size">M</div>
          <div class="modal-size">L</div>
        </div>
        <button type="button" class="btn-modal">Добавить</button>
      </div>
    </modal>
  </main>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.getters.products;
    },
  },
  methods: {
    show() {
      this.$modal.show("my-first-modal");
    },
    hide() {
      this.$modal.hide("my-first-modal");
    },
  },
  mount() {
    this.show;
  },
};
</script>

<style >
.intro-catalog {
  background-color: #f1f1f1;
}
.intro__title--catalog {
  text-align: center;
  font-size: 53px;
  display: block;
  width: 610px;
  margin: 0 auto;
  margin-top: 40px;
  padding-bottom: 90px;
}
.main-catalog {
  display: flex;
  width: 1050px;
  margin: 55px auto;
  justify-content: space-around;
  flex-wrap: wrap;
}
.catalog__item {
  width: 315px;
  border: 1px solid #ececec;
  margin-top: 55px;
  cursor: pointer;
}
.catalog__item:hover {
  -webkit-box-shadow: -1px 10px 9px -2px rgba(0, 0, 0, 0.31);
  -moz-box-shadow: -1px 10px 9px -2px rgba(0, 0, 0, 0.31);
  box-shadow: -1px 10px 9px -2px rgba(0, 0, 0, 0.31);
}
.catalog__item:active {
  -webkit-box-shadow: -1px 10px 4px -5px rgba(0, 0, 0, 0.31);
  -moz-box-shadow: -1px 10px 4px -5px rgba(0, 0, 0, 0.31);
  box-shadow: -1px 10px 4px -5px rgba(0, 0, 0, 0.31);
}
.catalog__price {
  display: flex;
  border-top: 1px solid #ececec;
  margin: 0 27px;
  justify-content: space-between;
}
.catalog__desc {
  margin: 0 27px;
  padding-bottom: 20px;
}
</style>