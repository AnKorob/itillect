<template>
  <div class="card-page">
    <CompanyCard
      @setaccount="(e) => (bankAccount = e)"
      @open="modalEmail = true"
    />
    <ContractTemplate :bankAccount="bankAccount" />
    <SendEmail
      v-if="modalEmail"
      @mailsent="modalEmail = false"
      @close="modalEmail = false"
    />
  </div>
</template>
<script>
import CompanyCard from "@/components/card-page/company-info/CompanyInfo.vue";
import ContractTemplate from "@/components/card-page/contract-template/ContractTemplate.vue";
import SendEmail from "../components/card-page/SendEmail.vue";
import { mapState } from "vuex";

export default {
  name: "CardPage",
  components: {
    CompanyCard,
    ContractTemplate,
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
<style lang="scss" scoped>
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
