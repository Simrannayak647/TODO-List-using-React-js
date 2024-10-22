import React from 'react'

const TodoItems = ({todoItems}) => {
  return (
    <div>
      <div className='item-container'>
        <TodoItems todoDate ="4/10/2025" todoName="Go shopping"></TodoItems>
        <TodoItems todoDate ="4/15/2025" todoName="Buy Books"></TodoItems>
      </div>
    </div>
  )
}

export default TodoItems
