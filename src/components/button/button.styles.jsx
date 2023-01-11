import styled from 'styled-components';
export const BaseButton=styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    background-color: black;
    color: white;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    white-space: nowrap;
  
    &:hover {
      background-color: white;
      color: black;
      border: 1px solid black;
    }
    `;
  
    export const GoogleSignInButton=styled(BaseButton)`
      background-color: #4285f4;
      color: white;
  
      &:hover {
        background-color: #357ae8;
        border: none;
      }
    }
  
    &.inverted {
      background-color: white;
      color: black;
      border: 1px solid black;
  
      &:hover {
        background-color: black;
        color: white;
        border: none;
      }
    `;
    export const InvertedButton=styled(BaseButton)`
      background-color: rgb(14, 13, 13);
      color: rgb(7, 149, 76);
      border: 5px solid rgb(187, 123, 5);
      &:hover {
        background-color: black;
        color: white;
        border: none;
      }
    
  `;