import React, { useEffect, useState } from 'react'

import employeesData from '../../data/data'
import Header from "../Dashboard/Header";
import Add from "../Dashboard/Add";
import Edit from "../Dashboard/Edit";
import Table from "../Dashboard/Table";
import SweetAlert from "sweetalert2";

function Dashboard({ setIsAuthenticated }) {
    const [employees, setEmployees] = useState(employeesData)
    const [selectedEmployee, setSelectedEmployee] = useState(null)
    const [isAdding, setIsAdding] = useState(false)
    const [isEditing, setIsEditing] = useState(false)

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('employees_data'))
        if(data !== null && Object.keys(data).length !== 0){
            setEmployees(data)
        }
    })

    const handleEdit = id => {
        const [employee] = employees.filter(employee => employee.id === id)
        setSelectedEmployee(employee)
        setIsEditing(true);
    }

    const handleDelete = id =>{
        SweetAlert.fire({
            icon:'warning',
            title : 'Are You Sure',
            text : "you won't be able to revert this!",
            showCancelButton: true,
            confirmButtonText: 'Yes, Delete it!',
            cancelButtonText: 'No, Cancel!'
        }).then(result => {
            console.log(result);
            if(result.value){
                const [employee] = employees.filter(employee => employee.id === id)
                console.log(employee);

                SweetAlert.fire({
                    icon:'success',
                    title: 'Deleted',
                    text: `${employee.firstName} ${employee.lastName}'s data has been deleted.`,
                    showConfirmButton: false,
                    timer: 1500,
                })

                const employeesCopy = employees.filter(employee => employee.id !== id)
                localStorage.setItem('employees_data', JSON.stringify(employeesCopy))
                setEmployees(employeesCopy);
            }
        })
    }
    return (
        <div className="container">
            {!isAdding && !isEditing &&(
                <>
                    <Header 
                        setIsAdding={setIsAdding} 
                        setIsAuthenticated={setIsAuthenticated}
                    />
                    <Table 
                        employees={employees}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                    />
                </>
            )}
            {isAdding && (
                <Add 
                    employees={employees}
                    setEmployees={setEmployees}
                    setIsAdding={setIsAdding}
                />
            )}
            {isEditing && (
                <Edit
                    employees={employees}
                    selectedEmployee={selectedEmployee}
                    setEmployees={setEmployees}
                    setIsEditing={setIsEditing}
                />
            )}
        </div>
    )
}

export default Dashboard