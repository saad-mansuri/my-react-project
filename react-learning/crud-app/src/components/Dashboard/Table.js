import React from 'react'

function Table({employees, handleEdit, handleDelete}) {
    employees.forEach((employee, i) => {
        employee.id = i + 1;
    });

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: null,
    });
    return (
        <div className="container-table">
            <table className="striped-table">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Salary</th>
                        <th>Date</th>
                        <th colSpan={2} className='text-center'>
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {employees.length > 0 ? (
                        employees.map((emp, i) => (
                            <tr key={emp.id}>
                                <td>{i + 1}</td>
                                <td>{emp.firstName}</td>
                                <td>{emp.lastName}</td>
                                <td>{emp.email}</td>
                                <td>{formatter.format(emp.salary)}</td>
                                <td>{emp.date}</td>
                                <td className='text-right'>
                                    <button onClick={() => handleEdit(emp.id)}
                                        className='button muted-button'>Edit</button>
                                </td>
                                <td className='text-left'>
                                    <button 
                                        onClick={()=> handleDelete(emp.id)}
                                        className='button muted-button'>Delete</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={7}>No Employess</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Table