<template>
  <div class="company-card">
    <div class="company-card-header">
      <div class="company-card-header-name">"OOOSmth"</div>
      <div class="company-card-header-button">
        <button class="type">PDF</button>
        <button class="type">DOCX</button>
        <button class="type">Email</button>
        <button class="type">Link</button>
      </div>
    </div>
    <div class="company-card-info">
      <div
        class="company-card-info-block"
        v-for="companyOption in companyOptions"
        :key="companyOption"
      >
        <div class="company-card-info-block-option">{{ companyOption }}</div>
        <div class="company-card-info-block-value"></div>
        <button class="copy">Copy</button>
      </div>
      <div class="company-card-info-header">Банковские реквизиты</div>
      <div
        class="company-card-info-block"
        v-for="(value, name) in post"
        :key="value"
      >
        <div class="company-card-info-block-option">
          {{ name }}
        </div>
        <div class="company-card-info-block-value">{{ value }}</div>
        <button class="copy">Copy</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CompanyCard",
  data: () => ({
    companyOptions: [
      "Полное Наименование",
      "Краткое Наименование",
      "Юр. Адрес",
      "Почтовый Адрес",
      "ИНН",
      "КПП",
      "ОГРН",
      "ОКПО",
      "Ген. Директор",
    ],
    bankSettings: ["Расчетный Счет", "БИК", "Наименование Банка", "Корр/счет"],
    post: { title: "", id: "", body: "" },
  }),
  methods: {},
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then(
        (json) =>
          (this.post.title = json.title) &&
          (this.post.id = json.id) &&
          (this.post.body = json.body)
      );
  },
};
</script>
<style lang="scss">
.company-card {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 38px;
  &-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-weight: 300;
    margin-bottom: 32px;
    &-name {
      display: flex;
      font-size: 36px;
    }
    &-button {
      display: flex;
      cursor: pointer;
    }
  }
  &-info {
    display: flex;
    flex-direction: column;
    &-header {
      font-size: 20px;
      margin-top: 32px;
      margin-bottom: 32px;
    }
    &-block {
      display: flex;
      flex-direction: row;
      align-content: center;
      align-items: center;
      justify-content: center;
      & > .copy--visible {
        width: 48px;
      }
      &:hover {
        background-color: #ccc;
        & > .copy {
          opacity: 1;
          width: 96px;
        }
      }
      &-option {
        display: flex;
        color: #666666;
        justify-content: flex-start;
        align-items: center;
        width: 300px;
        text-transform: uppercase;
      }
      &-value {
        display: flex;
        align-items: center;
        padding: 0 12px;
        width: 600px;
        font-weight: 500;
        text-transform: uppercase;
      }
    }
  }
}
.type {
  cursor: pointer;
  width: auto;
  display: block;
  height: 32px;
  float: left;
  margin-left: 12px;
  padding: 0 14px;
  font-size: 14px;
  border-radius: 4px;
  border: 1px solid #e8e8e8;
  background-color: #fff;
  &:hover {
    cursor: pointer;
    border-color: #0a81ff;
    color: #0a81ff;
  }
}
.copy {
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  margin: 0 18px;
  width: 96px;
  right: 0;
  top: 6px;
  cursor: pointer;
  font-size: 12px;
  height: 24px;
  background-color: #0a81ff;
  border-radius: 3px;
  color: #fff;
  border: none;
  &:hover {
    opacity: 1;
    width: 96px;
    display: flex;
    height: 24px;
    justify-content: center;
    align-items: center;
    margin: 0 18px;
    border: none;
    background-color: #03274e;
    color: #fff;
    font-size: 12px;
    border-radius: 3px;
    cursor: pointer;
    right: 0;
    top: 6px;
  }
}
@media (max-width: 770px) {
  .company-card {
    &-header {
      flex-direction: column-reverse;
      &-button {
        width: 100%;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        // padding-left: 60px;
        // padding-right: 60px;
      }
    }
    &-info {
      &-block {
        position: relative;
        flex-direction: column;
        width: 100%;
        &-option,
        &-value {
          width: 100%;
          align-items: flex-start;
          padding: 0;
        }
      }
    }
  }
  .copy {
    position: absolute;
    width: 32px;
    height: 16px;
    margin: 0;
    top: 0px;
    right: 0px;
    &:hover {
      width: 32px;
      height: 16px;
      margin: 0;
      top: 0px;
      right: 0px;
    }
  }
  .type {
    width: 120px;
    margin: 0;
    margin-bottom: 10px;
  }
}
</style>
