// Vue app creation
import { createApp } from 'vue'

// Main style
import './assets/scss/main.scss';

// Main App component import
import App from './App.vue'

// App mounted
createApp(App).mount('#app')

// Prototype
Number.prototype.customRound = function() {
    const halfValue = this.valueOf() / 2;
    return Math.ceil(halfValue)
  };