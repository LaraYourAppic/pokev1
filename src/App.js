import React, {useEffect, useState} from 'react';
import './App.css';
import './Components/Pokemons.css';
import axios from "axios";
import Pokemons from "./Components/Pokemons";


function App() {
    const [pokemon,setPokemon] = useState ('')
    const [endpoint, setEndpoint] = useState('https://pokeapi.co/api/v2/pokemon')
    const [loading,toggleLoading] = useState(false)

    useEffect(()=>{
        async function getData (){
            toggleLoading(true);
            try {
                const result = await axios.get(`${endpoint}`);
                console.log(result.data.results);
                setPokemon(result.data);
            } catch (e){
            console.error(e);

            }
            setTimeout (()=>{
                toggleLoading(false);
            },1000)
        }


        getData();
    },[endpoint])

  return (
<>

      <div>
          <img className="imgage" src="assets/pokemon-logo-2-1.png"/>
          {loading ? <span>Loading....</span> : <>
          <button className='button'
              disabled={pokemon.previous ===null}
              type='button'
           onClick= {()=> setEndpoint(pokemon.previous)}
          ><span>
              Previous</span>
          </button>
          <button
              className='button'
              disabled={pokemon.next ===null}
              type='button'
              onClick= {()=> setEndpoint(pokemon.next)}
              >
              Next
          </button>
          <br/>
          <br/>
        {pokemon && pokemon.results.map((card) => {
            return <Pokemons key = {card.name} name = {card.name}/>
        })}
          </>}
    </div>
</>
    );
}
export default App;
