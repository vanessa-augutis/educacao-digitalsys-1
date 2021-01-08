<template>
  <div>
    <ContainerBotoes
      :style="'background: #ffff; justify-content: space-between'"
    >
      <p>Amparo Saúde</p>
      <p>Atividades</p>
    </ContainerBotoes>

    <ContainerBotoes
      :style="'background: gray; justify-content: space-between'"
    >
      <p>Lista de Atividades</p>
      <div>
        <Botao mensagem="Novo Paciente" :style="'background: #3CB371'" />
        <Botao mensagem="Nova Atividade" :style="'background: #3CB371'" />
      </div>
    </ContainerBotoes>
    <ContainerBotoes :style="'background: #FFF0F5'">
      <Botao mensagem="CPF do Paciente" :style="'background: #ffffff'" />
      <Botao mensagem="Novo Paciente" :style="'background: #ffffff'" />
      <Botao mensagem="Novo Paciente" :style="'background: #ffffff'" />
      <Botao mensagem="Novo Paciente" :style="'background: #ffffff'" />
    </ContainerBotoes>

    <Paginacao />
  </div>
  <div>
    <Vinput type="text" placeholder="CPF do paciente"></Vinput>
    <Vinput type="text" placeholder="Status do Aprazamento"></Vinput>
    <Vinput type="text" placeholder="Data"></Vinput>
  </div>
</template>

<script>
import Botao from "@/components/Vbotao.vue";
import ContainerBotoes from "@/components/VcontainerBotoes.vue";
import Vinput from "../components/Vinput.vue";
import Paginacao from "@/components/Vpaginacao.vue";
export default {
  components: {
    Botao,
    ContainerBotoes,
    Vinput,
    Paginacao,
  },
};
</script>

<style></style>
