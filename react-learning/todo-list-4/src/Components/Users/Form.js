import React from 'react'

const Form = ({formSubmitHandler, inputSecondChangeHandler, inputFirstChangeHandler}) => {
    return (
        <form>
            <div className='form__wrapper'>
                <label htmlFor="fname"></label>
                <input type="text" name="fName" onChange={inputFirstChangeHandler} id="fname" />
            </div>
            <div className='form__wrapper'>
                <label htmlFor="sname"></label>
                <input type="text" name="sName" onChange={inputSecondChangeHandler} id="sname" />
            </div>
            <div className='form__wrapper'>
                <label htmlFor="sname"></label>
                <input type="submit" onClick={formSubmitHandler} value={'Submit'} />
            </div>
        </form>
    )
}

export default Form