const { ApolloServer, gql } = require('apollo-server-lambda');
const RadarrApi = require('./sources/RadarrAPI')
const SonarrApi = require('./sources/SonarrAPI')


// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
const typeDefs = gql`
  type Movie {
    title: String!
    overview: String
    year: Int
    downloaded: Boolean
    images: [Image]
  }

  type Series {
    title: String!
    overview: String
    year: Int
    genres: [String]
    images: [Image]
  }

  type Image {
    coverType: String!
    url: String!
  }

  # The "Query" type is the root of all GraphQL queries.
  # (A "Mutation" type will be covered later on.)
  type Query {
    movies: [Movie]
    series: [Series]
  }
`;

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
const resolvers = {
  Query: {
    movies: (_source, { }, { dataSources }) => dataSources.radarrAPI.getMovies(),
    series: (_source, { }, { dataSources }) => dataSources.sonarrAPI.getSeries(),
  },
};

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      radarrAPI: new RadarrApi(),
      sonarrAPI: new SonarrApi(),
    }
  }
});


exports.graphql = (event, lambdaContext, callback) => {
  // Playground handler
  if (event.httpMethod === 'GET') {
    server.createHandler({
      cors: {
        origin: '*',
        credentials: true,
      },
    })(
      { ...event, path: event.requestContext.path || event.path },
      lambdaContext,
      callback,
    );
  } else {
    server.createHandler({
      cors: {
        origin: '*',
        credentials: true,
      },
    })(event, lambdaContext, callback);
  }
};