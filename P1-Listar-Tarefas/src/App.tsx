import { useState } from 'react';
import * as C from './App.style';
import { Item } from './types/item';
import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea';

const App = () => {

  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Estudar React Native', done: false},
    { id: 2, name: 'Fazer um Formulário no Survey 123', done: false},
    { id: 3, name: 'Refazer o Model Builder', done: false}
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });
    setList(newList);
  }

   // Função feita para tarefinha de casa.
 const handleTaskChange = (id: number, done: boolean) => {
  let newList = [...list];
  for(let i in newList) {
    if(newList[i].id === id) {
      newList[i].done = done;
    }
  }
  setList(newList);
}

  return (
    <div>
      <C.Container>
        <C.Area>
          <C.Header> Lista de Tarefas</C.Header>

          <AddArea onEnter={handleAddTask} />

          {list.map((item, index) => (
            <ListItem 
              key={index} 
              item={item}
              onChange={handleTaskChange}
            />
          ))}
        </C.Area>
      </C.Container>
    </div>
  );
}

export default App;
