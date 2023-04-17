<template>
  <div class="link-page">
    Ссылка скопирована в буфер
    <div>window.location.href</div>
  </div>
</template>

<script>
export default {
  name: "GetLink",
  data: () => ({}),
  methods: {
    copyText(text) {
      navigator.clipboard.writeText(text);
    },
  },
};
</script>
<style lang="scss" scoped>
.link-page {
  height: 100%;
  width: 100%;
  font-size: 48px;
  position: absolute;
  z-index: 5;
  background-color: #fff;
}
</style>
