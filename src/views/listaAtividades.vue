<template>
  <div>
    <ContainerBotoes>
      <Botao mensagem="Novo Paciente" />
      <Botao mensagem="Nova Atividade" />
   </ContainerBotoes>
  </div>
</template>

<script>
import Botao from '@/components/Vbotao.vue'
import ContainerBotoes from '@/components/VcontainerBotoes.vue'
export default {
  components: {
    Botao,
    ContainerBotoes
  }

}
</script>

<style>

</style>
