import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo'

const GET_MOVIES = gql`
  query getMovies {
    movies {
      title
    }
  }
`

const Routes = () => 
  <Query query={GET_MOVIES}>
    {({data}) => {
      console.log(data)
      return <h1>Testing</h1>
    }}
  </Query>


export default Routes