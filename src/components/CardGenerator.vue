<template>
  <div class="card-generator">
    Введите ИНН организации
    <div class="card-generator-finder">
      <input type="text" />
      <button class="action-button--find">Find</button>
    </div>
    <p>Мы найдем реквизиты организациий и ИП в ЕГРЮЛ или ЕГРИП</p>
    <p>В ИНН организации 10 цифр или 12 цифр для ИП.</p>
    <p>ИНН можно найти в свидетельстве о регистрации организации</p>
    <button class="action-button" @click="$emit('toggleback')"></button>
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
    justify-content: space-around;
  }
}
.action-button {
  width: 100px;
  height: 32px;
  cursor: pointer;
  &--find {
    cursor: pointer;
  }
}
p {
  font-size: 16px;
}
</style>
