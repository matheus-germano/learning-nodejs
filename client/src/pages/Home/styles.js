import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 100%;
  max-width: 1300px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0 auto;
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 auto;
  padding: 20px;
  gap: 20px;

  @media (max-width: 620px) {
    flex-direction: column;
  }
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 300px;
  height: 60px;

  background: #fff;

  border-radius: 10px;

  svg {
    margin-right: 20px;
  }
`;

export const Input = styled.input`
  color: #333;
  padding: 20px;
  border-radius: 10px;
`;

export const Button = styled.button`
  width: 300px;
  height: 60px;
  border-radius: 10px;

  background: #0A81AB;
  color: #fff;
  font-weight: bold;

  cursor: pointer;

  transition: all .2s;

  :hover {
    background: #0C4271;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  }
`;

export const ProjectsContainer = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 50px auto;

  gap: 20px;
`;

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 20px;

  img {
    width: 256px;
    height: 100%;
  }
`;

export const Text = styled.p`
  color: #999;
`;