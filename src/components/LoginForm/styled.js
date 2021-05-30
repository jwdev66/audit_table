import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;  
  align-items: flex-end;  
`;

export const Title = styled.div`
  width: 100%;
  height: 40px;
  font-size: 25px;  
  text-align: center;
  font-weight: 700;
`;

export const Input = styled.input`
  width: 300px;
  height: 30px;
  font-size: 16px;
  margin: 5px;    
`;

export const Button = styled.button`
  width: 120px;
  height: 36px;
  font-size: 16px;
  margin: 5px;    
  cursor: pointer;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;   
  cursor: pointer;
  font-size: 16px;
  &:hover {
    font-weight: 700;
  }
`;

export const ErrorMessage = styled.div`
  width: 100%;
  height: 20px;
  font-size: 12px;  
  text-align: center;  
  color: red;
  font-weight: 500;
`;