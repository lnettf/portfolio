import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f9f9f9;
  padding: 2rem;
  border-radius: 8px;
  &:hover {
    box-shadow: 2px 9px 12px 8px rgba(219, 219, 219, 0.53);
    transform: translateY(-10px);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
`;

export const Title = styled.h3`
  color: rgb(42, 163, 243);
  font-size: 20px;
  margin: 10px;
`;

export const Description = styled.p`
  color: rgb(124, 124, 124);
  text-align: left;
  margin: 0px;
`;
