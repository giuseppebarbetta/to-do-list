import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import * as C from './style.js';
import { FaTrash, FaCheckSquare } from 'react-icons/fa';

function App() {
  const [list, setList] = useState([
    { id: uuid(), task: 'Trabalhar', finished: true },
  ]);
  const [task, setTask] = useState('');

  function newTask(event) {
    setTask(event.target.value);
  }

  function getNewTask() {
    setList([...list, { id: uuid(), task: task, finished: false }]);
    setTask('');
  }
  return (
    <>
      <C.Container>
        <C.Main>
          <C.ContainerInput>
            <C.Input
              onChange={newTask}
              id="inputTask"
              placeholder="Próxima atividade"
            />
            <C.Button onClick={getNewTask}>Adicionar</C.Button>
          </C.ContainerInput>
          <C.List>
            {list.length > 0 &&
              list.map((item) => (
                <C.ListItem isFinished={item.finished} key={item.id}>
                  <FaCheckSquare />
                  <li>{item.task}</li>
                  <FaTrash />
                </C.ListItem>
              ))}
          </C.List>
        </C.Main>
      </C.Container>
    </>
  );
}

export default App;

