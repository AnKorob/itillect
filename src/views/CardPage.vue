<template>
  <div class="card-page">
    <CompanyCard
      @setaccount="(e) => (this.bankAccount = e)"
      @open="modalEmail = true"
    />
    <OrderPage v-bind:bankAccount="bankAccount" />
    <SendEmail
      v-if="modalEmail"
      @mailsent="modalEmail = false"
      @close="modalEmail = false"
    />
  </div>
</template>
<script>
import CompanyCard from "@/components/CardPageComponents/CompanyCard.vue";
import OrderPage from "@/components/CardPageComponents/OrderPage.vue";
import SendEmail from "../components/SendEmail.vue";
import { mapState } from "vuex";

export default {
  name: "CardPage",
  components: {
    CompanyCard,
    OrderPage,
    SendEmail,
  },
  data: () => ({
    modalEmail: "",
    // searchCompany: "",
    oppositeAccount: "",
    isCustomer: "",
  }),
  computed: {
    ...mapState(["searchCompany"]),
  },
  methods: {},
};
</script>
<style lang="scss">
.card-page {
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  padding-bottom: 10px;
  flex-direction: column;
  font-family: "Roboto", sans-serif;
}

@media (max-width: 770px) {
}
</style>
