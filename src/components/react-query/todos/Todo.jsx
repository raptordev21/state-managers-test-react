import { useQuery, useMutation, useQueryClient } from 'react-query'
import { getTodos, addTodo, updateTodo, deleteTodo } from '../../../apis/todosApi'
import { useState } from 'react'
import './Todo.css'

function Todo() {
  const [newTodo, setNewTodo] = useState('')
  const queryClient = useQueryClient()

  const { isLoading, isError, error, data: todos } = useQuery('todos', getTodos, {
    select: data => data.sort((a, b) => b.id - a.id)
  })

  const addTodoMutation = useMutation(addTodo, {
    onSuccess: () => {
      // Invalidates cache and refetch
      queryClient.invalidateQueries("todos")
    }
  })

  const updateTodoMutation = useMutation(updateTodo, {
    onSuccess: () => {
      // Invalidates cache and refetch
      queryClient.invalidateQueries("todos")
    }
  })

  const deleteTodoMutation = useMutation(deleteTodo, {
    onSuccess: () => {
      // Invalidates cache and refetch
      queryClient.invalidateQueries("todos")
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    addTodoMutation.mutate({ userId: 1, title: newTodo, completed: false })
    setNewTodo('')
  }

  const newItemSelection = (
    <form onSubmit={handleSubmit}>
      <div className='form-group'>
        <label htmlFor="new-todo">Enter new todo</label>
        <input type="text" id='new-todo' value={newTodo} onChange={(e) => { setNewTodo(e.target.value) }} placeholder="Enter new Todo" />
      </div>
      <div className='form-group'>
        <input type="submit" value="Add" />
      </div>
    </form>
  )

  let content
  if (isLoading) {
    content = <p>Loading...</p>
  } else if (isError) {
    content = <p>{error.message}</p>
  } else {
    content = todos.map((todo) => {
      return (
        <article key={todo.id}>
          <div className="todo">
            <input
              type="checkbox"
              id={todo.id}
              checked={todo.completed}
              onChange={() => updateTodoMutation.mutate({ ...todo, completed: !todo.completed })}
            />
            <label htmlFor={todo.id}>{todo.title}</label>
          </div>
          <button className='trash' onClick={() => deleteTodoMutation.mutate({ id: todo.id })}>Delete</button>
        </article>
      )
    })
  }

  return (
    <main className='Todo'>
      <h1>Todo List</h1>
      {newItemSelection}
      {content}
    </main>
  )
}

export default Todo