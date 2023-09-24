import React from 'react'
import TaskBlock from './TaskBlock'
import { useState, useEffect } from 'react'

export default function Main() {
  function useLocalStorageTasks() {
    const [ state, setState ] = useState(() => localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : {
      backlog: [],
      ready: [],
      in_progress: [],
      finished: []
    })

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [state])

    return [ state, setState ]
}

  const [tasks, setTasks] = useLocalStorageTasks()

  function addBacklogTask(task) {
    setTasks({
      backlog: [...tasks.backlog, task],
      ready: [...tasks.ready],
      in_progress: [...tasks.in_progress],
      finished: [...tasks.finished]
    })
  }

  return (
    <div className='main'>
      <div className="container">
        <TaskBlock name='Backlog' tasks={tasks.backlog} addTask={addBacklogTask}></TaskBlock>
        <TaskBlock name='Ready' tasks={tasks.ready}></TaskBlock>
        <TaskBlock name='In Progress' tasks={tasks.in_progress}></TaskBlock>
        <TaskBlock name='Finished' tasks={tasks.finished}></TaskBlock>
      </div>
    </div>
  )
}
