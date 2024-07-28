import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  max-width: 350px;
  flex-direction: column;
  gap: 1.5rem;
  font-family: Arial, Helvetica, sans-serif;

  h1 {
    font-size: 2rem;
  }

  span {
    color: #ff8700;
  }

  p {
    font-size: 1.1rem;
  }
`;

export const ContainerImg = styled.div`
  max-width: fit-content;
  img {
    position: relative;
    animation: flutuar 2s ease-in-out infinite alternate;
  }

  @keyframes flutuar {
    /* Estado inicial */
    0% {
      top: 0;
    }

    /* Estado final */
    100% {
      top: 30px;
    }
  }
`;

export const mainContainer = styled.section`
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 600px;
`;
