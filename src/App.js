import { VStack, IconButton, Box, Heading, useColorMode } from '@chakra-ui/react';
import { FaSun, FaMoon } from "react-icons/fa";
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState(() => JSON.parse(localStorage.getItem('todos')) || []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  function deleteTodo(id) {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });

    setTodos(newTodos);
  }

  function addTodo(todo) {
    setTodos([...todos, todo]);
  }

  const {colorMode, toggleColorMode} = useColorMode();
  
  return (
    <VStack p='4'>
      <IconButton icon={colorMode === 'light' ? <FaSun /> : <FaMoon />} isRound='true' size='lg' alignSelf='flex-end' onClick={toggleColorMode} />
      <Box>
      <Heading className="transparent-heading">Todo Application</Heading>
      </Box>
      <TodoList todos={todos} deleteTodo={deleteTodo} />
      <AddTodo addTodo={addTodo} />
    </VStack>
  );
}

export default App;
