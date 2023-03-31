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
      <div class="card-intro-text-img">
        <img src="@/assets/bcard-logo.svg" />
      </div>
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
  &-text {
    width: 564px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 45%;
    &:nth-child(2) {
      align-items: flex-end;
    }
    &-img {
      display: flex;
      top: 0px;
      right: 0px;
      margin-bottom: 10px;
      justify-content: flex-end;
      & > img {
        max-height: 246px;
        max-width: 400px;
        float: right;
      }
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
  width: 100%;
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
@media (max-width: 770px) {
  .card-intro {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    &-text {
      max-width: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      &-img {
        & > img {
          display: none;
        }
      }
    }
  }
  h1 {
    width: 100%;
    font-size: 32px;
  }
  p {
    margin-bottom: 0px;
  }
  .action-button {
    width: 100%;
    margin-top: 32px;
    margin-bottom: 32px;
  }
}
</style>
