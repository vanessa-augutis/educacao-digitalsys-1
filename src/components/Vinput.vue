<template>
  <input class="input" :type="type" :placeholder="placeholder"/>
</template>

<script>
export default {
 props: {
    placeholder: String,
    type: String,

  }
}
</script>

<style scoped>
.input{
    width:150px;
    height: 30px;
    margin: 5px 15px;
    color:black;
}

.input::placeholder{
    color:black;
}

.input:focus{
    outline: none;
}

</style>

