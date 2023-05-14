import React from 'react'

const UserList = (props) => {
    const getUsersList = JSON.parse(localStorage.getItem('todos'))
    console.log(getUsersList);
    // console.log(getUsersList);
    // const init = () => {
    // }
    console.log(props.users);
    if(getUsersList === null && getUsersList == undefined){
        return (
            <ul>
                <li>No Data Found</li>    
            </ul>
        )
    }
    // if(!props.users == undefined){
        return (
            <ul>
                {getUsersList.map((user, index) => {
                    console.log(index,user);
                    return (
                        <li key={index}> {index+1} {user.fname} {user.sname}</li>
                    )
                })}
            </ul>
        )
    // }
}

export default UserList