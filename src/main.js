import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import vuetify from './plugins/vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

import axios from 'axios'

import store from './store/store'

import Login from './components/Auth/Login.vue'
import Signup from './components/Auth/Signup.vue'
// import Lists from './components/Lists.vue'
import Tasks from './components/Tasks'
import Todo from './components/Todo'
import NotesModal from './components/NotesModal.vue'

Vue.config.productionTip = false
Vue.use(vuetify)
Vue.use(VueRouter)

axios.defaults.baseUrl = 'http://localhost:8000/api-ceduc/'
 

const routes= [
  {
    path: '/',
    component: Todo,
    name: 'todo',
    children: [
      {
        path: "list/:id",
        component: { tasks: Tasks },
        name: "tasks",
        children: [
          {
            path: "tasks/:taskId",
            component: NotesModal,
            name: "notes"
          }
        ]
      },
    ]
  },
  {
    path: '/login',
    component: Login,
    name: 'login'
  },
   {
    path: '/register',
    component: Signup,
    name: 'register'
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
  base: '/'
})


new Vue({
  vuetify,
  store,
  router, 
  render: h => h(App)
}).$mount('#app')
