'use strict';

// The wheel used in the game show 'Wheel of Discount'.
export const PRESET1 = {
  name: 'Roda de prêmios',
  winningText: 'Resultado: <b>%s</b>',
  background: '',
  removeWinning: false,
  prizes: [
    { name: '10% desconto', freq: 3, bg: '#8B0000', text: '#eee', hide: false, fontMod: 1 },
    { name: '3%', freq: 3, bg: '#48D1CC', text: '#222', hide: false, fontMod: 1 },
    { name: '5%', freq: 3, bg: '#FFD700', text: '#222', hide: false, fontMod: 1 },
    { name: 'Tente outra vez!', freq: 3, bg: '#4B0082', text: '#eee', hide: false, fontMod: 1 },
    { name: '10%', freq: 3, bg: '#8B0000', text: '#eee', hide: false, fontMod: 1 },
    { name: '3%', freq: 3, bg: '#48D1CC', text: '#222', hide: false, fontMod: 1 },
    { name: '5%', freq: 3, bg: '#FFD700', text: '#222', hide: false, fontMod: 1 },
    { name: 'Tente outra vez!', freq: 3, bg: '#4B008', text: '#eee', hide: false, fontMod: 1 }
  ]
};

export const DEFAULT_PRESETS = PRESET1;
