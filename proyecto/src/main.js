import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUGEjjpbRde9F5BxdLM0bPQCSxumWMLD0",
  authDomain: "practicaionic-9c7ba.firebaseapp.com",
  projectId: "practicaionic-9c7ba",
  storageBucket: "practicaionic-9c7ba.appspot.com",
  messagingSenderId: "727765858868",
  appId: "1:727765858868:web:d05d58f0026c60f8e1e861"
};

const appFirebase = initializeApp(firebaseConfig);

/* Theme variables */
import './theme/variables.css';

const app = createApp(App)
  .use(IonicVue)
  .use(router)
  .use(appFirebase);

router.isReady().then(() => {
  app.mount('#app');
});