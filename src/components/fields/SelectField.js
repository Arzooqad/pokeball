import React from 'react'

const SelectField = ({ label, name , onChange , value, error }) => {

    const pokemonCategories = [
        "Grass",
        "Fire",
        "Water",
        "Electric",
        "Bug",
        "Normal",
        "Flying",
        "Poison",
        "Ground",
        "Rock",
        "Fighting",
        "Psychic",
        "Ghost",
        "Ice",
        "Dragon",
        "Dark",
        "Steel",
        "Fairy"
    ];


    return (
        <>
            <label htmlFor={name} className="form-label mb-1">{label}</label>
            <select onChange={onChange} value={value} name={name} class="form-select form-select-sm" aria-label="Default select example">
                <option value="" selected><p className='text-secondary' >Select</p></option>
                {pokemonCategories.map((cate, i) => {
                    return <option  key={i} value={cate}>{cate}</option>
                })}     
            </select>
            <p className='text-danger mb-0 pb-0 fs12' >{error}</p>


        </>
    )
}

export default SelectField