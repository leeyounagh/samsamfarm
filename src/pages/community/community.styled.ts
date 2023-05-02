import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  th,
  td {
    padding: 10px;
    border: 1px solid #ddd;
  }
  th {
    background-color: #f5f5f5;
    font-weight: bold;
    text-align: center;
  }
  td {
    text-align: left;
  }
`;

export const TitleLink = styled.a`
  color: #333;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
