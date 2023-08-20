import React from 'react';
import {Link} from "react-router-dom";

const ProductList = ({drinks}) => {
    return (
        <div>
            <div className="row">
                {
                    drinks.map((drink, idx) => {
                        return (
                            <div className={'col-4'} key={idx}>
                                    <Link to={`/drink/${drink.idDrink}`}>
                                        <div className={'box'}>
                                            <img src={drink.strDrinkThumb} alt={drink.strDrink}/>
                                            <div><h2>{drink.strDrink}</h2></div>
                                        </div>
                                    </Link>
                            </div>
                        )
                    })

                }
            </div>
        </div>
    );
};

export default ProductList;