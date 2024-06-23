import React, { useState } from 'react';
import { HStack, Input, Button, useToast } from '@chakra-ui/react';
import { nanoid } from 'nanoid';

const AddTodo = ({addTodo}) => {
  const [content, setContent] = useState('');
  const toast = useToast();
  
  function handleSubmit(e) {
    e.preventDefault();

    // adding todos toast
    if(content) {
      toast({
        title: 'Added to todos',
        status: 'success',
        duration: 1000,
        isClosable: true
      });
       }
     else if(!content) {
      toast({
        title: 'No content',
        status: 'error',
        duration: 2000,
        isClosable: true
      });

      return;
    }
    
    const todo = {
      id: nanoid(),
      body: content
    };

    addTodo(todo);
    setContent('');
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <HStack mt='8'>
        <Input variant='filled' placeholder='Learning React' value={content} onChange={(e) => setContent(e.target.value)} />
        <Button type='submit' colorScheme='green' px='8'>Add Todo</Button>
      </HStack>
    </form>
  );
}

export default AddTodo;
