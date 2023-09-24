import React from 'react'
import { useState } from 'react'
import plus from '../assets/images/add-card.svg'
import TaskArea from './TaskArea';

export default function TaskBlock(props) {
  const [isAreaOpen, setAreaOpen] = useState(false);
  const [taskText, setTaskText] = useState('')
  
  return (
    <div className='block'>
      <h3>{props.name}</h3>
      { props.tasks.length
        ? props.tasks.map((task, index) => {
          return <p key={index} style={{backgroundColor: '#fff', borderRadius: '5px', padding: '8px'}}>{ task }</p>
        })
        : <p style={{backgroundColor: '#fff', borderRadius: '5px', padding: '8px'}}>Нет задач</p>
      }
      {isAreaOpen ? <TaskArea text={taskText} setTaskText={setTaskText} /> : false}
      <button className='button' onClick={() => {
        if(props.name === 'Backlog') {
          if(isAreaOpen){
            setAreaOpen(!isAreaOpen);
            props.addTask(taskText);
            setTaskText('');
          } else {
            setAreaOpen(!isAreaOpen);
          }
        }

      }}>
        {isAreaOpen || <img src={plus} alt="add cart" />}
        <p style={{fontSize: '18px'}}>{isAreaOpen ? 'Submit' : 'Add card'}</p>
      </button>
    </div>
  )
}
