import React from 'react'

const TableData = (props) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>S.N</th>
                    <th>Full Name</th>
                    <th>Email Address</th>
                    <th>Salary</th>
                </tr>
            </thead>
            <tbody>
            {
                props.tableData.map((data, index)=>{
                    return(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{data.fullname}</td>
                            <td>{data.emailAddress}</td>
                            <td>{data.salary}</td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    )
}

export default TableData