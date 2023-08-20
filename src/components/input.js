import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

const Input = () => {
    const [value, setValue] =useState('')
    const navigate = useNavigate()
    return (
        <div>
            <div className={'search-btn'}>
                <input type="text" onChange={(e) => setValue(e.target.value)}/>
                <button onClick={() => navigate(`/search/${value}`)} type="submit" >&#128269;</button>
            </div>
        </div>
    );
};

export default Input;