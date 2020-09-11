<template>
  <main>
    <section class="intro-catalog">
      <div class="intro-info">
        <h2>Новые поступления</h2>
        <h2 class="intro-info__sale">Распродажа</h2>
        <p>Бесплатная доставка по России</p>
      </div>
      <h1 class="intro__title--catalog">Вязание на заказ</h1>
    </section>
    <section class="new-product">
      <input required v-model="title" type="text" id="title" placeholder="укажите название"
       @change="$v.title.$touch()"
        :class="{'errorInput': $v.title.$error}" />
      <div class="error" v-if="!$v.title.required">Field is required</div>
      <div
      class="error"
      v-if="!$v.title.minLength"
    >Name must have at least {{$v.title.$params.minLength.min}} letters.</div>

      <input required v-model="price" type="number" id="price" placeholder="укажите цену"
       @change="$v.price.$touch()"
        :class="{'errorInput': $v.price.$error}" />
      <div class="error" v-if="!$v.title.required">Field is required</div>

      <textarea v-model="description" id="item_desc" placeholder="Опишите товар"></textarea>
      <input type="file" accept="image/*" @click="upload" @change="onFileChange" />
      <div>
        <img :src="imageSrc" v-if="imageSrc" width="450" height="250" />
      </div>

      <button :disabled="$v.title.$invalid || $v.price.$invalid" @click="createProduct" class="test btn" type="button">добавить</button>
    </section>
  </main>
</template>

<script>
import { required, minLength, numeric } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      description: "",
      title: "",
      price: "",
      name: "",
      imageSrc: "",
      image: null,
    };
  },
  validations: {
    title: {
      required,
      minLength: minLength(3),
    },
    price: {
      required,
      numeric,
    },
  },
  methods: {
    onFileChange(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.imageSrc = reader.result;
      };
      reader.readAsDataURL(file);
      this.image = file;
    },
    upload() {},
    createProduct() {
      const newProduct = {
        title: this.title,
        price: this.price,
        description: this.description,
        promo: false,
        image: this.image,
      };
      this.$store.dispatch("srat", newProduct);
      console.log(newProduct);
      setTimeout(() => {
        this.$router.push("catalog");
        document.location.reload();
      }, 1000);
    },
  },
};
</script>

<style scoped>
.btn:hover {
  color: white;
  background-color: #444444;
  cursor: pointer;
}
.btn:disabled {
  opacity: 0.2;
  cursor: not-allowed;
}
.btn:active {
  color: #575757;
  border-color: #444444;
}
.new-product {
  width: 1050px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 800px;
  align-items: center;
  margin-top: 50px;
}
input {
  width: 525px;
  padding: 10px;
  border: none;
  border-bottom: 1px solid black;
}
textarea {
  border-color: #444444;
  width: 525px;
}
.test {
  width: 297px;
  background-color: white;
  border: 2px solid #444444;
  color: #444444;
  padding: 10px;
  font-size: 17px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
}
</style>