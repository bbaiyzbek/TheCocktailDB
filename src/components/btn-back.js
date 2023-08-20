import React from 'react';
import {useNavigate} from "react-router-dom";

const BtnBack = () => {
    const navigate = useNavigate()
    return (
        <div>
            <button className={'btn-back'} onClick={() => navigate(-1)}>Back</button>
        </div>
    );
};

export default BtnBack;