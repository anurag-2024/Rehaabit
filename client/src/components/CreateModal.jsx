import React from 'react'
import { ImCross } from "react-icons/im";
const CreateModal = ({handleSubmit,closeisnewtask,handleTasks}) => {
  return (
    <>
         <div className="create-task">
                    <ImCross className='cross' onClick={closeisnewtask} />
                    <div className="create-tasks-container">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="title">Title:</label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    required
                                    onChange={handleTasks}
                                />
                            </div>
                            <div>
                                <label htmlFor="description">Description:</label>
                                <textarea
                                    id="description"
                                    name="description"
                                    required
                                    onChange={handleTasks}
                                ></textarea>
                            </div>
                            <div>
                                <label htmlFor="status">Status:</label>
                                <select
                                    id="status"
                                    name="status"
                                    required
                                    onChange={handleTasks}
                                >
                                    <option value="Pending">Pending</option>
                                    <option value="In Progress">In Progress</option>
                                    <option value="Completed">Completed</option>
                                </select>
                            </div>
                            <button type="submit">Create Task</button>
                        </form>
                    </div>
                </div>
    </>
  )
}

export default CreateModal
