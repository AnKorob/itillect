<template>
  <div class="card-intro">
    <div class="card-intro-text">
      <h1>Удобная онлайн карточка вашей организации.</h1>
      <p>Сгенерируйте карточку вашей организации.</p>
      <p>
        Копируйте данные для договоров и делитесь карточкой с вашими партнерами
        в удобном формате.
      </p>
      <p>DOCX PDF Ссылка Email</p>
      <p>
        Открытый доступ к карточке без интернета с мобильного телефона.
        Сохраните на мобильном HomeScreen.
      </p>
      <button class="action-button" @click="$emit('toggle')">
        Generate card
      </button>
    </div>
    <div class="card-intro-text">
      <img src="@/assets/bcard-logo.svg" />
      <p>Не требует регистрации и предоставляется - БЕСПЛАТНО</p>
      <p>*Дата актуальности справочников: 25.03.2023</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "CardIntro",
};
</script>
<style lang="scss">
.card-intro {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  &-text {
    display: inline-block;
    & > img {
      height: 246px;
      width: 400px;
    }
  }
}
p {
  margin-bottom: 10px;
}
.action-button {
  cursor: pointer;
}
</style>
