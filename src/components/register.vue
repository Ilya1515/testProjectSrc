<template>
  <section class="register">
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
    
    <div class="form-group" :class="{'errorForm': $v.repeatPassword.$error }">
      <label for>Повторите пароль</label>
      <input
        v-model="repeatPassword"
        type="password"
        placeholder="repeat password"
        @change="$v.repeatPassword.$touch()"
      />
    </div>
    <div class="error" v-if="!$v.repeatPassword.sameAsPassword">Passwords must be identical.</div>
    <button
      :disabled="$v.email.$invalid || $v.password.$invalid || $v.repeatPassword.$invalid"
      @click="onSubmit"
      type="button"
      class="register-btn btn"
    >Зарегистрироваться</button>
  </section>
</template>

<script>
import { required, minLength, email, sameAs } from "vuelidate/lib/validators";

export default {
  data() {
    return { email: "", password: "", repeatPassword: "" };
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
    repeatPassword: {
      sameAsPassword: sameAs("password"),
    },
  },
  methods: {
    onSubmit() {
      const user = {
        email: this.email,
        password: this.password,
      };
      this.$store
        .dispatch("registerUser", user)
        .then(() => {
          this.$router.push("/");
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style >
.form-group {
  width: 100%;
  display: flex;
  align-items: baseline;
  text-align: left;
  justify-content: space-around;
}
.btn:disabled {
  opacity: 0.2;
  cursor: not-allowed;
}
.btn:focus {
  outline: none;
}
input {
  font-size: 15px;
}
.error {
  color: red;
}
.errorInput {
  border: 2px solid red;
}
input:focus {
  outline: none;
}
.register-btn {
  background-color: white;
  border: 2px solid #444444;
  height: 52px;
  font-size: 17px;
  font-weight: bold;
  text-transform: uppercase;
  margin-top: 40px;
}
.register {
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
  margin-bottom: 50px;
  padding: 40px;
}
</style>