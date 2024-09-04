import styled from 'styled-components';
import { FaTrash, FaCheckCircle } from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #efefef;

  width: 100vw;
  height: 100vh;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #ffffff;
  padding: 30px 20px;
  border-radius: 8px;

  width: 60%;
  height: 75%;
`;

export const ContainerInput = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 10px;

  width: 100%;
  margin-bottom: 26px;
`;

export const Input = styled.input`
  border: 2px solid rgba(209, 211, 212, 0.4);
  border-radius: 5px;

  padding-left: 15px;

  font-size: 17px;
  height: 35px;
  width: 70%;
`;

export const Button = styled.button`
  height: 35px;
  padding: 0 35px;

  font-size: 17px;
  font-weight: 900;
  color: #00214d;
  cursor: pointer;

  border-radius: 5px;
  border: 2px solid #00214d;
  background-color: transparent;

  transition: ease-in-out 0.3s;

  &:hover {
    background: rgb(2, 0, 36);
    background: linear-gradient(
      0deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(14, 125, 164, 1) 100%
    );
    color: #ffffff;
  }
`;

export const List = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 35px;
`;

export const ListItem = styled.div`
  background-color: ${(props) => (props.isFinished ? '#E8FF8B' : '#E4E4E4')};
  opacity: ${(props) => (props.isFinished ? '50%' : '100%')};
  box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 0 17px;

  height: 60px;
  width: 90%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 26px;

  li {
    list-style: none;
  }
`;

export const FaTrashStyle = styled(FaTrash)`
  color: #ff0808;
  cursor: pointer;
  font-size: 17px;
  opacity: 80%;

  transition: transform 0.3s ease;
  transform: scale(0.9);

  &:hover {
    transform: scale(1);
    opacity: 100%;
  }
`;

export const FaCheckCircleStyle = styled(FaCheckCircle)`
  color: #1c7b00;
  cursor: pointer;
  font-size: 20px;
  opacity: 80%;

  transition: transform 0.3s ease;
  transform: scale(0.9);

  &:hover {
    transform: scale(1.1);
    opacity: 100%;
  }
`;
