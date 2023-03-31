<template>
  <div class="card-page">
    <!-- <div class="linkModal">
      <div class="cardLinkMessage">Ссылка скопирована в буфер</div>
      <div class="cardLink">https://itillect.ru/bcard/M9UNyh</div>
    </div> -->
    <CompanyCard />
    <OrderPage />
  </div>
</template>
<script>
import CompanyCard from "@/components/CardPageComponents/CompanyCard.vue";
import OrderPage from "@/components/CardPageComponents/OrderPage.vue";
export default {
  name: "CardPage",
  components: {
    CompanyCard,
    OrderPage,
  },
  data: () => ({}),
  methods: {},
};
</script>
<style lang="scss">
.card-page {
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: "Roboto", sans-serif;
}
// .copy {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   opacity: 0;
//   margin: 0 18px;
//   width: 96px;
//   right: 0;
//   top: 6px;
//   cursor: pointer;
//   font-size: 12px;
//   height: 24px;
//   background-color: #0a81ff;
//   border-radius: 3px;
//   color: #fff;
//   border: none;
//   &:hover {
//     opacity: 1;
//     width: 96px;
//     display: flex;
//     height: 24px;
//     justify-content: center;
//     align-items: center;
//     margin: 0 18px;
//     border: none;
//     background-color: #03274e;
//     color: #fff;
//     font-size: 12px;
//     border-radius: 3px;
//     cursor: pointer;
//     right: 0;
//     top: 6px;
//   }
//   &--visible {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     height: 24px;
//     width: 96px;
//     padding: 0 18px;
//     border: none;
//     background-color: #0a81ff;
//     color: #fff;
//     font-size: 12px;
//     border-radius: 3px;
//     cursor: pointer;
//     right: 0;
//     top: 6px;
//     &:hover {
//       background-color: #03274e;
//       width: 96px;
//     }
//   }
// }
// .linkModal {
//   background-color: #fff;
//   position: absolute;
//   height: 100%;
//   width: 100%;
//   top: 0;
//   bottom: 0;
//   right: 0;
//   left: 0;
// }
@media (max-width: 770px) {
}
</style>
