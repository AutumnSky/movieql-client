import React from 'react';
import { Query } from 'react-apollo';
import { YTSMovie } from './queries';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Poster = styled.img`
  height: 50vh;
  margin-bottom: 2rem;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const Rating = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const Desc = styled.p`line-height: 1.5rem;`;

const Detail = (props) => {
  const { params: { movieId } } = props.match;
  return (
    <Query query={YTSMovie} variables={{ movieId: parseInt(movieId) }}>
      {({ loading, error, data }) => {
        if (loading) return 'loading';
        if (error) return 'error';
        if (data) {
          const { title, rating, description_intro, medium_cover_image } = data.YTSmovie;
          return (
            <Container>
              <Poster src={medium_cover_image} />
              <Title>{title}</Title>
              <Rating>
                <span role="img" aria-label="star">
                  ⭐️
                </span>
                {rating}
              </Rating>
              <Desc>{description_intro}</Desc>
            </Container>
          );
        }
      }}
    </Query>
  );
};

export default Detail;
