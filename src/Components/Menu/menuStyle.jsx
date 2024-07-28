import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 30px;
  a {
    font-size: 1rem;
    font-weight: 600;
    text-decoration: none;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    transition: font-size 0.3s ease;
  }

  li {
    list-style-type: none;
  }

  a:hover {
    box-shadow: 0 0 10px rgb(71, 66, 66);
  }
`;
