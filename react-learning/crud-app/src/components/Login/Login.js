import React, { useState } from 'react'

import SweetAlert from 'sweetalert2'
function Login({setIsAuthenticated}) {
    const adminEmail = 'saad@gmail.com'
    const adminPwd = 'saad123'
    
    const [enteredEmail, setEnteredEmail] = useState('saad@gmail.com')
    const [enteredPwd, setEnteredPwd] = useState('saad123')

    const handlerSubmit = e => {
        e.preventDefault()
        console.log(enteredEmail, enteredPwd);
        if(adminEmail === enteredEmail && adminPwd === enteredPwd){
            SweetAlert.fire({
                timer : 1500,
                showConfirmButton: false,
                willOpen: ()=>{
                    SweetAlert.showLoading()
                },
                willClose: () =>{
                    localStorage.setItem('is_authenticated', true)
                    setIsAuthenticated(true)
                    SweetAlert.fire({
                        icon:'success',
                        title: 'Succesfully Logged in!',
                        showConfirmButton : false,
                        timer: 1500
                    })
                }
            })
        }else{
            SweetAlert.fire({
                timer: 1500,
                showConfirmButton: false,
                willOpen: () => {
                    SweetAlert.showLoading()
                },
                willClose: () => {
                    SweetAlert.fire({
                        icon: 'error',
                        title : 'Error!',
                        text: 'Incorrect email or password.',
                        showConfirmButton: true
                    })
                }
            })
        }
    }

    return (
        <div className="small-container">
            <form onSubmit={handlerSubmit}>
                <h1>Admin Login</h1>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email"
                        id="email"
                        name="email"
                        placeholder="admin@example.com"
                        value={enteredEmail} 
                        onChange={ e => setEnteredEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input id="password"
                            type="password"
                            name="password"
                            placeholder="qwerty"
                            value={enteredPwd}
                            onChange={ e => setEnteredPwd(e.target.value)}/>
                </div>
                <div>
                    <input type="submit" value="Login"/>
                </div>
            </form>
        </div>
    )
}

export default Login