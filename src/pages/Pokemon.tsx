import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { PokemonDetails } from '../models/PokemonDetails';
import { elPokemon } from '../apis/fechPokemon';

export const Pokemon = () => {
    const {name}=useParams();
    const [pokemon, setpokemon] = useState<PokemonDetails>();
    
    useEffect(() => {
        const fetchPokemon=async()=>{
            const allpokemon = await elPokemon(name as string);
            setpokemon(allpokemon);
          }
          fetchPokemon();
    }, [name])
    
  return (
    <>
        <main className='pokemon'>
            <h1>{pokemon?.id}</h1>
            <img src={pokemon?.imgsrc} alt={pokemon?.name} />
            <span>Attack: {pokemon?.attack}</span>
            <span>HP: {pokemon?.hp}</span>
        </main>
    </>
  )
}
