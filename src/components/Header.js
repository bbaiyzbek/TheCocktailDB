import React from 'react';
import {Link} from "react-router-dom";
import Input from "./input";

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className={'header'}>
                    <div className={'logo'}>
                        <Link className={'linki'} to={'/'}><h1>LoGo</h1></Link>
                    </div>
                    <div className={'navs'}>
                        <nav>
                            <Link className={'linki'} to={'/'}>Home</Link>
                            <Link className={'linki'} to={'/about'}>About</Link>
                        </nav>
                        <Input/>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;