import React from 'react'
import SweetAlert from 'sweetalert2'

function Logout({setIsAuthenticated}) {
    const handleLogout = () =>{
        SweetAlert.fire({
            icon: 'question',
            title : 'Loggin Out',
            text : 'Are you sure you want to log out?',
            showCancelButton : true,
            confirmButtonText: 'Yes'
        }).then(result => {
            SweetAlert.fire({
                timer: 1500,
                showConfirmButton: false,
                willOpen: ()=>{
                    SweetAlert.isLoading()
                },
                willClose: () => {
                    localStorage.setItem('is_authenticated', false)
                    setIsAuthenticated(false)
                }
            })
        })
    }
    return (
        <button style={{ marginLeft: '12px'}} className='muted-button' onClick={handleLogout}> Logout </button>
    )
}

export default Logout