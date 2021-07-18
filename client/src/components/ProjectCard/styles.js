import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 100%;
  width: 300px;
  height: 150px;

  padding: 20px;
  background: #fff;

  border-radius: 10px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
`;

export const CardHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 10px;
`;

export const Title = styled.h1`
  font-size: 1rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const OptionsContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 5px;

  #delete {
    color: red;
    cursor: pointer;
    font-size: 1.3rem;
  }

  #edit {
    color: #0A81AB;
    cursor: pointer;
    font-size: 1.3rem;
  }
`;

export const CardBody = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  gap: 10px;
`;

export const Description = styled.p`
  text-align: justify;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const Tech = styled.p`
  text-align: justify;
  text-overflow: ellipsis;
  overflow: hidden;

  color: #999;
`;