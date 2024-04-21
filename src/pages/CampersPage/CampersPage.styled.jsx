import styled from 'styled-components';

export const CampersPageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  .camper-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
  }
`;
