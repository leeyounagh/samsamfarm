import styled from "styled-components";

export const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 4rem;
  font-family: "양진체";
  src: url("https://cdn.jsdelivr.net/gh/supernovice-lab/font@0.9/yangjin.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
  h1 {
    text-align: center;
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

export const Search = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const Searchinput = styled.input`
  width: 200px;
  height: 30px;
  padding: 5px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid gray;
  margin-right: 10px;

  @media (max-width: 768px) {
    width: 80%;
    margin-right: 10px;
    margin-bottom: 10px;
  }
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

  @media (max-width: 768px) {
    width: 40%;
    margin-bottom: 10px;
  }

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
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
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

  @media (max-width: 768px) {
    padding: 10px;
  }
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

  @media (max-width: 768px) {
    margin: 5px 3px;
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
  border-radius: 5px;

  &:hover {
    background-color: #b48a01;
  }

  float: right;

  @media (max-width: 768px) {
    /* float: non; */
    margin: 20px 0;
  }
`;
