<template>
  <div class="card-page">
    <CompanyInfo
      @setaccount="(e) => (this.bankAccount = e)"
      v-bind:bankAccount="bankAccount"
      @open="modalEmail = true"
    />
    <ContractTemplate v-bind:bankAccount="bankAccount" />
    <SendEmail
      v-if="modalEmail"
      @mailsent="modalEmail = false"
      @close="modalEmail = false"
    />
  </div>
</template>
<script>
import CompanyInfo from "@/components/card-page/company-info/CompanyInfo.vue";
import ContractTemplate from "@/components/card-page/contract-template/ContractTemplate.vue";
import SendEmail from "@/components/card-page/SendEmail.vue";
import { mapState } from "vuex";

export default {
  name: "CardPage",
  components: {
    CompanyInfo,
    ContractTemplate,
    SendEmail,
  },
  data: () => ({
    bankAccount: "",
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
