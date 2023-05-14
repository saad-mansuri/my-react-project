import React, { useEffect, useState } from 'react'
import Form from './Form'

const AddUsers = (props) => {
    const [todos, setTodos] = useState([]);
    // const [todo, setTodo] = useState("");

    const [enterFirstInput, setEnteredFirstInput] = useState('')
    const [enterSecondInput, setenterSecondInput] = useState('')

    const inputFirstChangeHandler = (e) => {
        setEnteredFirstInput(e.target.value)
        // console.log(e.target.value);
    }
    const inputSecondChangeHandler = (e) => {
        setenterSecondInput(e.target.value)
        // console.log(e.target.value);
    }
    useEffect(()=> {
        const json = localStorage.getItem('todos')
        const loadedTodos = JSON.parse(json)
        console.log(loadedTodos);
        if(loadedTodos){
            setTodos(loadedTodos)
        }
    }, [])

    useEffect(()=>{
        const json = JSON.stringify(todos)
        localStorage.setItem('todos', json)
    }, [todos])

    const formSubmitHandler = e => {
        e.preventDefault()
        // debugger
        const newTodo = {
            // id: new Date().getTime(),
            fname: enterFirstInput,
            sname: enterSecondInput,
            // completed: false,
        };
        setTodos([...todos].concat(newTodo));
        console.log(todos);
        JSON.stringify(localStorage.getItem('todos', todos))
        const getUsersList = JSON.parse(localStorage.getItem('todos'))
        // console.log(getUsersList);
        props.onAddUser(getUsersList)
        // console.log(todos);
        // console.log([...todos].concat(enterInput));
        return
        // const getUsersList = JSON.parse(localStorage.getItem('todos'))
        // setTodo("");
    }
    return (
        <Form formSubmitHandler={formSubmitHandler} inputFirstChangeHandler={inputFirstChangeHandler} inputSecondChangeHandler={inputSecondChangeHandler}/>
    )
}

export default AddUsers