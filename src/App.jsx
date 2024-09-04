import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import * as C from './style.js';

function App() {
  const [list, setList] = useState([]);
  const [task, setTask] = useState('');

  function newTask(event) {
    setTask(event.target.value);
  }

  function getNewTask() {
    if (task !== '') {
      setList([...list, { id: uuid(), task: task, finished: false }]);
      setTask('');
    }
  }

  function completeTask(id) {
    const newList = list
      .map((item) =>
        item.id === id ? { ...item, finished: !item.finished } : item,
      )
      .sort((a, b) => a.finished - b.finished);

    setList(newList);
  }

  function deleteTask(id) {
    const newList = list.filter((item) => item.id !== id);

    setList(newList);
  }

  return (
    <>
      <C.Container>
        <C.Main>
          <C.ContainerInput>
            <C.Input
              onChange={newTask}
              value={task}
              id="inputTask"
              placeholder="Próxima atividade"
            />
            <C.Button onClick={getNewTask}>Adicionar</C.Button>
          </C.ContainerInput>
          <C.List>
            {list.length > 0 ? (
              list.map((item) => (
                <C.ListItem isFinished={item.finished} key={item.id}>
                  <C.FaCheckCircleStyle onClick={() => completeTask(item.id)} />
                  <li>{item.task}</li>
                  <C.FaTrashStyle onClick={() => deleteTask(item.id)} />
                </C.ListItem>
              ))
            ) : (
              <h3>Não há itens na sua lista! ( :</h3>
            )}
          </C.List>
        </C.Main>
      </C.Container>
    </>
  );
}

export default App;

