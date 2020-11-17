import styled from 'styled-components';

const Button = styled.button`
  background-color: black;
  border: none;
  padding: 10px 25px;
  color: white;
  font-size: 13px;
  font-weight: 600;
  flex-shrink: 0;
  a {
    text-decoration: none;
    color: inherit;
  }
  @media only screen and (max-width: 800px){
    flex-shrink: auto;
  }
    
`;

export default Button;