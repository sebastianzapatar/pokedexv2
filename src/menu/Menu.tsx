import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Pokemon } from "../pages/Pokemon";
import { Pokemons } from "../pages/Pokemons";
import { Items } from "../pages/Items";
import { Footer } from "../components/Footer";
export const Menu = () => {
  return (
    <Router>
        <Routes>
            <Route path="/pokemons/:name" element={<Pokemon/>}/>
            <Route path="/pokemons" element={<Pokemons/>}/>
            <Route path="/items" element={<Items/>} />
            <Route path="/" element={<Pokemons/>}/>
        </Routes>
        <Footer/>
    </Router>
  )
}
