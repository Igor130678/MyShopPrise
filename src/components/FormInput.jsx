import React, {useState, useContext, useRef, useEffect} from 'react'
import {DataContext} from './DataProvider'

export default function FormInput() {

  const [todos, setTodos] = useContext(DataContext);
  const [todoName, setTodoName] = useState('');
  const [todoPrise, setTodoPrise] = useState('');
  const todoInput = useRef();


  const addTodo = e => {
    e.preventDefault();
    setTodos([...todos, {name: todoName, prise: todoPrise, complete: false}])
    setTodoName('');
    setTodoPrise('');
    todoInput.current.focus();
  }

  useEffect(() => {
    todoInput.current.focus();
  }, [])

  return (
    <>
      <form autoComplete="off" onSubmit={addTodo} >
        <div className="shop-form">
          <input
            id="todos"
            type="text"
            name="todos"
            required placeholder="Что планируете сегодня купить"
            value={todoName}
            onChange={e => setTodoName(e.target.value.toLowerCase())}
            ref={todoInput}
          />
          {/* <button type="submit">добавить</button> */}
        </div>
        <div className="prise-form">
          <input
            id="prise"
            type="number"
            name="prise"
            required placeholder="Ориентировочная цена"
            value={todoPrise}
            onChange={e => setTodoPrise(e.target.value.toLowerCase())}
          />
        </div>
        <button type="submit">добавить покупку</button>
      </form>
      {/* <form autoComplete="off" onSubmit={addTodo} >
        <input
          id="todos"
          type="text"
          name="todos"
          required placeholder="Что планируете сегодня купить"
          value={todoName}
          onChange={e => setTodoName(e.target.value.toLowerCase())}
        />
        <button type="submit">добавить</button>
      </form>
      <form autoComplete="off" onSubmit={addTodo} >
        <input
          id="prise"
          type="number"
          name="prise"
          required placeholder="Ориентировочная цена"
          value={todoPrise}
          onChange={e => setTodoPrise(e.target.value.toLowerCase())}
        />
        <button type="submit">добавить</button>
      </form> */}
    </>
  )
}
