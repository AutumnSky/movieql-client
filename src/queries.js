import gql from 'graphql-tag';

export const YTSMovies = gql`
  {
    YTSmovies(limit: 50, minimum_rating: 6.0) {
      id
      title
      rating
      medium_cover_image
    }
  }
`;
