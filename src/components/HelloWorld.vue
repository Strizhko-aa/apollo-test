<template>
  <div class="hello">
    <button @click="test()">test</button>
    <div v-for="(movie, index) in movies" :key="index">{{ movie }}</div>
    <div>{{ dataFe }}</div>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import axios from 'axios'

// const GET_MOVIES = gql`
//   query getMovies {
//     movies {
//       id
//       title
//       director
//       composer
//       release_date
//     }
//   }
// `

// const GET_DATA = gql`
// query landList {
//   pageInfo {
//     hasNextPage
//     hasPreviousPage
//     startCursor
//     endCursor
//   }
// }`

export default {
  name: 'HelloWorld',
  data () {
    return {
      movies: [],
      dataFe: []
    }
  },
  apollo: {
    // movies: {
    //   query: GET_MOVIES
    // }
    dataFe: {
      query: gql`
        query landList {
          pageInfo {
            hasNextPage
            hasPreviousPage
            startCursor
            endCursor
          }
        }`
    }
  },
  methods: {
    test () {
      /* eslint-disable-next-line */
      axios.post('https://dev.it-thematic.ru/aisumz/ugeoapi/graphql/', {"query":"{\n  landList(first: 10) {\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n      startCursor\n      endCursor\n    }\n    edges {\n      node {\n        id\n        guid\n        rightSet {\n          edges {\n            node {\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n}\n","variables":null}).then(response => {
        console.log(response)
        alert('success')
      }).catch(err => {
        console.log(err)
        alert('fail')
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
