<template>
  <div class="card-generator">
    Введите Email получателя
    <el-button class="type" @click="closeEmail" plain>Отмена</el-button>
    <div class="card-generator-finder">
      <el-input
        placeholder="Please input Email"
        v-model="email"
        @change="checkEmail"
      ></el-input>
      <el-button type="primary" :disabled="!isEmailValid" @click="sendEmail"
        >Send Email</el-button
      >
    </div>
    <p>
      На указанный Email мы отправим письмо с приложенной карточкой в формате
      PDF
    </p>
  </div>
</template>

<script>
export default {
  name: "SendEmail",
  data: () => ({
    isEmailValid: false,
    email: "",
  }),
  methods: {
    closeEmail() {
      this.$emit("close");
    },
    sendEmail() {
      this.$emit("mailsent");
    },
    checkEmail() {
      if (
        this.email &&
        /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_-])+\.([A-Za-z]{2,4})$/.test(
          this.email
        )
      )
        this.isEmailValid = true;
    },
  },
};
</script>
<style lang="scss" scoped>
.card-generator {
  height: 100%;
  width: 100%;
  font-size: 48px;
  position: absolute;
  z-index: 5;
  background-color: #fff;
  & > .type {
    float: right;
  }
  & > p {
    font-size: 16px;
  }
  &-finder {
    display: flex;
    flex-direction: row;
    height: 56px;
    width: 100%;
    margin-bottom: 46px;
    margin-top: 32px;
    & > input {
      border: 1px solid #a9a9a9;
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
      outline: none;
      padding: 18px;
      font-size: 18px;
      font-weight: 100;
      width: 60%;
    }
  }
}
.action-button {
  display: flex;
  width: auto;
  height: 32px;
  padding: 18px;
  font-weight: 600;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  background-color: dodgerblue;
  justify-content: center;
  align-items: center;
  &--find {
    cursor: pointer;
    display: flex;
    height: auto;
    padding: 18px;
    font-weight: 600;
    color: #fff;
    border: none;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    cursor: pointer;
    background-color: dodgerblue;
    justify-content: center;
    align-items: center;
  }
}
@media (max-width: 770px) {
  .card-generator {
    font-size: 32px;
    &-finder {
      max-width: 100%;
      width: 100%;
      height: auto;
      flex-direction: column;
      margin-bottom: 48px;
      & > input {
        border-radius: 6px;
        margin-bottom: 24px;
        width: 100%;
      }
    }
  }
  .action-button--find {
    border-radius: 6px;
  }
}
</style>
