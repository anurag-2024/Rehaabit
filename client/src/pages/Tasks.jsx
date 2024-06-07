import React, { useState } from 'react'
import './styles/Tasks.scss'
import { ImCross } from "react-icons/im";
const Tasks = () => {
    const [isnewtask, setisnewtask] = useState(false);
    const handleNewTasks = () => {
        setisnewtask(!isnewtask);
    }
    const closeisnewtask=()=>{
        setisnewtask(false)
    }
    return (
        <>
          {isnewtask &&
                    <div className="create-task">
                    <ImCross className='cross' onClick={closeisnewtask} />
                        <div className="create-tasks-container">
                            <form>
                                <div>
                                    <label htmlFor="title">Title:</label>
                                    <input
                                        type="text"
                                        id="title"
                                        name="title"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="description">Description:</label>
                                    <textarea
                                        id="description"
                                        name="description"
                                        required
                                    ></textarea>
                                </div>
                                <div>
                                    <label htmlFor="status">Status:</label>
                                    <select
                                        id="status"
                                        name="status"
                                        required
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
                }
            <div className={`tasks ${isnewtask ? 'blur' : ''}`}>
                <div className='tasks-container'>
                    <div className='heading'>
                        <h1>Task Management System</h1>
                    </div>
                    <div className='tasks-middle'>
                        <div className='create-button'>
                            <button onClick={handleNewTasks}>
                                <span>Create New Task</span>
                            </button>
                        </div>
                        <div className='filter'>
                            <label>Filter By:</label>
                            <select>
                                <option>All</option>
                                <option>Pending</option>
                                <option>In Progress</option>
                                <option>Completed</option>
                            </select>
                        </div>
                    </div>
                    <div className='tasks-main'>
                        <div className='tasks-main-heading'>
                            <h1>All Tasks</h1>
                        </div>
                        <div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Description</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Task 1</td>
                                        <td>Task 1 Description</td>
                                        <td>Pending</td>
                                        <td>
                                            <button>Edit</button>
                                            <button>Delete</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Task 2</td>
                                        <td>Task 2 Description</td>
                                        <td>In Progress</td>
                                        <td>
                                            <button>Edit</button>
                                            <button>Delete</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Task 3</td>
                                        <td>Task 3 Description</td>
                                        <td>Completed</td>
                                        <td>
                                            <button>Edit</button>
                                            <button>Delete</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tasks
