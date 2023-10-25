<template>
    <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" @click="toggleDropdown" :class="{ 'show': isOpen }">
      <img :src="selectedCoin ? selectedCoin.image : ''" alt="coin icon" class="coin-icon">
      {{ selectedCoin ? selectedCoin.name : 'Select Coin' }}
    </button>
    <ul class="dropdown-menu" v-if="isOpen" :class="{ 'show': isOpen }">
      <li v-for="coin in coins" :key="coin.id">
        <a class="dropdown-item" @click="selectCoin(coin)">
          <img :src="coin.image" alt="coin icon" class="coin-icon">
          {{ coin.name }}
        </a>
      </li>
    </ul>
  </div>
  </template>
  
  <script>
  export default {
    props: {
      coins: Array, // List of coins
      selectedCoin: Object, // Currently selected coin
    },
    data() {
      return {
        isOpen: false,
      };
    },
    methods: {
      toggleDropdown() {
        this.isOpen = !this.isOpen;
      },
      selectCoin(coin) {
        this.$emit('update:selected-coin', coin);
        this.isOpen = false;
      },
    },
  };
  </script>