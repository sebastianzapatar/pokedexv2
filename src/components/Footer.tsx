
import { Link } from 'react-router-dom'
import PokemonPic from '../assets/pikachu.png'
import PokeBall from '../assets/pokeball.png'
import Mapa from '../assets/mapa.png'

export const Footer = () => {
  return (
    <footer>
        <Link to="/pokemons" className='footerLink'>
            <img src={PokemonPic} alt='todos'/>
        </Link>
        <Link to="/items" className='footerLink'>
            <img src={PokeBall} alt='Items'/>
        </Link>
        <Link to="/pokemons" className='footerLink'>
            <img src={Mapa} alt='Zonas'/>
        </Link>
    </footer>
  )
}
