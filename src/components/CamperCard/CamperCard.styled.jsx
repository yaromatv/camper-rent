import styled from 'styled-components';

export const CamperCardContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  img {
    width: 100%;
    border-radius: 5px;
  }
  h3 {
    margin-top: 10px;
    font-size: 18px;
  }
  .details {
    margin-top: 10px;
    p {
      font-size: 14px;
      margin: 5px 0;
    }
  }
  button {
    margin-top: 10px;
    padding: 8px 16px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      background-color: #0056b3;
    }
  }
`;
