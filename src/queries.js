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

export const YTSMovie = gql`
  query getYTSMovie($movieId: Int!) {
    YTSmovie(id: $movieId) {
      id
      title
      rating
      description_intro
      medium_cover_image
    }
  }
`;
