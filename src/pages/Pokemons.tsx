import { Header } from '../components/Header';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { todosLosPokemon } from '../apis/fechPokemons';
import { IPokemon } from '../models/IPokemon';
export const Pokemons = () => {
    const [query, setquery] = useState("");
    const [pokemon, setpokemon] = useState<any>([]);
    useEffect(() => {
      const fetchPokemon=async()=>{
        const allpokemon = await todosLosPokemon();
        setpokemon(allpokemon);
      }
      fetchPokemon();
    }, [])
    const filterPokemon=pokemon?.slice(0,151).filter((poke:any)=>{
        return poke.name.toLowerCase().match(query.toLowerCase());
    });
  return (
    <>

        <Header query={query} setquery={setquery}/>
        <div className='app'>
            <main>
                
                <nav>
                    {filterPokemon?.slice(0,151).map((poke:IPokemon)=>(
                        <Link to={`/pokemons/${poke.name.toLowerCase()}`} className='listItem' key={poke.id}>
                            <img src={poke.imgsrc} alt='bullbasuar' className='listIcon'/>
                        <div className='listItemText'>
                            <span className='nombre'>{poke.name}</span>
                            <span>{poke.id}</span>
                        </div>

                        </Link>
                    ))}
        
                </nav>
            </main>
        </div>
    </>
  )
}
