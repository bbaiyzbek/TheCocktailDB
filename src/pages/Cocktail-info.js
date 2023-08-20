import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import Layout from "../components/layout";
import BtnBack from "../components/btn-back";

const CocktailInfo = () => {
    const [drink, setDrink] = useState({})
    const params = useParams()

    useEffect(() => {
        axios(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.id}`)
            .then(res => setDrink(res.data.drinks[0]))
    },[params.id])
    return (
        <Layout>
            <BtnBack/>
            <div className="drink-info">
                <div className="img-info">
                    <h2>{drink.strDrink}</h2>
                    <img src={drink.strDrinkThumb} alt={drink.strDrink}/>
                </div>
                <div className={'frow'}>
                    <div className="row">
                        {drink.strIngredient1 &&
                            <div className="col-4">
                                <div className="info-card">
                                    <Link className={'ing-link'} to={`/filter/${drink.strIngredient1}`}>
                                        <img className={'img-ing'}
                                             src={`https://www.thecocktaildb.com/images/ingredients/${drink.strIngredient1}.png`}
                                             alt=""/>
                                        <h3>{drink.strIngredient1}</h3>
                                    </Link>
                                </div>
                            </div>
                        }
                        {drink.strIngredient2 &&
                            <div className={'col-4'}>
                                <div className="info-card">
                                    <Link className={'ing-link'} to={`/filter/${drink.strIngredient2}`}>
                                        <img className={'img-ing'}
                                             src={`https://www.thecocktaildb.com/images/ingredients/${drink.strIngredient2}.png`}
                                             alt=""/>
                                        <h3>{drink.strIngredient2}</h3>
                                    </Link>
                                </div>
                            </div>
                        }
                        {drink.strIngredient3 &&
                            <div className={'col-4'}>
                                <div className="info-card">
                                    <Link className={'ing-link'} to={`/filter/${drink.strIngredient3}`}>
                                        <img className={'img-ing'}
                                             src={`https://www.thecocktaildb.com/images/ingredients/${drink.strIngredient3}.png`}
                                             alt=""/>
                                        <h3>{drink.strIngredient3}</h3>
                                    </Link>
                                </div>
                            </div>
                        }
                        {drink.strIngredient4 &&
                            <div className={'col-4'}>
                                <div className="info-card">
                                    <Link className={'ing-link'} to={`/filter/${drink.strIngredient4}`}>
                                        <img className={'img-ing'}
                                             src={`https://www.thecocktaildb.com/images/ingredients/${drink.strIngredient4}.png`}
                                             alt=""/>
                                        <h3>{drink.strIngredient4}</h3>
                                    </Link>
                                </div>
                            </div>
                        }
                        {drink.strIngredient5 &&
                            <div className={'col-4'}>
                                <div className="info-card">
                                    <Link className={'ing-link'} to={`/filter/${drink.strIngredient5}`}>
                                        <img className={'img-ing'}
                                             src={`https://www.thecocktaildb.com/images/ingredients/${drink.strIngredient5}.png`}
                                             alt=""/>
                                        <h3>{drink.strIngredient5}</h3>
                                    </Link>
                                </div>
                            </div>
                        }
                        {drink.strIngredient6 &&
                            <div className={'col-4'}>
                                <div className="info-card">
                                    <Link className={'ing-link'} to={`/filter/${drink.strIngredient6}`}>
                                        <img className={'img-ing'}
                                             src={`https://www.thecocktaildb.com/images/ingredients/${drink.strIngredient6}.png`}
                                             alt=""/>
                                        <h3>{drink.strIngredient6}</h3>
                                    </Link>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
            {/*<p>{drink.strInstructions}</p>*/}
        </Layout>
    );
};

export default CocktailInfo;