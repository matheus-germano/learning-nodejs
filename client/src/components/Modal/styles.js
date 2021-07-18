import styled from 'styled-components'

export const ModalBackground = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;

  background: rgba(0, 0, 0, 0.5);
`;

export const ModalContainer = styled.div`
  width: 500px;
  height: 750px;

  display: flex;
  flex-direction: column;

  margin: 20px;
  padding: 20px;

  background: white;

  border-radius: 10px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
`;

export const ModalHeader = styled.div`
  width: 100%;
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid #999;

  h1 {
    font-size: 1.5rem;
  }

  svg {
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

export const ModalBody = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 20px 0;

  textarea {
    width: 100%;
    height: 150px;

    margin: 10px auto;
    padding: 10px;

    border-radius: 10px;
    border: 1px solid #333;

    resize: vertical;

    transition: all 0.2s;

    ::placeholder {
      color: #999;
    }

    :focus {
      border: 1px solid #0A81AB;
      box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;

  margin: 10px auto;
  padding: 10px;

  border-radius: 10px;
  border: 1px solid #333;

  transition: all 0.2s;

  ::placeholder {
    color: #999;
  }

  :focus {
    border: 1px solid #0A81AB;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  }
`;

export const Checkbox = styled.input`
  width: 16px;
  height: 16px;

  margin: 10px 0;
`;

export const Text = styled.p`
  text-align: start;
  margin: 10px 0;

  span {
    color: #0A81AB;
    text-decoration: underline;
    cursor: pointer;
  }
`;


export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;
  }
`;

export const ModalFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: auto;
  border-top: 1px solid #999;
  padding-top: 10px;

  button {
    width: 100%;
    height: 50px;

    border-radius: 10px;
    background: #0A81AB;
    color: #fff;

    font-weight: 700;

    cursor: pointer;

    transition: all 0.2s;

    :hover {
      background: #0C4271;
    }
  }
`;