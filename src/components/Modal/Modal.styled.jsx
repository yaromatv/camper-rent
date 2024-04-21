import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  .modal-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    max-width: 600px;
    width: 100%;
    overflow: auto;

    .close-btn {
      position: absolute;
      top: 10px;
      right: 10px;
      background: none;
      border: none;
      font-size: 24px;
      cursor: pointer;
    }

    h2 {
      margin-top: 0;
    }

    label {
      display: block;
      margin-top: 12px;
      font-weight: bold;
    }

    input[type='text'],
    input[type='email'],
    input[type='date'],
    textarea {
      width: 100%;
      padding: 8px;
      margin-top: 4px;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-sizing: border-box;
    }

    textarea {
      height: 100px;
    }

    button[type='submit'] {
      background-color: #007bff;
      color: #fff;
      border: none;
      padding: 8px 16px;
      border-radius: 4px;
      cursor: pointer;
      margin-top: 12px;
      transition: background-color 0.3s;

      &:hover {
        background-color: #0056b3;
      }
    }
  }
`;
