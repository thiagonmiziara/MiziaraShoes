import styled, { keyframes } from 'styled-components';
import { darken, lighten } from 'polished';

const ScaleAnimation = keyframes`
 from {
   
    transform: scale(0);
  }

  to {
   transform: scale(1);
  }

`;

export const Container = styled.div`
  padding: 30px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 5px 5px 10px 10px #fb7419;
  animation: ${ScaleAnimation} .6s ease-in;

  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background: #121213;
      color: #fff;
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.06, '#fb7419')};
      }
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }

  img {
    height: 100px;
  }

  strong {
    color: #333;
    display: block;
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
      padding: 6px;
      width: 50px;
    }
  }

  button {
    background: none;
    border: 0;
    padding: 6px;

    svg {
      color: #fb7419;
      transition: color 0.2s;
    }

    &:hover {
      svg {
        color: ${darken(0.06, '#fb7419')};
      }
    }

    &:disabled {
      svg {
        color: ${lighten(0.25, '#fb7419')};
        cursor: not-allowed;
      }
    }
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #999;
    font-weight: bold;
  }

  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`;
