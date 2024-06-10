import React, { useEffect, useState } from 'react'
import './styles/Tasks.scss'
import { getToken } from '../Auth/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../utils/api';
import CreateModal from '../components/CreateModal';
import EditModal from '../components/EditModal';
const Tasks = () => {
    const navigate = useNavigate();
    const [filter, setFilter] = useState('All');
    const [isnewtask, setisnewtask] = useState(false);
    const [allTasks, setAllTasks] = useState([]);
    const [filteredTasks, setFilteredTasks] = useState([]);
    const [isEdit, setisEdit] = useState(false); 
    const [id, setid] = useState(''); 
    const [tasks, setTasks] = useState({
        title: '',
        description: '',
        status: 'Pending'
    });

    const handleEmpty = () => {
        setTasks({
            title: '',
            description: '',
            status: 'Pending'
        });
    }

    const handleTasks = (e) => {
        setTasks({ ...tasks, [e.target.name]: e.target.value });
    }
    const handleEdit=(id)=>{
        setid(id);
        setisEdit(true);
    }
    const handleNewTasks = () => {
        setisnewtask(!isnewtask);
    }

    const closeisnewtask = () => {
        setisnewtask(false);
        setisEdit(false);
        handleEmpty();
    }

    const handleFilter = (e) => {
        setFilter(e.target.value);
    }

    useEffect(() => {
        if (!getToken()) {
            navigate('/signin');
        }
    }, []);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await axios.get(`${API_URL}/tasks`);
                setAllTasks(response.data);
                setFilteredTasks(response.data); 
            } catch (err) {
                toast.error(err.response.data.message);
            }
        }
        fetchTasks();
    }, []);

    useEffect(() => {
        if (filter !== 'All') {
            const newTasks = allTasks.filter(task => task.status === filter);
            setFilteredTasks(newTasks);
        } else {
            setFilteredTasks(allTasks);
        }
    }, [filter, allTasks]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${API_URL}/task`, tasks, {
                headers: {
                    Authorization: `Bearer ${getToken()}`
                }
            });
            toast.success(response.data.message);
            const newTasks = [...allTasks, tasks];
            setAllTasks(newTasks);
            setFilteredTasks(newTasks);
            setisnewtask(false);
            handleEmpty();
        } catch (err) {
            toast.error(err.response.data.message);
            handleEmpty();
        }
    }
    const handleEditSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.patch(`${API_URL}/task/${id}`, tasks, {
                headers: {
                    Authorization: `Bearer ${getToken()}`
                }
            });
            toast.success(response.data.message);
            const newTasks = allTasks.map(task => {
                if (task._id === id) {
                    task.title = response.data.task.title;
                    task.description = response.data.task.description;
                    task.status = response.data.task.status;
                    return task;
                }
                else {
                    return task;
                }
            });
            setAllTasks(newTasks);
            setFilteredTasks(newTasks);
            setisEdit(false);
            handleEmpty();
        } catch (err) {
            toast.error(err.response.data.message);
            handleEmpty();
        }
    }
    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(`${API_URL}/task/${id}`, {
                headers: {
                    Authorization: `Bearer ${getToken()}`
                }
            });
            toast.success(response.data.message);
            const newTasks = allTasks.filter(task => task._id !== id);
            setAllTasks(newTasks);
            setFilteredTasks(newTasks); 
        } catch (err) {
            toast.error(err.response.data.message);
        }
    }

    return (
        <>
            {isnewtask &&
                <CreateModal 
                    handleSubmit={handleSubmit} 
                    closeisnewtask={closeisnewtask} 
                    handleTasks={handleTasks} 
                />
            }
            {isEdit &&
                <EditModal 
                    handleSubmit={handleEditSubmit}
                    closeisnewtask={closeisnewtask} 
                    handleTasks={handleTasks} 
                    id={id}
                />
            }
            <ToastContainer />
            <div className={`tasks ${isnewtask||isEdit ? 'blur' : ''}`}>
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
                            <select onChange={handleFilter}>
                                <option value='All'>All</option>
                                <option value='Pending'>Pending</option>
                                <option value='In Progress'>In Progress</option>
                                <option value='Completed'>Completed</option>
                            </select>
                        </div>
                    </div>
                    <div className='tasks-main'>
                        <div className='tasks-main-heading'>
                            <h1>All Tasks</h1>
                        </div>
                        <div className='table'>
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
                                    {filteredTasks.map((task, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{task?.title}</td>
                                                <td>{task?.description}</td>
                                                <td>{task?.status}</td>
                                                <td>
                                                    <button onClick={()=> handleEdit(task?._id)}>Edit</button>
                                                    <button onClick={() => handleDelete(task?._id)}>Delete</button>
                                                </td>
                                            </tr>
                                        )
                                    })}
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
