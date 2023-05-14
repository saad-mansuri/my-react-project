import React, { useEffect, useState } from 'react';

import Dashboard  from ".././Dashboard/index.js";
import Login from '../Login/Login.js'

function App(props) {

    const [isAuthenticated, setIsAuthenticated] = useState(null)

    useEffect(() => {
        setIsAuthenticated(JSON.parse(localStorage.getItem('is_authenticated')))
    }, [])

    return (
        <>
        {isAuthenticated ? (
            <Dashboard setIsAuthenticated={setIsAuthenticated}/>
        ) : (
            <Login setIsAuthenticated={setIsAuthenticated}/>
            )
        }
        </>
    );
}

export default App;
