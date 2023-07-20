/*eslint-disable*/
//TODO: use dynamic values, maybe from env vars
const GRAPHQL_API =
  'https://blue-surf-1040009.us-east-1.aws.cloud.dgraph.io/graphql'

window.addEventListener('load', function (event) {
  GraphQLPlayground.init(document.getElementById('root'), {
    endpoint: GRAPHQL_API,
  })
})
