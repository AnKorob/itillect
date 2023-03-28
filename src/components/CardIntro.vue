<template>
  <div class="card-intro">
    <div class="card-intro-text">
      <h1>Удобная онлайн карточка вашей организации.</h1>
      <p>Сгенерируйте карточку вашей организации.</p>
      <p>
        Копируйте данные для договоров и делитесь карточкой с вашими партнерами
        в удобном формате.
      </p>
      <ul>
        <li>DOCX</li>
        <li>PDF</li>
        <li>Ссылка</li>
        <li>Email</li>
      </ul>
      <p>
        Открытый доступ к карточке без интернета с мобильного телефона.
        Сохраните на мобильном HomeScreen.
      </p>
      <button class="action-button" @click="$emit('toggle')">
        Сгенерировать карточку
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
  justify-content: space-between;
  margin-top: 20px;
  &-text {
    width: auto;
    display: block;
    flex-direction: column;
    align-items: flex-start;
    max-width: 50%;
    & > img {
      height: 246px;
      width: 400px;
      margin-bottom: 10px;
      & + p {
        color: dodgerblue;
      }
      & ~ p {
        margin-bottom: 10px;
      }
    }
  }
}
p {
  margin-bottom: 30px;
  font-size: 16px;
  font-weight: 300;
  color: #a9a9a9;
}
ul {
  margin-bottom: 30px;
}
li {
  display: inline;
  margin-right: 20px;
  font-size: 16px;
  font-weight: 300;
  color: #a9a9a9;
}
h1 {
  font-weight: 500;
  font-size: 40px;
  margin-bottom: 30px;
}
.action-button {
  display: flex;
  width: auto;
  height: 56px;
  padding: 18px;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  background-color: dodgerblue;
  justify-content: center;
  align-items: center;
}
</style>
