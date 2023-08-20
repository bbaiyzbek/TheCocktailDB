import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import Layout from "../components/layout";
import BtnBack from "../components/btn-back";
import ProductList from "../components/Product-list";

const Filter = () => {
    const [drinks, setDrinks] = useState([])
    const params = useParams()

    useEffect(() => {
        axios(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${params.name}`)
            .then(res => setDrinks(res.data.drinks))
    },[params.name])
    return (
        <Layout>
        <BtnBack/>
           <div className={'product'}> <div className={'product-card'}>
               <img src={`https://www.thecocktaildb.com/images/ingredients/${params.name}.png`} alt={params.name}/>
               <h2>{params.name}</h2>
           </div></div>
            <ProductList drinks={drinks}/>
        </Layout>
    );
};

export default Filter;