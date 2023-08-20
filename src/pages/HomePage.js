import React, {useEffect, useState} from 'react';
import axios from "axios";
import Layout from "../components/layout";
import {Link} from "react-router-dom";

const HomePage = () => {
    const [drinks, setDrinks] = useState({})

    useEffect(() => {
        axios('https://www.thecocktaildb.com/api/json/v1/1/random.php')
            .then(res => setDrinks(res.data.drinks[0]))
    }, [])

    return (
        <Layout>
            <div className="container">
                <div className={'home-card'}>
                   <Link to={`/drink/${drinks.idDrink}`}>
                       <div className="card">
                           <img src={drinks.strDrinkThumb} alt={drinks.strDrink}/>
                           <div><h2>{drinks.strDrink}</h2></div>
                       </div>
                   </Link>
                </div>
            </div>
        </Layout>
    )
};

export default HomePage
