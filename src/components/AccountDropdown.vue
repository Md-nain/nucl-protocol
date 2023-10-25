<template>
    <div class="dropdown white-dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" @click="toggleDropdown" :class="{ 'show': isOpen }">
        <span v-if="selectedAccount">
          {{ selectedAccount.name }} ({{ selectedAccount.number }})
        </span>
        <span v-else>
          Select an account
        </span>
      </button>
      <ul class="dropdown-menu" v-if="isOpen" :class="{ 'show': isOpen }">
        <li v-for="account in accounts" :key="account.id">
          <a class="dropdown-item" @click="selectAccount(account)">
            {{ account.name }} ({{ account.number }})
          </a>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      accounts: Array,
      selectedAccount: Object, // Added a new prop for selected account
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
      selectAccount(account) {
        this.$emit('update:selected-account', account); // Emit the selected account
        this.isOpen = false;
      },
    },
  };
  </script>