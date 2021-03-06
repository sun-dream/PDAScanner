// Import Vue
import Vue from 'vue'

// Import Framework7
import Framework7 from 'framework7/dist/framework7.esm.bundle.js';

// Import Framework7 Vue
import Framework7Vue from 'framework7-vue/dist/framework7-vue.esm.bundle.js';

// Import F7 Style
import Framework7CSS from 'framework7/dist/css/framework7.css'

// Import F7 iOS Icons
import Framework7Icons from 'framework7-icons/css/framework7-icons.css'

// Import Fontawesome Theme Styles
import FontAwesome from 'font-awesome/css/font-awesome.css'

// Import gobal css  
import  gobal from './assets/css/gobal.css'

// Import App Custom Styles
import AppStyles from './assets/sass/main.scss'

// Import App Component
import app from './main.vue'

// Import Routes
import routes from './routes.js'

// Import Vuex Storage
import store from './assets/vuex/storage.js'

// import API
import api from 'assets/vue/api/api'

// import app config
import projectConfig from './config.js'


// Install Plugin
Vue.use(Framework7Vue, Framework7);


let theme = 'auto';
if (document.location.search.indexOf('theme=') >= 0) {
  theme = document.location.search.split('theme=')[1].split('&')[0];
}

//封装全局的api请求
Vue.prototype.api=api

//封装公共请求(post)
Vue.prototype.post=function(url,params){

    return Framework7.request.post(url,params, function(data){
        console.log(data);
    });

}

Vue.prototype.get=function(url, params){

    return Framework7.request.get(url,params);

}

Vue.options.root = projectConfig.serverPath
Vue.options.timeout = 3000;


Vue.mixin({
    data () {
        return {
            globalSetting: projectConfig,
        }
    }
})


// Init Vue App
export default new Vue({
  // Root Element
  el: '#app',
  store,
  render: c => c('app'),
  components: {
    app,
  },
  framework7: {
    id: 'io.framework7.testapp',
    theme, // md or ios
  },
  routes,
});
