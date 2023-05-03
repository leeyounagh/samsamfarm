import styled from "styled-components";

export const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 40px;
  p {
    text-align: right;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  background-color: #fff2d7;
`;

export const TableRow = styled.tr`
  &:hover {
    background-color: #f5f5f5;
  }
  text-align: center;
`;

export const TableData = styled.td`
  padding: 15px;
  border: 1px solid #ddd;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const PaginationButton = styled.button<{ active?: boolean }>`
  margin: 0 5px;
  background-color: ${({ active }) => (active ? "#ddd" : "#fff")};
  border: 1px solid #ddd;
  color: ${({ active }) => (active ? "#333" : "#999")};
  padding: 5px 10px;
  cursor: ${({ active }) => (active ? "default" : "pointer")};
  outline: none;

  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    background-color: ${({ active }) => (active ? "#ddd" : "#f5f5f5")};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
