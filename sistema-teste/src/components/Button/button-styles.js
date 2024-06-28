import styled from "styled-components";

export const Button = styled.button`
  padding: 16px 20px;
  outline: none;
  border: none;
  border-radius: 5px;
  width: 100%;
  cursor: pointer;
  background: linear-gradient(90deg, rgba(139,3,41,1) 0%, rgba(74,10,60,1) 35%, rgba(7,11,11,1) 100%);
  color: white;
  font-weight: 600;
  font-size: 16px;
  max-width: 350px;

  &:hover {
    background: #8b0329;
    color: #fff;
  }
`;