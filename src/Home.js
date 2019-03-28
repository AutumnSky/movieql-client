import React from 'react';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import { YTSMovies } from './queries';
import styled from 'styled-components';
import Poster from './Components/Poster';

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 5vw;
  padding: 5vw;
`;

const Home = () => (
  <React.Fragment>
    <Title>Movies for you</Title>
    <Query query={YTSMovies}>
      {({ loading, data, error }) => {
        if (loading) return <span>loading</span>;
        if (error) return <span>{error}</span>;
        if (data) {
          const { YTSmovies } = data;
          return (
            <Container>
              {YTSmovies.map((movie) => (
                <Link to={`/detail/${movie.id}`} key={movie.id}>
                  <Poster title={movie.title} rating={movie.rating} imageUrl={movie.medium_cover_image} />
                </Link>
              ))}
            </Container>
          );
        }
        return <span>What Happend?</span>;
      }}
    </Query>
  </React.Fragment>
);

export default Home;
