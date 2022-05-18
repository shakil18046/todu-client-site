import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../Firebaseinit';
import "./todoApp.css"
import 'react-toastify/dist/ReactToastify.css';
const TodoApp = () => {
    
    const [task, setTask] = useState([]);
  
    const handleDelete =  (id) => {
        console.log(id);
        const url =  `https://mighty-sands-81902.herokuapp.com/collection/${id}`;
        fetch(url,{
            method: 'DELETE',
        })
        .then(res=> res.json())
        .then(data=> {
            const remaining = task.filter(product => product._id !== id)
            setTask(remaining);
        })

    }
   
    // receive all data
    useEffect(()=>{
        const url = `https://mighty-sands-81902.herokuapp.com/collection`;
        fetch(url)
        .then(res=> res.json())
        .then(data=> setTask(data))
    },[])

    // send data
    const handleTask = (e)=>{
       
        const task = e.target.task.value;
        const description = e.target.description.value;
        console.log(task, description)
        const data = {
            task: task,
            description: description
        }
        const url = `https://mighty-sands-81902.herokuapp.com/collection`;
        fetch(url,{
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
        .then(res=> res.json())
        .then(data=> console.log(data))
    }
    const handleComplete = ()=>{
        toast("complete")

    }
    return (
        <div>
            <h1>Task</h1>
            <form className='m-auto' onSubmit={handleTask}>
                <div class="mb-3 w-50 m-auto">
  
                <input type="text" name='task' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='task name'/>
                
                </div>
                <div class="mb-3 w-50 m-auto">
   
                 <input type="text" name='description' class="form-control" id="exampleInputPassword1" placeholder='task description'/>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>

            <div className='pt-5'>
                {
                    task.map(t=> <div className='task-item'>
                        <h2>{t.task}</h2>
                        <p>{t.description}</p>
                        <button onClick={()=>handleDelete(t._id)}>Delete</button>
                        <button onClick={handleComplete}>complete</button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default TodoApp;