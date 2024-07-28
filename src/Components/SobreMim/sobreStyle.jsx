import styled from 'styled-components';

export const ContainerSec = styled.section`
  display: flex;
  align-items: center;
  background-color: black;
  padding: 2rem 20%;
`;

export const Container = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  max-width: 1000px;
  margin: 0 auto;
  zoom: 110%;
  padding: 20px 20px;
  align-items: center;
  justify-content: space-evenly;
  align-content: flex-start;
  background-color: #2b2b2b;
  color: white;
  border-radius: 10px;
  border: 1px solid #ff8700;
  gap: 100px;

  p {
    max-width: 600px;
  }

  img {
    border-radius: 10px;
  }
`;

export const SobreMim = styled.div`
  gap: 5px;
  display: flex;
  flex-direction: column;
  align-self: flex-start;

  h1 {
    margin-bottom: 5px;
  }

  h3 {
    color: #ff8700;
  }
`;

export const Contatos = styled.div`
  > div {
    display: flex;
    justify-self: flex-start;
    gap: 30px;
  }

  img {
    margin-top: 10px;
    width: 50px;
    background-color: black;
    cursor: pointer;
  }

  img:hover {
    transform: scale(1.05);
    box-shadow: 0 0 10px #b0481b;
  }

  > h3 {
    margin-top: 50px;
  }
`;
