import styled from 'styled-components';

export const register = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  min-width: 375px;
`;
export const table = styled.table`
  border: 1px solid #444444;
  font-size: 1.2em;
  border-collapse: collapse;
  width: 70%;
`;
export const form = styled.form`
  width: 60%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
export const td = styled.td`
  background-color: whitesmoke;
  padding: 5%;
  width: 35%;
  text-align: left;
`;

export const RegisterButton = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  margin-right: 30px;
  margin-bottom: 10px;
  background-color: rgb(99, 230, 95);
  color: #fff;
  border-radius: 4px;
  border: none;
  font-size: 1.3em;
  cursor: pointer;
  text-decoration-line: none;
  &:hover {
    background-color: #008000;
  }
`;
