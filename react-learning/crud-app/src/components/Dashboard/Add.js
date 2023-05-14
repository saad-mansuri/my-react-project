import React, { useState } from 'react'
import SweetAlert from 'sweetalert2'

function Add({employees, setEmployees, setIsAdding}) {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [salary, setSalary] = useState('')
    const [date, setDate] = useState('')

    const handleAdd = (e) => {
        e.preventDefault()
        // console.log(employees);
        if(!firstName || !lastName || !email || !salary || !date){
            return SweetAlert.fire({
                icon: 'error',
                title: 'error',
                text : 'All Fields are required',
                showConfirmButton: true
            })
        }

        const id = employees.length + 1
        const newEmployee = {
            id,
            firstName,
            lastName,
            email,
            salary,
            date
        }
        employees.push(newEmployee)
        localStorage.setItem('employees_data', JSON.stringify(employees));
        setEmployees(employees);
        setIsAdding(false);
        console.log(newEmployee);
    }
    return (
        <div className="small-container">
            <form onSubmit={handleAdd}>
                <h1>Add Employee</h1>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        id="firstName" 
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        id="lastName"
                        type="text"
                        name="lastName"
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="salary">Salary ($)</label>
                    <input
                        id="salary"
                        type="number"
                        name="salary"
                        value={salary}
                        onChange={e => setSalary(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="date">Date</label>
                    <input
                        id="date"
                        type="date"
                        name="date"
                        value={date}
                        onChange={e => setDate(e.target.value)}
                    />
                </div>
                <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Add" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsAdding(false)}
                    />
                </div>

            </form>
        </div>
    )
}

export default Add