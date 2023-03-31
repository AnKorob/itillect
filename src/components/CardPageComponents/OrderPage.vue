<template>
  <div class="order">
    <div class="order-pattern">
      <div class="order-pattern-header">
        <h1>Shablon</h1>
        <button class="copy--visible">Copy</button>
      </div>
      <div class="order-pattern-content">
        ASDF, именуемое в дальнейшем "Заказчик" с одной стороны, и QWERTY ,
        именуемое в дальнейшем "Исполнитель"с другой стороны, ZXCVBNM совместно
        именуемые «Стороны», а по отдельности «Сторона», заключили настоящий
        Договор о нижеследующем:
      </div>
      <div class="order-pattern-block">
        <div class="order-pattern-block-header">
          <h1>Rekvizit</h1>
          <button class="copy--visible">Copy</button>
        </div>
        <div class="order-pattern-block-card">
          <div class="order-pattern-block-card-agent">
            <h3>зак</h3>
            123
          </div>
          <div class="order-pattern-block-card-agent">
            <h3>исп</h3>
            456
          </div>
        </div>
      </div>
    </div>
    <RequisitesSettings />
  </div>
</template>
<script>
import RequisitesSettings from "./RequisitesSettings.vue";
export default {
  name: "OrderPage",
  // data: () => ({
  //   indEnt: ["INN", "BIK", "Order"],
  //   phyPer: ["FIO", "Serial No", "When", "Where", "sub Id"],
  // }),
  components: {
    RequisitesSettings,
  },
};
</script>
<style lang="scss">
.order {
  display: flex;
  flex-direction: row;
  &-pattern {
    display: flex;
    flex-direction: column;
    &-header {
      display: flex;
      width: 100%;
      flex-direction: row;
      margin-bottom: 24px;
      justify-content: space-between;
    }
    &-content {
      display: flex;
      font-weight: 300;
      font-size: 14px;
      margin-bottom: 48px;
    }
    &-block {
      display: flex;
      flex-direction: column;
      &-header {
        display: flex;
        width: 100%;
        flex-direction: row;
        margin-bottom: 24px;
        justify-content: space-between;
      }
      &-card {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        &-agent {
          display: flex;
          flex-direction: column;
          font-weight: 300;
          font-size: 14px;
          border-bottom: 1px solid #000;
        }
      }
    }
  }
}
h1 {
  font-weight: 300;
  font-size: 24px;
}
h3 {
  font-weight: 600;
  font-size: 15px;
}
.copy--visible {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  width: 96px;
  padding: 0 18px;
  border: none;
  background-color: #0a81ff;
  color: #fff;
  font-size: 12px;
  border-radius: 3px;
  cursor: pointer;
  right: 0;
  top: 6px;
  &:hover {
    background-color: #03274e;
    width: 96px;
  }
}
@media (max-width: 770px) {
  .order {
    display: flex;
    flex-direction: column-reverse;
    &-pattern {
      display: flex;
      flex-direction: column;
      &-header {
        display: flex;
        flex-direction: column;
        margin-bottom: 24px;
        justify-content: space-between;
        align-items: center;
      }
      &-content {
        display: flex;
        font-weight: 300;
        font-size: 14px;
        margin-bottom: 48px;
      }
      &-block {
        display: flex;
        flex-direction: column;
        &-header {
          display: flex;
          flex-direction: column;
          margin-bottom: 24px;
          justify-content: space-between;
          align-items: center;
        }
        &-card {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: flex-start;
          &-agent {
            display: flex;
            flex-direction: column;
            font-weight: 300;
            font-size: 14px;
            border-bottom: 1px solid #000;
          }
        }
      }
    }
  }
  h1 {
    font-weight: 300;
    font-size: 24px;
  }
  h3 {
    font-weight: 600;
    font-size: 15px;
  }
  .copy--visible {
    width: 300px;
    &:hover {
      width: 300px;
    }
  }
}
</style>
