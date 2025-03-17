import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  background: #f9f9f9;
`;

export const Title = styled.h3`
  font-size: 2.5rem;
`;

export const SubTitle = styled.h3`
  font-size: 1.5rem;
`;

export const Image = styled.img`
  flex: 1;
  min-width: 300px;
`;

export const Content = styled.div`
  flex: 2;
  min-width: 300px;
`;

export const HighlightContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const ContentLayout = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  gap: 20px;
`;
