import {Component} from 'react'

import './index.css'

import TodoItem from '../TodoItem/index'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {
    userTodoList: initialTodosList,
  }

  deleteTodoFunction = id => {
    const {userTodoList} = this.state
    const filterTodoData = userTodoList.filter(each => each.id !== id)
    this.setState({userTodoList: filterTodoData})
  }

  render() {
    const {userTodoList} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="title">Simple Todos</h1>
          <ul>
            {userTodoList.map(eachTodo => (
              <TodoItem
                todoObject={eachTodo}
                key={eachTodo.id}
                deleteTodoFunction={this.deleteTodoFunction}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
