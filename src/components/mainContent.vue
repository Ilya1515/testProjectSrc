<template>
  <main>
    <section class="intro">
      <div class="intro-info">
        <h2>Новые поступления</h2>
        <h2 class="intro-info__sale">Распродажа</h2>
        <p>Бесплатная доставка по России</p>
      </div>
      <h1 class="intro__title">Милые штуки ручной работы для дома</h1>
      <div class="intro-wrapper">
        <div class="choose-1">
          <p>Предметы интерьера</p>
          <img src="@/assets/interior.svg" />
        </div>
        <div class="choose-2">
          <p>Детские игрушки</p>
          <img src="@/assets/toy-svg.svg" />
        </div>
      </div>
    </section>
    <section class="top-item">
      <h2>Товар недели</h2>
      <div class="promo-item-wrapper" v-for="(promo, i) in promos" :key="i">
        <div  class="top-item-wrapper">
        <h1>{{promo.title}}</h1>
        <p>{{promo.description}}</p>
        <div class="top-item-price">
          <h1>Цена:{{promo.price}} руб</h1>
          <router-link tag="button" :to="'/product/' + promo.id" type="button" class="btn-show-modal btn">Открыть</router-link>
        </div>
      </div>
      <div class="top-item-img">
        <img :src="promo.imageSrc" width="525px" height="636px" alt=""> 
         <!-- <img src="@/assets/triple-set-desktop.jpg" />  -->
      </div>
      </div>
    </section>
    <section class="about">
      <h1>Коротко о нас:</h1>
      <div class="about-wrapper">
        <ul>
          <li>Экологически чистые материалы</li>
          <li>Скандинавский стиль по российской цене</li>
          <li>Увеличивает лайки на фотографиях</li>
        </ul>
        <ul>
          <li>Связано вручную с любовью и умилением</li>
          <li>Поддержка отечественного производителя</li>
          <li>Поставляется в подарочной упаковке</li>
        </ul>
      </div>
    </section>
    <section class="reviews">
      <div class="review-wrapper-1">
        <h1>Отзывы</h1>
        <button class="btn-review btn" type="button" @click="show">Написать</button>
      </div>
      <div class="swiper-section">
        <swiper class="swiper" ref="mySwiper" :options="swiperOptions">
          <swiper-slide v-for="(review, i) in reviews" :key="i">
            <p class="text-swipe">{{review.text}}</p>
            <div class="review-wrapper-2">
              <div class="review-user">
                <h1>{{review.name}}</h1>
                <p>{{review.id}}</p>
              </div>
              <div class="arrows">
                <img class="left-arr" src="@/assets/huge-arrow-left.svg" />
                <img class="righta-arr" src="@/assets/huge-arrow-right.svg" />
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <p class="text-swipe">
              Я молодая мама, но всё равно фотографии не набирали и близко такого количества лайков, как у популярных
              инстамамочек. В отчаянии, я накупила аксессуаров и игрушек в Мишке, и мои фотографии сразу стали более
              стильными, а также набирают больше лайков!
            </p>
            <div class="review-wrapper-2">
              <div class="review-user">
                <h1>Анастасия Красильникова</h1>
                <p>@misssssiskras</p>
              </div>
              <div class="arrows">
                <img class="left-arr" src="@/assets/huge-arrow-left.svg" />
                <img class="righta-arr" src="@/assets/huge-arrow-right.svg" />
              </div>
            </div>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </section>
    <section class="contacts">
      <div class="contacts-wrapper">
        <h1>Контакты</h1>
        <div class="contacts__adress">
          <p>e-mail: info@mimimishkashop.ru</p>
          <p>адрес : г.Санкт-Петербург, ул.Большая Конюшенная, д. 19/8, офис 101</p>
        </div>
        <button type="button" class="btn">Напишите нам</button>
      </div>
      <div class="contacts-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d18031.01977286782!2d37.6012742!3d55.6041461!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414ab27e04ef2565%3A0x6a3340da5d8ca2d6!2z0KfQtdGA0YLQsNC90L7QstGB0LrQsNGPINGD0LsuLCA1NSwg0JzQvtGB0LrQstCwLCAxMTc1MzQ!5e0!3m2!1sru!2sru!4v1598448751124!5m2!1sru!2sru"
          width="600"
          height="450"
          frameborder="0"
          style="border:0;"
          allowfullscreen
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </div>
    </section>
    <modal name="my-first-modal">
      <div class="modal">
        <textarea v-model="text" required></textarea>
        <input v-model="name" required type="text" placeholder="Ваше имя" />
        <input v-model="id" required type="text" placeholder="ваш id" />
        <button type="button"  class="btn-modal" @click="multiplyAction">Отправить</button>
      </div>
    </modal>
  </main>
</template>

<script>
export default {
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
      },      
        name : '',
        id : '',
        text : '',
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
    reviews() {
      return this.$store.getters.reviews;
    },
    promos() {
      return this.$store.getters.productPromo;
    }
  },
  methods: {
    show() {
      this.$modal.show("my-first-modal");
    },
    hide() {
      this.$modal.hide("my-first-modal");
    },
    addReview() {
      const newReview = {
        name : this.name,
        id : this.id,
        text : this.text,
      }
      this.$store.commit('addReview', newReview)
    },
    multiplyAction() {
      this.addReview()
      this.hide()
    },
  },
  mount() {
    this.show;
  },
  mounted() {
    console.log("Current Swiper instance object", this.swiper);
    this.swiper.slideTo(3, 1000, false);
  },
};
</script>

<style >
.promo-item-wrapper{
  display: flex;
}
textarea {
  width: 250px;
  height: 100px;
  resize: none;
}
input {
  border: none;
  border-bottom: 1px solid black;
  padding: 20px;
}
.swiper {
  width: 1050px;
}
.swiper-section {
  width: 1050px;
  margin: 0 auto;
}
.intro {
  background-image: url("/src/assets/hero-desktop.jpg");
  background-position: 50% 50%;
  background-repeat: no-repeat;
  height: 700px;
  background-color: #fafafa;
  margin: 0 auto;
}
.intro-info {
  display: flex;
  justify-content: space-between;
  width: 1050px;
  margin: 0 auto;
  padding-top: 10px;
}
.intro-info > h2:hover {
  opacity: 0.6;
}
.intro-info > h2:active {
  opacity: 0.3;
}
.intro__title {
  text-align: center;
  font-size: 53px;
  display: block;
  width: 610px;
  margin: 0 auto;
  margin-top: 70px;
}
.intro-info > h2 {
  font-size: 15px;
  cursor: pointer;
}
.intro-info > p {
  font-size: 15px;
}
.intro-info__sale {
  margin-left: -470px;
}
.choose-1,
.choose-2 {
  background-color: #63d1bb;
  display: flex;
  color: white;
  font-size: 20px;
  font-weight: bold;
  flex-grow: 1;
  justify-content: space-between;
  padding: 30px;
  margin-top: 350px;
  box-sizing: border-box;
  width: 525px;
  cursor: pointer;
}
.choose-2 {
  background-color: #56c3b2;
}
.choose-1:active {
  opacity: 0.5;
}
.choose-2:active {
  opacity: 0.5;
}
.intro-wrapper {
  display: flex;
  margin: 0 auto;
  width: 1050px;
}
.top-item {
  width: 1050px;
  margin: 0 auto;
  display: flex;
  margin-top: 70px;
  position: relative;
}
.top-item > h2 {
  width: 175px;
  display: flex;
  text-align: center;
  padding: 60px 45px;
}
.top-item-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  font-size: 17px;
}
.top-item-wrapper > h1 {
  padding-top: 30px;
  font-size: 53px;
  font-weight: bold;
  display: inline;
}
.top-item-price > button {
  width: 297px;
  background-color: white;
  border: 2px solid #444444;
  color: #444444;
  padding: 18px;
  font-size: 17px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
}
.about {
  margin: 0 auto;
  width: 1050px;
}
.about-wrapper {
  display: flex;
  width: 650px;
  font-size: 20px;
  font-weight: bold;
  margin-left: 175px;
}
.about-wrapper > ul {
  padding-left: 0;
  width: 350px;
}
.about-wrapper > ul > li {
  margin-bottom: 120px;
  width: 300px;
}
.about > h1 {
  margin-left: 175px;
  font-size: 53px;
}
.reviews {
  position: relative;
  width: 1050px;
  border: 1px solid white;
  background-image: url(/img/review.png);
  background-repeat: no-repeat;
}

.text-swipe {
  margin-left: 175px;
  font-size: 17px;
  margin-top: 55px;
}
.review-wrapper-1,
.review-wrapper-2 {
  display: flex;
  margin-left: 175px;
  justify-content: space-between;
  margin-top: 80px;
}
.review-wrapper-1 > h1 {
  margin: 0 0;
  font-size: 53px;
}
.review-wrapper-2 {
  margin-bottom: 85px;
  margin-top: 0;
}
.arrows {
  width: 175px;
  height: 52px;
  display: flex;
  justify-content: space-around;
  cursor: pointer;
}
.btn-review {
  background-color: white;
  width: 175px;
  border: 2px solid #444444;
  height: 52px;
  font-size: 17px;
  font-weight: bold;
  text-transform: uppercase;
}
.btn:hover {
  color: white;
  background-color: #444444;
  cursor: pointer;
}
.btn:active {
  color: #575757;
  border-color: #444444;
}
.contacts {
  width: 1050px;
  display: flex;
  margin-bottom: 108px;
}
.contacts-wrapper {
  margin-left: 175px;
  font-size: 17px;
}
.contacts__adress {
  width: 350px;
  margin-top: 85px;
}
.contacts-wrapper > button {
  background-color: white;
  width: 230px;
  border: 2px solid #444444;
  height: 52px;
  font-weight: bold;
  text-transform: uppercase;
  margin-top: 120px;
}
.contacts-wrapper > h1 {
  font-size: 53px;
  font-weight: bold;
}
iframe {
  width: 525px;
  height: 457px;
}
.contacts-map {
  width: 525px;
}
.modal {
  border: 1px solid #c6c6c6;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  background-color: white;
}

.modal > h1 {
  font-size: 30px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 10px;
  margin-top: 40px;
}
.modal > p {
  font-size: 17px;
}
.modal-size {
  cursor: pointer;
  padding: 20px 50px;
  font-size: 17px;
  font-weight: bold;
  box-sizing: border-box;
  width: 112px;
  display: flex;
  justify-content: center;
  border: 2px solid #ececec;
}
.modal-size:hover {
  border-color: #63d1bb;
}
.btn-modal {
  width: 350px;
  background-color: #63d1bb;
  border: none;
  color: white;
  font-size: 17px;
  text-transform: uppercase;
  font-weight: bold;
  padding: 18px;
  cursor: pointer;
  margin-bottom: 45px;
}
.modal-wrapper {
  display: flex;
  justify-content: space-between;
  width: 350px;
  margin-bottom: 40px;
}
</style>