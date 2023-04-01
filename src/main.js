// Vue app creation
import { createApp } from 'vue'

// Main style
import './assets/scss/main.scss';

// Main App component import
import App from './App.vue'

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as starFull} from '@fortawesome/free-solid-svg-icons';

library.add(faStar, starFull)

// App mounted
createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')


// Prototype
Number.prototype.customRound = function() {
    const halfValue = this.valueOf() / 2;
    return Math.ceil(halfValue)
  };