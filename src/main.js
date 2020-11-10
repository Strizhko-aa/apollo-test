// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import { createProvider } from './vue-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

// import VueApollo, { ApolloProvider, createProvider } from 'vue-apollo'
import VueApollo from 'vue-apollo'

Vue.config.productionTip = false

const httpLink = new HttpLink({
  // uri: 'https://graphql-harry-potter-api.herokuapp.com/v1alpha1/graphql'
  uri: 'https://dev.it-thematic.ru/aisumz/ugeoapi/graphql/'
})

const apolloClient = new ApolloClient({
  link: httpLink,
  // fetchOptions: {
  //   mode: 'no-cors'
  // },
  cache: new InMemoryCache(),
  connectToDevTools: true
})

Vue.use(VueApollo)

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  apolloProvider,
  components: { App },
  template: '<App/>'
})
