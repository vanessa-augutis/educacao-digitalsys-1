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
    border-radius: 3px;
    border: 1px solid;
    margin-right: 8px;
}
</style>

