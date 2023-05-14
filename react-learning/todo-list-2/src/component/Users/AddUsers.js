import {React, useRef, useState} from 'react'
import Card from '../UI/Card';
import classes from '../Css/AddUser.module.css'
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModel';

const AddUsers =(props) =>{

    const InputUserName = useRef()
    const InputUserAge = useRef()
    // const [enteredUsername, setEnterUsername] = useState('')
    // const [enteredAge, setEnterAge] = useState('')
    const [error, setError] = useState()

    // const usernameChangeHandler = e =>{
    //     setEnterUsername(e.target.value)
    // }
    // const ageChangeHandler = e =>{
    //     setEnterAge(e.target.value)
    // }

    const addUserHandler = event => {
        event.preventDefault()
        const InputUserNameVal = InputUserName.current.value
        const InputUserAgeVal = InputUserAge.current.value
        console.log(InputUserNameVal, InputUserAgeVal);
        // return
        if(InputUserNameVal.trim().length === 0 || InputUserAgeVal.trim().length === 0){
            // return alert('Please Enter Some Value')
            setError(
                {
                    title : 'Invalid Input',
                    message : 'Please enter a valid name and age ( non empty values )'
                }
            )
            return
        }
        if(+InputUserAgeVal < 1){
            setError(
                {
                    title : 'Invalid Age',
                    message : 'Please enter a valid age ( > 0 )'
                }
            )
            return
        }
        props.onAddUser(InputUserNameVal, InputUserAgeVal)    
        // console.log(enteredUsername, +enteredAge);
        InputUserName.current.value = ''
        InputUserAge.current.value = ''
        // setEnterUsername('')
        // setEnterAge('')
    }
    const errorHandler = () => {
        setError(null)
    }
    return (
        <>
            {error && (<ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>)}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="" ref={InputUserName} id="username"/>
                    <label htmlFor="age">Age</label>
                    <input type="number" name="" ref={InputUserAge} id="age"/>
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </>
    )
}

export default AddUsers