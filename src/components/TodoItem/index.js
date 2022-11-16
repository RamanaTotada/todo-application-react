import './index.css'

const TodoItem = props => {
  const {TodoDetails, DeleteTodo} = props
  const {id, title} = TodoDetails

  const OnClickTodo = () => {
    DeleteTodo(id)
  }

  return (
    <li className="Todo-element-container">
      <p className="todo-title">{title}</p>
      <button className="button-style" type="button" onClick={OnClickTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
