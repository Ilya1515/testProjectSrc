<template>
  <header>
    <nav class="navig">
      <ul class="nav-ul">
        <router-link tag="li" :to="'/catalog'">Каталог товаров</router-link>
        <router-link tag="li" :to="'/form'">Вязание на заказ</router-link>
        <router-link tag="li" :to="'/'">
          <img src="@/assets/mishka-logo-desktop.svg" />
        </router-link>
        <router-link v-if="!isUserLoggedIn" tag="li" :to="'/register'" class="nav-search">
          Зарегистрироваться
        </router-link>
        <router-link v-if="!isUserLoggedIn" tag="li" :to="'/login'">Войти</router-link>
        <router-link v-if="isUserLoggedIn" tag="li" :to="'/cart'" class="nav-cart">
          <img class="cart" src="@/assets/cart.svg" />
          Корзина: <p v-if="cartProducts.length==0"> Пока пуста</p> 
          <p v-else>{{cartProducts.length}} товар</p>
        </router-link>
        <li v-if="isUserLoggedIn" @click="onLogout">Выйти</li>
      </ul>
    </nav>
  </header>
</template>


<script>
export default {
    computed: {
    cartProducts() {
      return this.$store.getters.cartProducts;
    },
    isUserLoggedIn(){
      return this.$store.getters.isUserLoggedIn;
    },

  },
  methods : {
    onLogout(){
       this.$store.dispatch('logoutUser')
       .then(()=>{
         this.$router.push('/')
       })
       .catch(err => console.log(err));
    }
  },
};

</script>
<style >
.navig {
  border-bottom: 1px solid #e7e7e7;
  width: 1150px;
  margin: 0 auto;
}
.nav-ul {
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  height: 90px;
  font-size: 17px;
  width: 1050px;
  margin: 0 auto;
  font-weight: bold;
}

.cart {
  margin-right: 33px;
}
.nav-search {
  width: 85px;
  border: 1px solid #ececec;
  justify-content: center;
}
.nav-ul > li {
  height: 90px;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.nav-ul > li:hover {
  opacity: 0.6;
}
.nav-ul > li:active {
  opacity: 0.3;
}
.nav-ul > li:not(:nth-child(1n + 2)) {
  border-right: 1px solid #ececec;
}
.nav-ul > li:first-child {
  padding-right: 36px;
}
</style>