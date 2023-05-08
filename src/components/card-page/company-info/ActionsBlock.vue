<template>
  <div class="action">
    <el-button class="action-btn" plain @click="downloadPdf">PDF</el-button>
    <el-button class="action-btn" plain @click="downloadWord">DOCX</el-button>
    <el-button class="action-btn" plain @click="$emit('open-email-block')">
      Отправить на email
    </el-button>
    <el-button class="action-btn" plain @click="$flashMessage(currentLink)">
      Получить ссылку
    </el-button>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  name: "ActionsBlock",
  computed: {
    currentLink() {
      return window.location.href;
    },
  },
  methods: {
    ...mapActions(["getPdf", "getWord"]),
    openEmail() {
      this.$emit("open");
    },
    downloadPdf() {
      this.getPdf(this.$route.params.hash);
    },
    downloadWord() {
      this.getWord(this.$route.params.hash);
    },
  },
};
</script>
<style lang="scss">
.action {
  display: flex;
  flex: 1;
  justify-content: flex-end;

  & > &-btn {
    display: flex;
    align-items: center;
    height: 32px;
    &:first-of-type {
      margin-left: 10px;
    }
  }
}
</style>
