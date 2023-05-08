import './index.css'

const TodoItem = props => {
  const {todoObject, deleteTodoFunction} = props
  const ondelete = () => {
    deleteTodoFunction(todoObject.id)
  }
  return (
    <li>
      <p>{todoObject.title}</p>
      <button type="button" className="button" onClick={ondelete}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
