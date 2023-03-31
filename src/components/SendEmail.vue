<template>
  <div class="card-generator">
    Введите Email получателя
    <div class="card-generator-finder">
      <input type="text" v-model="companyId" />
      <button class="action-button--find" @click="$emit('moveto')">Find</button>
    </div>
    <p>
      На указанный Email мы отправим письмо с приложенной карточкой в формате
      PDF
    </p>
  </div>
</template>
<script>
export default {
  name: "CardGenerator",
  data: () => ({
    companyId: "",
  }),
};
</script>
<style lang="scss">
.card-generator {
  height: 100%;
  width: 100%;
  font-size: 48px;
  &-finder {
    display: flex;
    flex-direction: row;
    height: 56px;
    width: 100%;
    margin-bottom: 46px;
    margin-top: 32px;
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
p {
  font-size: 16px;
}
input {
  border: 1px solid #a9a9a9;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  outline: none;
  padding: 18px;
  font-size: 18px;
  font-weight: 100;
  width: 60%;
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
    }
  }
  input {
    border-radius: 6px;
    margin-bottom: 24px;
    width: 100%;
  }
  .action-button--find {
    border-radius: 6px;
  }
}
</style>
