import React from 'react';
import {Link} from "react-router-dom";

import {auth} from "../../firebase/firebase.utils";

import {ReactComponent as Logo} from "../../assets/animal.svg";

import './header.styles.scss';

const Header = ({currentUser}) => {
    return (
        <div className='header'>
            <Link className='logo-container' to='/home'>
                <Logo
                    style={{width: '100px', height: '100px'}}
                    className='logo'
                />
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/contact'>
                    CONTACT
                </Link>
                {
                    currentUser ? (
                        <div className='option' onClick={() => auth.signOut()}>
                            SIGN OUT
                        </div>
                    ) : (
                        <Link className='option' to='/signin'>
                            SIGN IN
                        </Link>
                    )
                }
            </div>
        </div>
    );
}

export default Header;