<template>
  <button class="button">{{mensagem}}</button>
</template>

<script>
export default {
 props: {
    mensagem: String,

  }
}
</script>

<style scoped>
button{
    width:150px;
    height: 35px;
}
</style>

