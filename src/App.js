import React from "react";
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import CocktailInfo from "./pages/Cocktail-info";
import AboutPage from "./pages/AboutPage";
import SearchDrink from "./pages/SearchDrink";
import Filter from "./pages/Filter";

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/drink/:id" element={<CocktailInfo/>}/>
            <Route path="/search/:name" element={<SearchDrink/>}/>
            <Route path="/filter/:name" element={<Filter/>}/>
        </Routes>
    );
}

export default App;

