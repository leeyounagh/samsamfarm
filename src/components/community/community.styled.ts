import styled from "styled-components";

export const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 40px;
  font-family: "양진체";
  src: url("https://cdn.jsdelivr.net/gh/supernovice-lab/font@0.9/yangjin.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
  h1 {
    text-align: center;
  }
`;

export const Search = styled.div`
  float: right;
  margin-bottom: 30px;
`;
export const Searchinput = styled.input`
  width: 300px;
  height: 30px;
  padding: 5px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid gray;
  margin-right: 10px;
`;

export const SearchBtn = styled.button`
  padding: 8px;
  border: none;
  background-color: #e6b619;
  color: #fff;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #b48a01;
  }

  &:active {
    background-color: #a07b01;
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

export const WritingBtn = styled.button`
  padding: 8px;
  border: none;
  background-color: #e6b619;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  /* margin: 0 30px 30px 0; */
  border-radius: 5px;

  &:hover {
    background-color: #b48a01;
  }
  float: right;
`;
