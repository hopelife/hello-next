import { withData } from 'next-apollo'
import { HttpLink } from 'apollo-link-http'

const config = {
  link: new HttpLink({
    uri: "http://localhost:4000/graphiql", // Server URL (must be absolute)
    // uri: 'https://api.graph.cool/simple/v1/cixmkt2ul01q00122mksg82pn', // Server URL (must be absolute)
    // opts: {
    //   credentials: 'same-origin' // Additional fetch() options like `credentials` or `headers`
    // }
  })
}


// import ApolloClient from "apollo-boost";

// const client = new ApolloClient({
//   uri: "http://localhost:4000/graphiql"
// });

export default withData(config)