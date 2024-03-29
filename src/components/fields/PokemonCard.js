import React from 'react'
import { MdDelete, MdEdit } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { deletePokemon } from '../../redux/slices/pokemonSlice';

const PokemonCard = ({ pokemon, editModal }) => {

    const dispatch = useDispatch()
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


    return (
        <div className='card h-100 px-3 py-2 mx-auto' style={{border:`3px solid ${getTypeColor(pokemon?.type)}`}} >
            <div className='d-flex justify-content-between gap-1 align-items-center' >
                <h4 className='mb-2 poke-name' >{pokemon?.name}</h4>
                <div className='d-flex justify-content-between align-items-center' >
                    <h5 onClick={() => editModal(pokemon?.id)}  ><MdEdit /></h5>
                    <h5 onClick={() => { dispatch(deletePokemon(pokemon?.id)) }} className='pointor'  ><MdDelete /></h5>
                </div>
            </div>
            <img  className='card-image mx-auto rounded-2' src={pokemon?.image} />
            <p className='text-secondary desc-text mt-2 mb-2' >{pokemon?.description}</p>
            <div>
                <p className='mb-0 pb-0' >Type:<p style={{ backgroundColor: getTypeColor(pokemon?.type) }} className='badge ms-2' >{pokemon?.type}</p></p>
            </div>
            <div>

                <p className='mb-0 pb-0' > Weakness:<p style={{ backgroundColor: getTypeColor(pokemon?.weakness) }} className='badge ms-2' >{pokemon?.weakness}</p></p>

            </div>
        </div>
    )
}

export default PokemonCard