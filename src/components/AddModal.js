import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { addPokemon } from '../redux/slices/pokemonSlice';
import InputField from './fields/InputField';
import SelectField from './fields/SelectField';
import { LuUpload } from "react-icons/lu";
import { formSchema } from './Validations/Schema';


const AddModal = ({ show, handleClose }) => {
    const dispatch = useDispatch()
    const [error, setError] = useState([])
    const pokeList = useSelector((state) => state?.pokemon?.pokeList)
    const [pokeDetail, setPokeDetail] = useState({
        name: "",
        description: "",
        image: "",
        type: "",
        weakness: ""

    })


    const handleInput = (event) => {
        const { name, value, type, files } = event.target;

        if (type === 'file') {
            const file = files[0];
            const objectURL = URL.createObjectURL(file);
            setPokeDetail((prevFormData) => ({ ...prevFormData, [name]: objectURL }));
        } else {
            setPokeDetail((prevFormData) => ({ ...prevFormData, [name]: value }));
        }
    };



    const handleAddPokemon = async () => {


        try {
            await formSchema.validate(pokeDetail, { abortEarly: false });

            dispatch(addPokemon({
                id: pokeList.length !== 0 ? pokeList[pokeList.length - 1]?.id + 1 : 1,
                ...pokeDetail
            }))
            setPokeDetail({
                name: "",
                description: "",
                image: "",
                type: "",
                weakness: ""

            })
            handleClose()
            setError("")
        } catch (error) {
            setError("Please Fill All Details")
        }



    }





    return (

        <Modal centered show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Capture Pkémon</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <div className="mb-3">

                        <div className='mb-3' >
                            <InputField
                                label="Name"
                                name="name"
                                value={pokeDetail?.name}
                                onChange={handleInput}
                                placeholder="Enter Name"

                            />
                        </div>

                        <div className='mb-3' >
                            <InputField
                                label="Description"
                                name="description"
                                value={pokeDetail?.description}
                                onChange={handleInput}
                                placeholder="Enter Description..."

                            />
                        </div>

                        <div className='mb-3' >
                            <SelectField
                                label="select Pokémon type"
                                name='type'
                                value={pokeDetail?.type}
                                onChange={handleInput}
                            />
                        </div>

                        <div className='mb-3' >
                            <SelectField
                                label="select Weakness"
                                name='weakness'
                                value={pokeDetail?.weakness}
                                onChange={handleInput}
                            />
                        </div>

                        <div className="file-input">
                            <label
                                className='file-label'

                                htmlFor="image">
                                <input
                                    type="file"
                                    id="image"
                                    name="image"
                                    className="file-input__input"
                                    onChange={handleInput}
                                />

                                {(pokeDetail?.image) ?
                                    <img className='form-img' src={pokeDetail?.image} />

                                    :
                                    <div className='file-input__label' >
                                        <span className="d-flex flex-column align-items-center " > <LuUpload />Image</span>
                                    </div>

                                }




                            </label>
                        </div>
                    </div>

                    <p className='text-danger mb-0 pb-0 fs12' >{error}</p>


                </form>

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleAddPokemon} variant="primary">
                    Add
                </Button>
            </Modal.Footer>
        </Modal>

    )
}

export default AddModal