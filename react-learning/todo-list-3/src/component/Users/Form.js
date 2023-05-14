import React, { useState } from 'react'

import FormInputs from './FormInputs'
import TableData from './TableData'

const Form = (props) => {

    const [tableData, setTableData] = useState([])
    const [formInputData, setFormInputData] =useState({
        fullname : '',
        emailAddress : '',
        salary: ''
    })

    const inputChangeHandle = e => {
        // console.log(e);
        const newInput = data =>({
                ...data,
                [e.target.name] : e.target.value
        })
        setFormInputData(newInput)
    }

    const submitHandle = e => {
        e.preventDefault()
        if(formInputData.fullname.trim().length === 0 || formInputData.salary.trim().length === 0 || formInputData.emailAddress.trim().length === 0){
            return alert('Please Enter Some Value')
        }
        if(+formInputData.salary <= 0){
            return alert('Please More than zero')
        }
        const checkEmptyInput = !Object.values(formInputData).every(res => res=='')
        if(checkEmptyInput){
            const newData = (data) => ([...data, formInputData])
            setTableData(newData);
            const emptyInput = {fullname : '', emailAddress: '', salary :''}
            setFormInputData(emptyInput)
            // setFormInputData('')
        }
    }

    return (
        <>
            <FormInputs onInputChange={inputChangeHandle} formInputData={formInputData} onSubmitHandle={submitHandle}/>
            <TableData tableData={tableData}/>
        </>
    )
}

export default Form