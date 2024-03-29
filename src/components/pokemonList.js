import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import EditModal from './EditModal'
import { Button } from 'react-bootstrap'
import { deletePokemon } from '../redux/slices/pokemonSlice'
import { MdDelete, MdEdit } from "react-icons/md";
import PokemonCard from './fields/PokemonCard'

const PokemonList = () => {
    const [selectID, setSelectID] = useState(null)
    const [show, setShow] = useState(false);
    const dispatch = useDispatch()
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const pokeList = useSelector((state) => state?.pokemon?.pokeList)



    const getTypeColor = (type) => {
        let color;
        switch (type) {
            case "Grass":
                color = "green";
                break;
            case "Fire":
                color = "red";
                break;
            case "Water":
                color = "blue";
                break;
            case "Electric":
                color = "yellow";
                break;
            case "Bug":
                color = "orange";
                break;
            case "Normal":
                color = "brown";
                break;
            case "Flying":
                color = "skyblue";
                break;
            case "Poison":
                color = "purple";
                break;
            case "Ground":
                color = "saddlebrown";
                break;
            case "Rock":
                color = "gray";
                break;
            case "Fighting":
                color = "maroon";
                break;
            case "Psychic":
                color = "magenta";
                break;
            case "Ghost":
                color = "darkviolet";
                break;
            case "Ice":
                color = "lightblue";
                break;
            case "Dragon":
                color = "darkorange";
                break;
            case "Dark":
                color = "darkslategray";
                break;
            case "Steel":
                color = "steelblue";
                break;
            case "Fairy":
                color = "pink";
                break;
            default:
                color = "black";
                break;
        }
        return color;
    };


    const editModal = (id) => {
        handleShow()
        setSelectID(id)
    }





    return (
        <div className='row mt-5 gy-3 gy-md-4' >
            {
                pokeList?.map((pokemon) => {
                    return <div className='col-lg-3' >

                        <PokemonCard editModal={editModal} pokemon={pokemon} />
                    </div>

                })
            }

            <EditModal show={show} handleClose={handleClose} selectID={selectID} />
        </div>
    )
}

export default PokemonList