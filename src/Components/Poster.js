import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 250px;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  overflow: hidden;
  width: 100%;
  align-items: center;
`;

const Image = styled.div`
  background-image: url(${(props) => props.bgUrl});
  background-position: top center;
  background-size: cover;
  flex-grow: 1;
  min-width: 100%;
`;

const SFontAwesomeIcon = styled(FontAwesomeIcon)`
text-align: center;
font-size: 6em;
flex-grow: 1;
color: #888;
`;

const Description = styled.div`
  min-width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1rem;
`;

const Title = styled.h2`
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const Poster = ({ title, rating, imageUrl }) => (
  <Container>
    {imageUrl ? <Image bgUrl={imageUrl} /> : <SFontAwesomeIcon icon={faCoffee} />}
    <Description>
      <Title>{title.length > 12 ? `${title.substring(0, 12)}...` : title}</Title>
      <span>{rating}</span>
    </Description>
  </Container>
);

export default Poster;
