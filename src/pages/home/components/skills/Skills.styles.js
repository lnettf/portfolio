import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  padding: 20px;
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;
