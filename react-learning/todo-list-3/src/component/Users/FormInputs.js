import React from 'react'
import classes from "../Css/FormInput.module.css"

const FormInputs = ({onInputChange, onSubmitHandle, formInputData}) => {
    return (
        <form className={classes.todo__form}>
            <div className={classes['todo__form-wrapper']}>
                <label htmlFor="fullname">Name </label>
                <input type="text" name="fullname" value={formInputData.fullname} onChange={onInputChange} id="fullname" />
            </div>
            <div className={classes['todo__form-wrapper']}>
                <label htmlFor="email">Email </label>
                <input type="email" name="emailAddress" value={formInputData.emailAddress} onChange={onInputChange} id="email" />
            </div>
            <div className={classes['todo__form-wrapper']}>
                <label htmlFor="salary">Salary </label>
                <input type="text" name="salary" value={formInputData.salary} onChange={onInputChange} id="salary" />
            </div>
            <div className={classes['todo__form-wrapper']}>
                <input type="submit" onClick={onSubmitHandle} />
            </div>
        </form>
    )
}

export default FormInputs