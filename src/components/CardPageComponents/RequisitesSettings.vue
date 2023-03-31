<template>
  <div class="settings">
    <h1>Настройки</h1>
    <div class="settings-header">Название ООО</div>
    <BaseSwitch
      v-modal="isCustomer"
      @input="(toggle) => (this.isCustomer = toggle)"
    />
    <div class="settings-header">Контрагент</div>
    <BaseSwitch
      v-modal="isIndividual"
      @input="(toggle) => (this.isIndividual = toggle)"
    />
    <div class="settings-field" v-if="!isIndividual">
      <label class="settings-field-label">ИНН</label>
      <input type="text" class="settings-field-value" />
    </div>
    <div class="settings-field" v-if="!isIndividual">
      <label class="settings-field-label">БИК</label>
      <input type="text" class="settings-field-value" />
    </div>
    <div class="settings-field" v-if="!isIndividual">
      <label class="settings-field-label">Р/с</label>
      <input type="text" class="settings-field-value" />
    </div>
    <div class="settings-field" v-if="isIndividual">
      <label class="settings-field-label">ФИО</label>
      <input type="text" class="settings-field-value" />
    </div>
    <div class="settings-field" v-if="isIndividual">
      <label class="settings-field-label">Серия и Номер</label>
      <input type="text" class="settings-field-value" />
    </div>
    <div class="settings-field" v-if="isIndividual">
      <label class="settings-field-label">Дата Выдачи</label>
      <input type="text" class="settings-field-value" />
    </div>
    <div class="settings-field" v-if="isIndividual">
      <label class="settings-field-label">Кем Выдан</label>
      <input type="text" class="settings-field-value" />
    </div>
    <div class="settings-field" v-if="isIndividual">
      <label class="settings-field-label">Код Подразделения</label>
      <input type="text" class="settings-field-value" />
    </div>
    <br />
    <div class="settings-comment">
      *Мы не сохраняем данные контрагентов.После перезагрузки страниц,данные о
      контрагентах обнуляться.
    </div>
  </div>
</template>
<script>
import BaseSwitch from "@/components/BaseComponents/BaseSwitch.vue";
export default {
  name: "RequisitesSettings",
  components: {
    BaseSwitch,
  },
  data: () => ({
    isIndividual: false,
    isCustomer: false,
  }),
};
</script>
<style lang="scss">
.settings {
  display: flex;
  flex-direction: column;
  width: 332px;
  padding-left: 32px;
  &-field {
    display: flex;
    flex-direction: column;
    width: 300px;
    &-value {
      width: 300px;
      height: 28px;
      border: 1px solid #666;
      color: #666;
      border-radius: 5px;
      &:focus {
        border: 1px solid #0a81ff;
      }
    }
    &-label {
      height: 28px;
      font-size: 14px;
      font-size: 600;
    }
  }
  &-comment {
    width: 100%;
    margin-top: 32px;
    padding-top: 24px;
    text-align: left;
    font-weight: 300;
    border-top: 1px solid #666;
  }
}
h1 {
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 24px;
}
@media (max-width: 770px) {
  .settings {
    width: 300px;
    padding-left: 0;
    border-top: 1px solid #000;
    &-comment {
      margin-bottom: 12px;
    }
  }
}
</style>
