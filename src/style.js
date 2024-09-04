import styled from 'styled-components';

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
  cursor: pointer;

  border-radius: 5px;
  border: 2px solid #cf5f02;
  background-color: transparent;

  transition: ease-in-out;

  &:hover {
    background-color: #cf5f02;
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
  padding: 0 26px;

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
