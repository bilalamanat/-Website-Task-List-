import React from 'react'

function Task() {
  return (
    <>
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Task List 2023</title>
    <link rel="stylesheet" href="main.css" />
    <header>
      <h1>Task List 2023</h1>
      <form id="new-task-form">
        <input
          type="text"
          name="new-task-input"
          id="new-task-input"
          placeholder="What do you have planned?"
        />
        <input type="submit" id="new-task-submit" defaultValue="Add task" />
      </form>
    </header>
    <main>
      <section className="task-list">
        <h2> Completed Tasks</h2>
        <div id="tasks">
          {/* <div class="task">
                      <div class="content">
                          <input 
                              type="text" 
                              class="text" 
                              value="A new task"
                              readonly>
                      </div>
                      <div class="actions">
                          <button class="edit">Edit</button>
                          <button class="delete">Delete</button>
                      </div>
                  </div> */}
        </div>
      </section>
    </main>
  </>
  
  )
}

export default Task