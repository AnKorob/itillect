<template>
  <div class="action">
    <el-button class="action-btn" plain @click="downloadPdf">PDF</el-button>
    <el-button class="action-btn" plain>DOCX</el-button>
    <el-button class="action-btn" plain @click="openEmail">
      Отправить на email
    </el-button>
    <el-button class="action-btn" plain @click="$flashMessage(getMessage)"
      >Получить ссылку</el-button
    >
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  name: "ActionsBlock",
  computed: {
    getMessage() {
      return window.location.href;
    },
  },
  methods: {
    ...mapActions(["getPdf"]),
    openEmail() {
      this.$emit("open");
    },
    downloadPdf() {
      this.getPdf(this.$route.params.hash);
    },
  },
};
</script>
<style lang="scss">
.action {
  display: flex;
  flex: 1;
  &-btn {
    padding: 0 24px !important;
    height: 32px;
    float: left;
    margin-bottom: 10px !important;
    &:first-of-type {
      margin-left: 10px;
    }
  }
}
</style>
