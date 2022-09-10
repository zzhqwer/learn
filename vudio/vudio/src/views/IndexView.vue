<template>
  <div>
    <main>
      <div class="logo"><img src="img/LOGO_text.png" /></div>
    </main>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    setTimeout(() => {
      this.$router.push("/login");
    }, 2000);
  },
};
</script>
