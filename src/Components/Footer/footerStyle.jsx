import styled from 'styled-components';

export const Container = styled.div`
  font-size: 12px;
  font-weight: 600;
  background-color: #2b2b2b;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 20%;
  color: white;
  height: 50px;

  span {
    color: #ff8700;
    cursor: pointer;
  }

  img {
    margin-left: 10px;
    transition: all 200ms ease-in-out;
  }

  img:hover {
    transform: scale(1.2);
  }

  p {
    margin-right: 10px;
  }
`;
