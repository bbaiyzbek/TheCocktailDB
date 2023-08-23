import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import Layout from "../components/layout";
import BtnBack from "../components/btn-back";
import ProductList from "../components/Product-list";

const SearchDrink = () => {
    const [drinks, setDrinks] = React.useState([])
    const params = useParams()

    useEffect(() => {
    axios(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${params.name}`)
        .then(res => setDrinks(res.data.drinks))
    },[params])
    return (
        <Layout>
            <BtnBack/>
            {drinks &&
                <ProductList drinks={drinks}/>
            }
        </Layout>
    );
};

export default SearchDrink;