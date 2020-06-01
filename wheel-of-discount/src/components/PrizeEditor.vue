<template>
  <table class="prize-editor">
    <tr>
      <td><label for="tb-prize-name">Nome</label></td>
      <td class="prize-input-cell"><input type="text" id="tb-prize-name" v-model="prize.name" v-focus /></td>
    </tr>
    <tr>
      <td><label for="tb-prize-freq">Chances relativas</label></td>
      <td class="prize-input-cell">
        <input type="number" id="tb-prize-freq" v-model.number="prize.freq" placeholder="4" />
      </td>
    </tr>
    <tr>
      <td><label for="tb-prize-bg">Cor de fundo</label></td>
      <td class="prize-input-cell"><input type="text" id="tb-prize-bg" v-model="prize.bg" placeholder="auto" /></td>
    </tr>
    <tr>
      <td><label for="tb-prize-text">Cor do texto</label></td>
      <td class="prize-input-cell"><input type="text" id="tb-prize-text" v-model="prize.text" placeholder="#222" /></td>
    </tr>
    <tr>
      <td><label for="tb-prize-font">Escala da fonte</label></td>
      <td class="prize-input-cell">
        <input type="number" step="0.01" id="tb-prize-font" v-model.number="prize.fontMod" placeholder="1.0" />
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  name: 'PrizeEditor',
  props: {
    index: {
      type: Number,
      required: true
    },
    prize: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
.prize-input-cell > input {
  width: 160px;
}
</style>
