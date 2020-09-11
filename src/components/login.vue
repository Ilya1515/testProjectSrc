<template>
  <section class="login">
    <div class="form-group" :class="{'errorForm': $v.email.$error }">
      <label>Логин</label>
      <input
        v-model="email"
        type="email"
        placeholder="login"
        @change="$v.email.$touch()"
        :class="{'errorInput': $v.email.$error}"
      />
    </div>
    <div class="error" v-if="!$v.email.required">Field is required</div>
    <div class="error" v-if="!$v.email.email">Email is not correct</div>

    <div class="form-group" :class="{'errorForm': $v.password.$error }">
      <label for>Пароль</label>
      <input
        v-model="password"
        type="password"
        placeholder="password"
        @change="$v.password.$touch()"
        :class="{'errorInput': $v.password.$error}"
      />
    </div>

    <div
      class="error"
      v-if="!$v.password.minLength"
    >Name must have at least {{$v.password.$params.minLength.min}} letters.</div>
    <div class="error" v-if="!$v.password.required">Field is required</div>

    <button
      :disabled="$v.email.$invalid || $v.password.$invalid"
      @click="onSubmit"
      type="button"
      class="login-btn btn"
    >Войти</button>
  </section>
</template>

<script>
import { required, minLength, email } from "vuelidate/lib/validators";

export default {
  data() {
    return { email: "", password: "" };
  },
  validations: {
    email: {
      required,
      email,
    },
    password: {
      required,
      minLength: minLength(6),
    },
  },
  methods: {
    onSubmit() {
      const user = {
        email: this.email,
        password: this.password,
      };
      this.$store
        .dispatch("loginUser", user)
        .then(() => {
          this.$router.push("/");
        })
        .catch((err) => console.log(err));
    },
  },
  created() {
    if (this.$route.query["loginError"]) {
      console.log("войдите для просмотра");
    }
  },
};
</script>

<style>
.login-btn {
  background-color: white;
  width: 175px;
  border: 2px solid #444444;
  height: 52px;
  font-size: 15px;
  font-weight: bold;
  text-transform: uppercase;
}
.login {
  font-size: 17px;
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: 0 auto;
  align-items: center;
  height: 350px;
  justify-content: space-around;
  border: 1px solid #444444;
  margin-top: 50px;
}
</style>