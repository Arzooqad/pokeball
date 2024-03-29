import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { addPokemon, editPokemon } from '../redux/slices/pokemonSlice';
import InputField from './fields/InputField';
import SelectField from './fields/SelectField';
import { LuUpload } from 'react-icons/lu';
import { formSchema } from './Validations/Schema';



const EditModal = ({ show, handleClose, selectID }) => {
    const dispatch = useDispatch()
    const [editDetail, setEditDetail] = useState({})
    const [error, setError] = useState(null)
    const pokeList = useSelector((state) => state?.pokemon?.pokeList)
    const [pokeDetail, setPokeDetail] = useState({
        name: "",
        description: "",
        type:"",
        weakness:"",
        image: ""

    })


    useEffect(() => {
        let editPokemon = pokeList?.find((poke) => poke?.id === selectID);
        setEditDetail(editPokemon)
    }, [selectID])



    const handleInput = (event) => {
        const { name, value, type, files } = event.target;

        if (type === 'file') {
            const file = files[0];
            const objectURL = URL.createObjectURL(file);
            setEditDetail((prevFormData) => ({ ...prevFormData, [name]: objectURL }));
        } else {
            setEditDetail((prevFormData) => ({ ...prevFormData, [name]: value }));
        }
    };



    const handleEditPokemon = async() => {


        try {
            await formSchema.validate(editDetail, { abortEarly: false });
        
            dispatch(editPokemon({
                id: selectID,
                pokemon: editDetail
            }))
    
            handleClose()
            setError("")

        } catch (error) {
            setError("Please Fill All Details")
        }



    }





    return (

        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Pokémon</Modal.Title>
            </Modal.Header>
            <Modal.Body>




                <form>
                    <div className="mb-3">

                        <div className='mb-3' >
                            <InputField
                                label="Name"
                                name="name"
                                value={editDetail?.name}
                                onChange={handleInput}
                                placeholder="Enter Name"

                            />
                        </div>

                        <div className='mb-3' >
                            <InputField
                                label="Description"
                                name="description"
                                value={editDetail?.description}
                                onChange={handleInput}
                                placeholder="Enter Description..."

                            />
                        </div>

                        <div className='mb-3' >
                            <SelectField
                                label="select Pokémon type"
                                name='type'
                                value={editDetail?.type}
                                onChange={handleInput}
                            />
                        </div>

                        <div className='mb-3' >
                            <SelectField
                                label="select Weakness"
                                name='weakness'
                                value={editDetail?.weakness}
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

                                {(editDetail?.image) ?
                                    <img className='form-img' src={editDetail?.image} />

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
                <Button onClick={handleEditPokemon} variant="primary">
                    Edit
                </Button>
            </Modal.Footer>
        </Modal>

    )
}

export default EditModal