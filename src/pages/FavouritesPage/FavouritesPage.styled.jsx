import styled from 'styled-components';

export const FavouritesPageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  .camper-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
  }

  h2 {
    margin-bottom: 20px;
  }
`;
