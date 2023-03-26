<template>
  <div class="card-generator">
    Введите ИНН организации
    <div class="card-generator-finder">
      <input type="text" v-model="companyId" />
      <button class="action-button--find">Find</button>
    </div>
    <p>Мы найдем реквизиты организациий и ИП в ЕГРЮЛ или ЕГРИП</p>
    <p>В ИНН организации 10 цифр или 12 цифр для ИП.</p>
    <p>ИНН можно найти в свидетельстве о регистрации организации</p>
    <button class="action-button" @click="$emit('toggleback')">Обратно</button>
  </div>
</template>
<script>
export default {
  name: "CardGenerator",
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
    max-width: 50%;
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
}
</style>
