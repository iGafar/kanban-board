import React from 'react'

export default function TaskArea(props) {

  function handleChange(e) {
    props.setTaskText(e.target.value)
  }

  return (
    <input style={{fontSize: 'inherit', borderRadius: '5px', padding: '8px'}} 
    value={props.text} onChange={handleChange} name="task" placeholder='Введите новую задачу' />
  )
}
