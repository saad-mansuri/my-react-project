import React from 'react'
import Logout from '../Logout/Logout'

function Header({ setIsAdding, setIsAuthenticated }) {
    return (
        <header>
            <h1>Employee Management Software</h1>
            <div style={{marginTop : '30px', marginBottom: '18px'}}>
                <button onClick={() => setIsAdding(true)}>Add Employees</button>
                <Logout setIsAuthenticated={setIsAuthenticated}/>
            </div>
        </header>
    )
}

export default Header