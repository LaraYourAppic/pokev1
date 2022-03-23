import React, {useEffect, useState} from 'react';
import axios from "axios";

function Pokemons({name}) {
    const [pokemon, setPokemon] = useState(null)

    useEffect(()=>{
        async function getData (){
            try {
                const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
                console.log(result.data);
                setPokemon(result.data);
            } catch (e) {
                console.error(e);
                            }
        }


        getData();

    },[])


    return (

        <article>
                {pokemon &&<>
                <h1>{pokemon.name}</h1>
                <img src= {pokemon.sprites.front_default} alt= 'picture'/>
                <h3>Moves: {pokemon.moves.length}</h3>
                <h3>Weight: {pokemon.weight}</h3>
                <h3>Abilities:</h3>
                    <ul>{pokemon.abilities.map((banaan) =>{
                return (
                   <li key = {banaan.slot}>
                   {banaan.ability.name}
                   </li>)})}
                </ul>
                </>
            }
        </article>
     );
}

export default Pokemons;