import React from 'react'
import { ImCross } from "react-icons/im";
const EditModal = ({handleSubmit,closeisnewtask,handleTasks}) => {
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
                                    onChange={handleTasks}
                                />
                            </div>
                            <div>
                                <label htmlFor="description">Description:</label>
                                <textarea
                                    id="description"
                                    name="description"
                                    onChange={handleTasks}
                                ></textarea>
                            </div>
                            <div>
                                <label htmlFor="status">Status:</label>
                                <select
                                    id="status"
                                    name="status"
                                    onChange={handleTasks}
                                >
                                    <option value="Pending">Pending</option>
                                    <option value="In Progress">In Progress</option>
                                    <option value="Completed">Completed</option>
                                </select>
                            </div>
                            <button type="submit">Edit Task</button>
                        </form>
                    </div>
                </div>
    </>
  )
}

export default EditModal
