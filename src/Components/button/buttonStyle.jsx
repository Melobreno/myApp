import styled from 'styled-components';

export const Container = styled.button`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  max-width: fit-content;
  padding: 0.5rem 0.8rem;
  margin: 0 auto;
  color: white;
  background-color: #ff8700;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  }
`;
