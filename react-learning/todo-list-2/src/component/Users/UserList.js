import React from 'react' 
import Card from '../UI/Card'
import classes from '../Css/UserList.module.css'

const UserList = (props) =>{
    
    console.log(props.users);
    console.log(props.users.length === 0);
    if(props.users.length === 0){
        return <Card className={classes.users}>
            <ul>
                <li>Please Enter Some Data</li>
            </ul> 
        </Card>
    }
    
    return (
        <Card className={classes.users}>
            <ul>
                {props.users.map((user) => {
                    console.log(user);
                    return (<li key={user.id}>
                        {user.name} ({user.age} years old)
                    </li>)
                })}
            </ul>
        </Card>
    )
}

export default UserList