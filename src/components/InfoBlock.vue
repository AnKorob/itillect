<template>
  <div>
    <div v-for="field in getClientCompanyTableRows" :key="field.key">
      <template>
        <el-row
          class="company-card-info-block"
          :class="{ 'card-generator-info-row': generator }"
          :key="field.key"
          v-if="field.value"
        >
          <el-col
            :span="6"
            class="company-card-info-block-option"
            :class="{ 'card-generator-info-row-option': generator }"
          >
            {{ field.label }}
          </el-col>
          <el-col
            :span="14"
            class="company-card-info-block-value"
            :class="{ 'card-generator-info-row-value': generator }"
          >
            {{ field.value }}
          </el-col>
          <el-col :span="4" v-if="!generator">
            <el-button
              type="primary"
              class="copy"
              @click="copyText(field.value)"
            >
              Копировать
            </el-button>
          </el-col>
        </el-row>
      </template>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "InfoBlock",
  props: {
    generator: Boolean,
  },
  computed: {
    ...mapGetters(["getClientCompanyTableRows"]),
  },
  methods: {
    copyText(text) {
      this.$message("Скопировано");
      navigator.clipboard.writeText(text);
    },
  },
};
</script>
<style lang="scss">
.card-generator-info {
  &-row {
    font-size: 18px;
    font-weight: 300;
    margin-bottom: 16px;
    height: auto;
    display: flex;

    &-option {
      display: flex;
      font-weight: 600;
    }
    &-value {
      display: flex;
    }
  }
}
.company-card-info-block {
  display: flex;
  width: 100%;
  flex-direction: row;
  height: 100%;
  margin: 0;
  padding: 8px 0;
  font-size: 16px;
  text-align: justify;

  &:hover {
    background-color: #f5f5f5;
    .copy {
      padding: 0 24px;
      opacity: 1;
      margin-right: 10px;
      width: 96px;
      height: 22px;
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        opacity: 1;
        padding: 4px 24px;
        transition: 0.1s;
        background-color: #03274e;
        border: 1px solid #03274e;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
  & > .copy--visible {
    width: 48px;
  }

  &-option {
    height: 100%;
    padding: 10px;
    display: flex;
    color: #666666;
    justify-content: flex-start;
    align-items: center;
    text-align: justify;
    text-transform: uppercase;
  }
  &-value {
    display: flex;
    align-items: center;
    padding: 0 12px;
    text-align: justify;
    font-weight: 500;
    text-transform: uppercase;
  }
}
.copy {
  position: relative;
  float: right;
  transform: translateY(50%);
  align-self: center;
  padding: 0 24px;
  opacity: 0;
  width: 96px;
  height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
