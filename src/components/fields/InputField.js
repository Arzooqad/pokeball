import React from 'react'

const InputField = ({ label, name, onChange, value, error, placeholder }) => {
    return (
        <>
            <label htmlFor={name} className="form-label mb-1">{label}</label>
            <input
                type="text"
                className="form-control form-control-sm"
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
            <p className='text-danger mb-0 pb-0 fs12' >{error}</p>
        </>
    )
}

export default InputField