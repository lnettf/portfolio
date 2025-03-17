import { Link, NavLink } from "react-router";
import styled from "styled-components";

export const Container = styled.div`
  border-bottom: 1px black solid;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
`;

export const List = styled.div`
  display: flex;
  list-style: none;
  gap: 20px;
  justify-content: flex-end;
`;

export const Title = styled.h1`
  color: rgb(79, 226, 255);
  &:hover {
    opacity: 0.5;
  }
  font-size: 25px;
`;

export const Item = styled(NavLink)`
  padding: 2px 4px;
  border-radius: 4px;
  text-decoration: none;

  &:hover {
    color: rgba(0, 0, 0, 0.51);
  }
`;
