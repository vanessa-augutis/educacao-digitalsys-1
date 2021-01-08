<template>
  <div>
    <ContainerBotoes>
      <Botao mensagem="Novo Paciente" />
      <Botao mensagem="Nova Atividade" />
   </ContainerBotoes>
  </div>
  <div>
    <Vinput type="text" placeholder="CPF do paciente"></Vinput>
    <Vinput type="text" placeholder="Status do Aprazamento"></Vinput>
    <Vinput type="text" placeholder="Data"></Vinput>
  </div>
</template>

<script>
import Botao from '@/components/Vbotao.vue'
import ContainerBotoes from '@/components/VcontainerBotoes.vue'
import Vinput from '../components/Vinput.vue'
export default {
  components: {
    Botao,
    ContainerBotoes,
    Vinput,
  }

}
</script>

<style>

</style>
