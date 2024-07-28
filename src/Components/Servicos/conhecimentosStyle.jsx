import styled from 'styled-components';

export const Section = styled.section`
  font-family: Arial, Helvetica, sans-serif;
  color: white;
  display: flex;
  background-color: #2b2b2b;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 4rem 20%;

  section {
    display: flex;
    gap: 70%;
    justify-content: center;
    margin: 0 auto;
  }

  h2 {
    margin-bottom: 10px;
    color: #ff8700;
    font-weight: 900;
    font-size: 2.2rem;
  }

  p {
    margin-left: 5px;
    font-size: 1.1rem;
  }
`;

export const ContainerImg = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;

  img {
    background-color: #0000008b;
    padding: 5px;
    border-radius: 10px;
    width: 6rem;
    transition: all 200ms ease-in-out;
  }

  img:hover {
    transform: scale(1.05);
    box-shadow: 0 0 10px #b0481b;
  }
`;
