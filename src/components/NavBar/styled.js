import styled from "styled-components";

export const Container = styled.div`    
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  height: 30px;
`;

export const LogoTitle = styled.span`  
  font-weight: bold;
  font-size: 30px;
  color: blue;
`;

export const Button = styled.button`  
  font-weight: bold;
  font-size: 20px;
  border: none;
  color: blue;
  cursor: pointer;
  background-color: transparent;
  &:hover {    
    border-bottom: 1px solid blue;
  }
`;