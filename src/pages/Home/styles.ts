import styled, { keyframes } from "styled-components";
import { darken } from "polished";

const ScaleAnimation = keyframes`
 from {
   
    transform: rotateZ(+30deg);
  }

  to {
   transform: rotateZ(0) scale(1.5);
  }

`;

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 20px;
   
    transition: 0.2s;

    &:hover {
      color: #121213;
      background-color: rgba(255,255,255,0.8);
      box-shadow: 5px 5px 10px 10px #fb7419;
    }

    img {
      align-self: center;
      max-width: 250px;
      min-width: 250px;
      transform: rotateZ(+30deg);

      &:hover {
        animation: ${ScaleAnimation} 0.8s ease-in-out forwards;
      }
    }

    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
    }

    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
    }

    button {
      background: #121213;
      color: #fff;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;

      display: flex;
      align-items: center;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.06, "#fb7419")};
        color: #121213;
        box-shadow: 5px 5px 2px 2px #121213;
      }

      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(0, 0, 0, 0.1);

        svg {
          margin-right: 5px;
          
        }
      }

      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }
  }
`;
