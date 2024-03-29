import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import PokemonList from './pokemonList';
import Button from 'react-bootstrap/Button';
import AddModal from './AddModal';
import title from '../assets/pokemin-title.png'
import ball from '../assets/pokeball-img.png'


const Main = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const pokeList = useSelector((state) => state?.pokemon?.pokeList)


    return (
        <>
            <div className='container-fluid bg-check' >
                <div className='container bg-white' >

                    {pokeList?.length === 0 ?
                        <>
                            <div className='text-center pt-3' ><img width='192px' src={title} /></div>
                            <div className='h-75 flex-column flex-md-row d-flex justify-content-center align-items-center' >
                                <h3 className='text-center' >Add a Pokémon to your collection.</h3>
                                <button className='border-0 bg-body rounded-5' >
                                    <img width="60px" onClick={handleShow} src={ball} />
                                </button>
                                <p className='mb-0' >Click me !!!</p>
                            </div>
                        </>

                        :
                        <>
                            <div className='pt-3 px-md-4 px-2 d-flex flex-row justify-content-between align-items-center' >
                                <div>
                                    <img width='192px' src={title} />
                                </div>
                                <div>
                                    <button className='border-0 bg-body rounded-5' >
                                        <img width="60px" onClick={handleShow} src={ball} />
                                    </button>
                                </div>

                            </div>

                            <PokemonList />

                        </>


                    }

                </div>
                <AddModal show={show} handleClose={handleClose} />
            </div>
        </>
    )
}

export default Main