import React from 'react';
import { Query } from 'react-apollo';
import { YTSMovies } from './queries';

const Home = () => (
  <Query query={YTSMovies}>
    {({ loading, data, error }) => {
      if (loading) return <span>loading</span>;
      if (error) return <span>{error}</span>;
      if (data) {
        const { YTSmovies } = data;
        return YTSmovies.map((movie) => (
          <p key={movie.id}>
            {movie.title} / {movie.rating}
          </p>
        ));
      }
      return <span>What Happend?</span>;
    }}
  </Query>
);

export default Home;
